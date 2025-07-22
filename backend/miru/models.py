from django.db import models
from shared.models import Character, Company

class Season(models.Model):

    class Type(models.IntegerChoices):
        WINTER = 0, 'Winter'
        SPRING = 1, 'Spring'
        SUMMMER = 2, 'Summer'
        FALL = 2, 'Fall'

    season=models.IntegerField(choices=Type.choices, null=True, blank=True)
    year=models.IntegerField(default=2000, blank=True)

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
        
    title=models.CharField(max_length=255, null=False, blank=False)
    title_ja=models.CharField(max_length=255, null=True, blank=True)
    title_romaji=models.CharField(max_length=255, null=True, blank=False)
    title_alternatives=models.JSONField(default=list)
    slug=models.SlugField(unique=True, blank=True)
    summary=models.TextField(max_length=1500, default='A synopsis will be written later', blank=True)
    season=models.ForeignKey(Season, on_delete=models.DO_NOTHING, null=True, blank=True)
    status=models.IntegerField(choices=Status.choices, default=Status.NOT_AIRED)

    type=models.IntegerField(choices=MediaType.choices, default=MediaType.TV)
    company=models.ForeignKey(Company, on_delete=models.CASCADE, null=True, blank=True)
    score=models.FloatField(null=True, blank=True)
    users=models.IntegerField(default=0, blank=True)
    airing_start_date=models.DateField(null=True, blank=True)
    airing_end_date=models.DateField(null=True, blank=True)
