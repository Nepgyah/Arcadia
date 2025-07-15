# Collection of models/choices that will be used multiple times
from django.db import models

class RatingChoices(models.IntegerChoices):
    G = 0, 'G'
    E = 1, 'G'
    PG = 2, 'PG'
    PG13 = 4, 'PG-13'

class Genre(models.Model):
    name = models.CharField(max_length=255)

