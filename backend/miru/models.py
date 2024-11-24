from django.db import models

class Genre(models.Model):
    """
    Represents a single genre in anime or manga.
    Only information here is the name of the genre.
    Both Anime and Manga have a ManyToMany relationship with this model.
    """
    
    name = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name

class Season(models.Model):
    """
    Represents a single airing season in anime.
    Includes information such as the year and one of the 4 seasons it aired in during the year.
    """

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
    """
    Represents a single single character in anime.
    Includes information their name, a quick introduction and visual art.
    Both Anime and Manga have a ManyToMany relationship with this model.
    """

    name = models.CharField(max_length=100, blank=False)
    visual = models.ImageField(upload_to="characters/" ,default="fallback.png", blank=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.name

class Anime(models.Model):
    """
    Represents an anime entry in the database.
    Fields:
    - name: The primary title of the anime.
    - name_alternatives: Alternative titles such as in japanese or various nicknames for the anime
    - visual: Splash art for the anime
    - summary: Spoiler free description of the anime
    - season: The airing season the anime belongs to
    - status: Current airing status of the anime
    - media_type: Where or what type of media this anime is
    - score: The aggregate user rating, from 0.00 to 10.00
    - users: Amout of users contributing to the scoring calculation
    - scoring_breakdown: Holds the distriubtion of score and the users in each score group
    - genre: The genre categories this anime falls under
    - characers: Characters associated with this anime (protag and antag included)
    """

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
    score = models.DecimalField(blank=True, null=True, max_digits=4, decimal_places=2)
    users = models.PositiveIntegerField(blank=True, null=True)
    score_breakdown = models.JSONField(blank=True, null=True)
    airing_start_date = models.DateField(blank=True, null=True)
    airing_end_date = models.DateField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    genres = models.ManyToManyField(Genre, related_name="genre_animes")
    characters = models.ManyToManyField(Character, related_name="character_animes", blank=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Anime"
        ordering = ["-created_at"]

    def get_snippet(self):
        """
        Returns the 2 essentials of anime information: A visual and its name
        """

        return {
            'id': self.id,
            'name' : self.name,
            'visual' : f"http://localhost:8000{self.visual.url}"
        }
    
    def to_json(self):
        """
        Returns all details for a single anime
        """

        return {
            'id': self.id,
            'name' : self.name,
            'name_alternatives' : self.name_alternatives,
            'visual' : f"http://localhost:8000{self.visual.url}",
            'summary' : self.summary,
            'season' : self.season.__str__()
        }

class Episode(models.Model):
    """
    Represents a single episode for an aime.
    Includes information the title, spoiler free synopsis and when it was released.
    This model shares a OneToMany relationship with the Anime model.
    """

    anime = models.ForeignKey(Anime, on_delete=models.CASCADE, related_name="episodes" )
    episode_number = models.PositiveIntegerField()
    title = models.CharField(max_length=255, blank=True, null=True)
    summary = models.TextField(blank=True, null=True)
    air_date = models.DateField(blank=True, null=True)

    def __str__(self):
        return f"{self.anime.name} - Episode {self.episode_number}"