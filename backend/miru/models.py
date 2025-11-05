from django.db import models
import kiku.models
from shared.models import Company, Franchise, Genre, Media
from characters.models import Character
from django.utils.text import slugify

class Studio(Company):

    def __str__(self):
        return f"{self.name}"
    
class Season(models.Model):

    class Type(models.IntegerChoices):
        WINTER = 0, 'Winter'
        SPRING = 1, 'Spring'
        SUMMER = 2, 'Summer'
        FALL = 3, 'Fall'

    season=models.IntegerField(choices=Type.choices, null=True, blank=True)
    year=models.IntegerField(default=2000, blank=True)

    class Meta:
        ordering = ['-year']
    
    def __str__(self):
        return f"{self.get_season_display()} {self.year}"
    
class Anime(Media):

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

    title_ja=models.CharField(max_length=255, null=True, blank=True)
    title_romaji=models.CharField(max_length=255, null=True, blank=True)
    title_alternatives=models.JSONField(default=list, blank=True)
    season=models.ForeignKey(Season, on_delete=models.SET_NULL, null=True, blank=True)
    status=models.IntegerField(choices=Status.choices, default=Status.NOT_AIRED)
    
    characters=models.ManyToManyField(Character, through='AnimeCharacter', related_name='animes', blank=True)
    genres=models.ManyToManyField(Genre, related_name='animes', blank=True)
    related=models.ManyToManyField('self', through='AnimeRelation', symmetrical=False, related_name='related_anime', blank=True)
    
    type=models.IntegerField(choices=MediaType.choices, default=MediaType.TV)
    studio=models.ForeignKey(Studio, on_delete=models.SET_NULL, null=True, blank=True)
    rating=models.IntegerField(choices=Rating.choices, default=Rating.G, blank=True)
    airing_start_date=models.DateField(null=True, blank=True)
    airing_end_date=models.DateField(null=True, blank=True)

    franchise=models.ForeignKey(Franchise, on_delete=models.SET_NULL, null=True, blank=True)

    class Meta:
        ordering = ['-score']

    def __str__(self):
        return self.title

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
        SERIES_ENTRY = 'series_entry', 'Series Entry'
        SPINOFF = 'spinoff', 'Spin-off'
        SIDE_STORY = 'side_story', 'Side Story'
        ALTERNATIVE_VERSION = 'alternataive_version', 'Alternate'
        OTHER = 'other',  'Other'

    from_anime = models.ForeignKey('Anime', on_delete=models.CASCADE, related_name='related_to')
    to_anime = models.ForeignKey('Anime', on_delete=models.CASCADE, related_name='related_from')
    relation_type = models.CharField(choices=Type.choices, default=Type.OTHER, blank=True)

class AnimeTheme(models.Model):

    class Type(models.IntegerChoices):
        OP = 0, 'Opening'
        ED = 1, 'Ending'
    
    anime=models.ForeignKey(Anime, on_delete=models.CASCADE, related_name="themes")
    starting_episode=models.SmallIntegerField(null=True, blank=True)
    ending_episode=models.SmallIntegerField(null=True, blank=True)
    theme_type=models.IntegerField(choices=Type.choices, default=Type.OP, blank=True)
    kiku_album=models.ForeignKey(kiku.models.Album, on_delete=models.SET_NULL, null=True, blank=True)
    title=models.CharField(max_length=255, null=True, blank=True)
    artist=models.CharField(max_length=255, null=True, blank=True)

    class Meta:
        ordering = ["theme_type", "starting_episode"]

    def __str__(self):
        if self.kiku_album:
            return f"{self.kiku_album.title} - ({self.starting_episode} - {self.ending_episode})"
        else:
            f"{self.title} - ({self.starting_episode} - {self.ending_episode})"

    def serialize(self):
        if not self.kiku_album:
            return {
                'id': self.id,
                'title': self.title,
                'artist': self.artist,
                'startingEpisode': self.starting_episode,
                'endingEpisode': self.ending_episode
            }
        else:
            return {
                'id': str(self.kiku_album.id),
                'title': self.kiku_album.title,
                'artist': self.kiku_album.artist.name,
                'startingEpisode': self.starting_episode,
                'endingEpisode': self.ending_episode
            }