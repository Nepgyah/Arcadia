import uuid

from django.db import models
from shared.models import Company
from characters.models import Talent

class Genre(models.Model):

    name = models.CharField(max_length=50, null=False, blank=False)
    
    def __str__(self):
        return self.name
        
class Producer(Company):

    def __str__(self):
        return f"{self.name}"

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
    artists = models.ManyToManyField(Talent, related_name='albums')
    producer = models.ForeignKey(Producer, on_delete=models.SET_NULL, null=True, blank=True)
    type = models.IntegerField(choices=Type, default=Type.SINGLE, blank=True)
    release_date=models.DateField(null=True, blank=True)

    def __str__(self):
        return f"{self.title}"
    
class Song(models.Model):

    album = models.ForeignKey(Album, on_delete=models.CASCADE, related_name='songs', null=True)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=150, null=False, blank=False)
    featured_artists = models.ManyToManyField(Talent, related_name='featured_songs', blank=True)
    genre = models.ManyToManyField(Genre, related_name='songs', blank=True)
    plays = models.IntegerField(default=0, blank=0)
    
    def __str__(self):
        return f"{self.title}"
