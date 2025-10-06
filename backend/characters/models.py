from django.db import models
from utils.unique_slugify import unique_slugify

class Talent(models.Model):
    slug=models.SlugField(unique=True, blank=True)
    bio=models.TextField(default='A bio will be written at a later date.', blank=True)
    website = models.URLField(null=True, blank=True)

    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = unique_slugify(self, self.display_name)
        super().save(*args, **kwargs)

    @property
    def display_name(self):
        """To be implemented by subclasses"""
        raise NotImplementedError
    
    def __str__(self):
        return self.display_name
    
class VoiceActor(Talent):
    first_name=models.CharField(max_length=150)
    last_name=models.CharField(max_length=150, null=True, blank=True)

    class Meta:
        verbose_name_plural = "Voice Actors"
        
    @property
    def display_name(self):
        return f"{self.first_name} {self.last_name or ''}".strip()
    
class Character(models.Model):
    first_name=models.CharField(max_length=150, blank=False)
    last_name=models.CharField(max_length=150, null=True, blank=True)
    nickname=models.JSONField(default=list, blank=True)
    slug=models.SlugField(unique=True, blank=True)
    played_by=models.ForeignKey(VoiceActor, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name or ''}"
    
    def save(self, *args, **kwargs):
        if not self.slug:
            full_name = f"{self.first_name} {self.last_name}".strip()
            self.slug = unique_slugify(self, full_name)
        super().save(*args, **kwargs)
