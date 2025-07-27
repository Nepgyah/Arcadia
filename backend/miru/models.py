from django.db import models
from shared.models import Character, Company, Genre
from django.utils.text import slugify

class Season(models.Model):

    class Type(models.IntegerChoices):
        WINTER = 0, 'Winter'
        SPRING = 1, 'Spring'
        SUMMER = 2, 'Summer'
        FALL = 3, 'Fall'

    season=models.IntegerField(choices=Type.choices, null=True, blank=True)
    year=models.IntegerField(default=2000, blank=True)

    def __str__(self):
        return f"{self.get_season_display()} {self.year}"
    
class Anime(models.Model):

    class MediaType(models.IntegerChoices):
        TV = 0, 'Tv'
        MOVIE = 1, 'Movie'
        OVA = 2, 'OVA'
        ONA = 3, 'ONA'
        WEB = 4, 'Web'

    class Status(models.IntegerChoices):
        NOT_AIRED = 0, 'Not yet aired'
        AIRING = 1, 'Airing'
        COMPLETED = 2, 'Finished airing'
        
    class Rating(models.IntegerChoices):
        G = 0, 'All ages'
        PG = 1, 'Children'
        PG_13 = 2, 'Teens 13 or older'
        R = 3, '17+ (Violence/Profanity)'

    title=models.CharField(max_length=255, null=False, blank=False)
    title_ja=models.CharField(max_length=255, null=True, blank=True)
    title_romaji=models.CharField(max_length=255, null=True, blank=True)
    title_alternatives=models.JSONField(default=list, blank=True)
    slug=models.SlugField(unique=True, null=False, blank=True)
    summary=models.TextField(default='A synopsis will be written later', blank=True)
    season=models.ForeignKey(Season, on_delete=models.SET_NULL, null=True, blank=True)
    status=models.IntegerField(choices=Status.choices, default=Status.NOT_AIRED)
    
    characters=models.ManyToManyField(Character, through='AnimeCharacter', related_name='animes', blank=True)
    genres=models.ManyToManyField(Genre, related_name='animes', blank=True)
    related=models.ManyToManyField('self', through='AnimeRelation', symmetrical=False, related_name='related_anime', blank=True)
    
    type=models.IntegerField(choices=MediaType.choices, default=MediaType.TV)
    studio=models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, blank=True)
    rating=models.IntegerField(choices=Rating.choices, default=Rating.G, blank=True)
    score=models.FloatField(default=0.0, blank=True)
    users=models.IntegerField(default=0, blank=True)
    airing_start_date=models.DateField(null=True, blank=True)
    airing_end_date=models.DateField(null=True, blank=True)

    class Meta:
        ordering = ['-score']

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)

        super().save(*args, **kwargs)

class AnimeCharacter(models.Model):

    class Role(models.IntegerChoices):
        MAIN = 0, 'Main'
        SUPPORT = 1, 'Supporting'

    anime=models.ForeignKey(Anime, on_delete=models.CASCADE)
    character=models.ForeignKey(Character, on_delete=models.CASCADE)
    role=models.IntegerField(choices=Role.choices, default=Role.SUPPORT, blank=True)

    def __str__(self):
        return f"{self.character} in {self.anime} as {self.get_role_display()} character"
    
class AnimeRelation(models.Model):

    class Type(models.TextChoices):
        PREQUEL = 'prequel', 'Prequel'
        SEQUEL = 'sequel', 'Sequel'
        SPINOFF = 'spinoff', 'Spin-off'
        SIDE_STORY = 'side_story', 'Side Story'
        ALTERNATIVE_VERSION = 'alternataive_version', 'Alternate'
        OTHER = 'other',  'Other'

    from_anime = models.ForeignKey('Anime', on_delete=models.CASCADE, related_name='related_to')
    to_anime = models.ForeignKey('Anime', on_delete=models.CASCADE, related_name='related_from')
    relation_type = models.CharField(choices=Type.choices, default=Type.OTHER, blank=True)