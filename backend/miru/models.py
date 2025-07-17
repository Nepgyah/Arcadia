from django.db import models

class Season(models.Model):
    """
    Represents a single season of anime
    """
    class SeasonChoices(models.IntegerChoices):
        WINTER = 0, 'Winter'
        SUMMER = 1, 'Summer'
        SPRING = 2, 'Spring'
        FALL = 3, 'Fall'

    season = models.IntegerField(choices=SeasonChoices.choices, default=SeasonChoices.WINTER)
    year = models.IntegerField()

    def __str__(self):
        return f'{self.get_season_display()} {self.year}'
    
class Anime(models.Model):
    """
    Represents a single anime entry.
    """

    class AnimeTypes(models.IntegerChoices):
        TV = 0, 'TV'
        MOVIE = 1, 'Movie'
        OVA = 2, 'OVA'
        ONA = 3, 'ONA'
        SPECIAL = 4, 'Special'

    class AnimeStatus(models.IntegerChoices):
        AIRING = 0, 'Airing'
        COMPLETED = 1, 'Completed'
        UPCOMING = 2, 'Upcoming'

    title = models.CharField(default='', null=False, max_length=500)
    title_ja = models.CharField(default='', max_length=500, blank=True)
    title_romaji = models.CharField(default='', max_length=500, blank=True)
    title_alternatives = models.JSONField(default=list, blank=True)
    slug = models.SlugField(unique=True, blank=True)
    summary = models.TextField(blank=True, default='A description will be written later', max_length=1500)
    season = models.ForeignKey(Season, on_delete=models.SET_NULL, null=True, blank=True)
    status = models.IntegerField(choices=AnimeStatus.choices, default=AnimeStatus.UPCOMING)

    # Add later: Characters,
    prequels = models.ManyToManyField('self', blank=True, symmetrical=False, related_name='sequels')

    # Add later: source, source type, studio, status
    type = models.IntegerField(choices=AnimeTypes.choices, default=AnimeTypes.TV)
    airing_from = models.DateField(null=True, blank=True)
    airing_to = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'anime'
        ordering = ['-airing_from']

    def __str__(self):
        return self.title or self.slug
    
    @property
    def is_airing(self):
        return self.status == self.AnimeStatus.AIRING
