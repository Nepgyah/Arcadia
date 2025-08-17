from django.db import models
from django.utils.text import slugify
from .utils import unique_slugify

class Media(models.Model):
    title = models.CharField(max_length=255)
    score = models.FloatField(default=0.0)
    users = models.IntegerField(default=0)
    slug = models.SlugField(blank=True)
    summary=models.TextField(default='A synopsis will be written later')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

class Talent(models.Model):
    first_name=models.CharField(max_length=150)
    last_name=models.CharField(max_length=150, null=True, blank=True)
    slug=models.SlugField(unique=True, blank=True)
    bio=models.TextField(default='A bio will be written at a later date.', blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name or ''}"

    def save(self, *args, **kwargs):
        if not self.slug:
            full_name = f"{self.first_name} {self.last_name}".strip()
            self.slug = unique_slugify(self, full_name)
        super().save(*args, **kwargs)

class Character(models.Model):
    first_name=models.CharField(max_length=150, blank=False)
    last_name=models.CharField(max_length=150, null=True, blank=True)
    nickname=models.JSONField(default=list, blank=True)
    slug=models.SlugField(unique=True, blank=True)
    played_by=models.ForeignKey(Talent, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name or ''}"
    
    def save(self, *args, **kwargs):
        if not self.slug:
            full_name = f"{self.first_name} {self.last_name}".strip()
            self.slug = unique_slugify(self, full_name)
        super().save(*args, **kwargs)
        
class Company(models.Model):
    name=models.CharField(max_length=150, null=False, blank=False)
    slug=models.SlugField(unique=True, blank=True)

    def __str__(self):
        return f"{self.name}"
    
class Genre(models.Model):
    name=models.CharField(max_length=150)

    def __str__(self):
        return self.name