import uuid

from django.db import models
from shared.models import Company
from characters.models import Talent, Character, VoiceActor

class Artist(Talent):
    name = models.CharField(max_length=150)
    character = models.OneToOneField(
        Character, on_delete=models.SET_NULL, null=True, blank=True, related_name='artist_profile'
    )
    voice_actor_profile = models.OneToOneField(
        VoiceActor, on_delete=models.SET_NULL, null=True, blank=True, related_name='artist_profile'
    )

    class Meta:
        verbose_name_plural = "Artists"

    @property
    def display_name(self):
        return self.name
    
class Genre(models.Model):

    name = models.CharField(max_length=50, null=False, blank=False)
    
    def __str__(self):
        return self.name
        
class Producer(Company):

    def __str__(self):
        return f"{self.name}"
    
# DEV NOTE:
# - This model is the one that gets added to playlists.
# - Viewing the song prioritizes showing the album to its single and then albums its in ordered by release date
class Song(models.Model):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=150, null=False, blank=False)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    featured_artists = models.ManyToManyField(Artist, related_name='featured_songs', blank=True)
    genre = models.ForeignKey(Genre, related_name='songs', on_delete=models.SET_NULL, null=True, blank=True)
    plays = models.IntegerField(default=0, blank=0)
    
    def __str__(self):
        return f"{self.title}"

class Album(models.Model):

    class Type(models.IntegerChoices):
        SINGLE = 0, 'Single'
        STANDARD = 1, 'Standard'
        LIVE = 2, 'Live Album'
        EP = 3, 'Extended Play'
        SOUNDTRACK = 4, 'Soundtrack'
        COMP = 5, 'Compilation'

    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=150, null=False, blank=False)
    artist = models.ForeignKey(Artist, related_name='albums', on_delete=models.CASCADE)
    producer = models.ForeignKey(Producer, on_delete=models.SET_NULL, null=True, blank=True)
    type = models.IntegerField(choices=Type, default=Type.SINGLE, blank=True)
    release_date=models.DateField(null=True, blank=True)
    plays = models.IntegerField(default=0, blank=0)
    songs = models.ManyToManyField(
        'Song', 
        through='AlbumSong', 
        related_name='albums',
        blank=True
    )

    def __str__(self):
        return f"{self.title}"
    
class AlbumSong(models.Model):
    album = models.ForeignKey(Album, on_delete=models.CASCADE)
    song = models.ForeignKey('Song', on_delete=models.CASCADE)
    track_number = models.PositiveIntegerField(default=1)

    class Meta:
        unique_together = ('album', 'track_number')
        ordering = ['track_number']

    def __str__(self):
        return f"{self.track_number}. {self.song.title} ({self.album.title})"
