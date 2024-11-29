from django.db import models
from django.utils.dateformat import format
import datetime

class Studio(models.Model):
    name = models.CharField(max_length=100, blank=False)
    def __str__(self):
        return self.name
    
class Licensor(models.Model):
    name = models.CharField(max_length=100, blank=False)
    def __str__(self):
        return self.name
    
class Producer(models.Model):
    name = models.CharField(max_length=100, blank=False)
    def __str__(self):
        return self.name
    
class Genre(models.Model):
    name = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name

class Season(models.Model):
    season = models.CharField(
        max_length=20,
        choices=[
            ("Winter", "Winter"),
            ("Spring", "Spring"),
            ("Summer", "Summer"),
            ("Fall", "Fall"),
        ],
    )
    year = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.season} {self.year}"

class Character(models.Model):
    name = models.CharField(max_length=100, blank=False)
    visual = models.ImageField(upload_to="characters/" ,default="fallback.png", blank=True)
    description = models.TextField(blank=True, null=True)
    
    def __str__(self):
        return self.name
    
    def to_json(self):
        return {
            'id': self.id,
            'name' : self.name,
            'description': self.description,
            'visual' : f"http://localhost:8000{self.visual.url}",
        }

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

    class Source(models.TextChoices):
        MANGA = "manga", "Manga"
        LN = "light", "Light Novel"
        VN = "vn", "Visual Novel"
        MANHWA = "mnwha", "Manwha"
        GAME = "game", "Video Game"
        ORIGINAL = "original", "Original"
        OTHER = "other", "Other"

    class Rating(models.TextChoices):
        G = "g", "G (General Audience)"
        PG = "pg", "PG (Parental Guidence)"
        PG_13 = "pg-13", "PG-13 (Teens 13 and Up)"
        R = "r", "R (Restricted 17+)"
        R_PLUS = "r+", "R (Explicit 18+)"

    name = models.CharField(max_length=500)
    name_alternatives = models.JSONField(blank=True, null=True)
    visual = models.ImageField(upload_to="anime/" ,default="fallback.png", blank=True)
    summary = models.TextField(blank=True, null=True)
    season = models.ForeignKey(Season, on_delete=models.SET_NULL, related_name="animes", null=True)
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
    source = models.CharField(
        max_length=50, 
        choices=Source.choices, 
        default=Source.ORIGINAL
    )
    rating = models.CharField(
        max_length=40,
        choices=Rating.choices,
        default=Rating.G
    )
    score = models.DecimalField(blank=True, null=True, max_digits=4, decimal_places=2)
    users = models.PositiveIntegerField(blank=True, null=True)
    score_breakdown = models.JSONField(blank=True, null=True)
    airing_start_date = models.DateField(blank=True, null=True)
    airing_end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    genres = models.ManyToManyField(Genre, related_name="genre_animes")
    characters = models.ManyToManyField(Character, related_name="character_animes", blank=True)
    studios = models.ManyToManyField(Studio, related_name="studio_animes", blank=True)
    licenors = models.ManyToManyField(Licensor, related_name="licensor_animes", blank=True)
    producers = models.ManyToManyField(Producer, related_name="producer_animes", blank=True)
    previous_anime = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL, related_name='previous_in_series')
    next_anime = models.ForeignKey('self', blank=True, null=True, on_delete=models.SET_NULL, related_name='next_in_series')

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Anime"
        ordering = ["-created_at"]

    def get_snippet(self):
        return {
            'id': self.id,
            'name' : self.name,
            'visual' : f"http://localhost:8000{self.visual.url}"
        }
    
    def to_json(self):
        return {
            'id': self.id,
            'name' : self.name,
            'summary' : self.summary,
            'name_alternatives' : self.name_alternatives,
            'season' : self.season.__str__(),
            'type' : Anime.Type(self.media_type).label,
            'ranking_info' : {
                "score": self.score if not self.score == None else 0,
                "users" : self.users if not self.users == None else 0
            },
            'genres' : [genre.name for genre in self.genres.all()],
            'media': {
                "source": Anime.Source(self.source).label,
                "status": Anime.AiringStatus(self.status).label,
                "rating": Anime.Rating(self.rating).label,
                'start_date' : self.airing_start_date.strftime('%b %d, %Y') if self.airing_start_date else "TBD",
                'end_date' : self.airing_end_date.strftime('%b %d, %Y') if self.airing_end_date else "TBD",
                'studio' : [studio.name for studio in self.studios.all()],
                'licensors' : [licensor.name for licensor in self.licenors.all()],
                'producers' : [producer.name for producer in self.producers.all()]
            },
            'series' : {
                "next": self.next_anime.get_snippet() if self.next_anime else None,
                "previous": self.previous_anime.get_snippet() if self.previous_anime else None
            },
            'visual' : f"http://localhost:8000{self.visual.url}",
        }

class Episode(models.Model):
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE, related_name="episodes" )
    episode_number = models.PositiveIntegerField()
    title = models.CharField(max_length=255, blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    air_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"{self.anime.name} - Episode {self.episode_number}"