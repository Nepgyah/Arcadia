from django.db import models
from characters.models import Character
from shared.models import Franchise, Genre, Media
from django.utils.text import slugify

class Company(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name
    
class Game(Media):

    class ESRB(models.TextChoices):
        CHILDHOOD = 'early_childhood', 'Early Childhood'
        EVERYONE = 'everyone', 'Everyone'
        EVERYONE_10 = 'everyone_10', 'Everyone 10+'
        TEEN = 'teen', 'Teen'
        MATURE = 'mature', 'Mature'
        PENDING = 'pending', 'Rating Pending'

    class PEGI(models.IntegerChoices):
        PEGI_3 = 3, 'PEGI 3'
        PEGI_7 = 7, 'PEGI 7'
        PEGI_12 = 12, 'PEGI 12'
        PEGI_16 = 16, 'PEGI 16'
        PEGI_18 = 18, 'PEGI 18'

    class Status(models.TextChoices):
        ANNOUNCED = 'announced', 'Announced'
        EARLY_ACCESS = 'early_access', 'Early Access'
        RELEASED = 'released', 'Released'
        EOS = 'end_of_service', 'End of Service'

    status = models.CharField(choices=Status.choices, default=Status.ANNOUNCED, blank=True)
    esrb_rating = models.CharField(choices=ESRB.choices, default=ESRB.EVERYONE, null=True, blank=True)
    pegi_rating = models.IntegerField(choices=PEGI.choices, default=PEGI.PEGI_3, null=True, blank=True)
    related = models.ManyToManyField('self', through='GameRelation', symmetrical=False, related_name='related_games', blank=True)
    characters=models.ManyToManyField(Character, through='GameCharacter', related_name='appears_in_games', blank=True)

    genres = models.ManyToManyField(Genre, related_name='tagged_games', blank=True)
    developers = models.ManyToManyField(Company, related_name='developed_games', blank=True)
    publishers = models.ManyToManyField(Company, related_name='published_games', blank=True)

    has_campaign_mode = models.BooleanField(default=False)
    has_pvp_mode = models.BooleanField(default=False)
    has_pve_mode = models.BooleanField(default=False)
    is_on_console = models.BooleanField(default=False)
    is_on_pc = models.BooleanField(default=False)

    release_date = models.DateField(null=True, blank=True)
    franchise = models.ForeignKey(Franchise, on_delete=models.SET_NULL, null=True, blank=True)

class GameCharacter(models.Model):

    class Role(models.IntegerChoices):
        MAIN = 0, 'Main'
        SUPPORT = 1, 'Supporting'

    game = models.ForeignKey(Game, on_delete=models.CASCADE)
    character = models.ForeignKey(Character, on_delete=models.CASCADE)
    role = models.IntegerField(choices=Role.choices, default=Role.SUPPORT, blank=True)
    is_playable = models.BooleanField(default=False, blank=True)

    def __str__(self):
        return f"{self.character} in {self.game} as {self.get_role_display()} character"
    
class GameRelation(models.Model):

    class Type(models.TextChoices):
        SERIES_ENTRY = 'series_entry', 'Series Entry'
        SPINOFF = 'spinoff', 'Spin-off'
        SIDE_STORY = 'side_story', 'Side Story'
        ALTERNATIVE_VERSION = 'alternative_version', 'Alternate'
        OTHER = 'other',  'Other'

    from_game = models.ForeignKey('Game', on_delete=models.CASCADE, related_name='outgoing_games')
    to_game = models.ForeignKey('Game', on_delete=models.CASCADE, related_name='incoming_games')
    relation_type = models.CharField(choices=Type.choices, default=Type.OTHER, blank=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['from_game', 'to_game', 'relation_type'], name='unique_game_relation')
        ]
    
class DLC(models.Model):
    name = models.CharField(max_length=255)
    slug = models.SlugField(unique=True, blank=True)
    game = models.ForeignKey(Game, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super().save(*args, **kwargs)