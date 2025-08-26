from django.db import models
from django.utils.text import slugify

class Media(models.Model):
    title = models.CharField(max_length=255)
    score = models.FloatField(default=0.0)
    users = models.IntegerField(default=0)
    slug = models.SlugField(unique=True, blank=True)
    summary=models.TextField(default='A synopsis will be written later')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True
        ordering = ['-score']
        
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
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