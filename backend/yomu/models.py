from django.db import models
from django.utils.text import slugify
from shared.models import Character, Company, Genre

class Author(models.Model):
    name=models.CharField(max_length=255, null=False, blank=False)

class Work(models.Model):

    class Status(models.IntegerChoices):
        PUBLISHING = 1, 'Publishing'
        COMPLETED = 2, 'Completed'
    title=models.CharField(max_length=255, null=False, blank=False)
    title_alternatives=models.JSONField(default=list, blank=True)
    slug=models.SlugField(unique=True, null=False, blank=True)
    summary=models.TextField(default='A synopsis will be written later', blank=True)
    genres=models.ManyToManyField(Genre, related_name='animes', blank=True)
    
    score=models.FloatField(default=0.0, blank=True)
    users=models.IntegerField(default=0, blank=True)
    publishing_start_date=models.DateField(null=True, blank=True)
    publishing_end_date=models.DateField(null=True, blank=True)

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)


    