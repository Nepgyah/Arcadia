from django.db import models

class Genre(models.Model):
    name = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name

class Anime(models.Model):
    class AiringStatus(models.TextChoices):
        NOT_YET_AIRING = "not_yet_airing", "Not Yet Airing"
        AIRING = "airing", "Airing"
        COMPLETED_AIRING = "completed_airing", "Airing Completed"

    class Type(models.TextChoices):
        TV = "tv", "TV Anime"
        OVA = "ova", "OVA"
        ONA = "ona", "ONA"
        MOVIE = "movie", "Movie"

    name = models.CharField(max_length=500)
    name_alternatives = models.JSONField(blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    status = models.CharField(
        max_length=30, 
        choices=AiringStatus.choices, 
        default=AiringStatus.NOT_YET_AIRING
    )
    media_type = models.CharField(
        max_length=10, 
        choices=Type.choices, 
        default=Type.TV
    )
    airing_start_date = models.DateField(blank=True, null=True)
    airing_end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    genres = models.ManyToManyField(Genre, related_name="animes")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Anime"
        ordering = ["-created_at"]
