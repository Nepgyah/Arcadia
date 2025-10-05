from django.contrib import admin
from .models import Genre, Producer, Album, Song

# Register your models here.
admin.site.register(Genre)
admin.site.register(Producer)
admin.site.register(Album)
admin.site.register(Song)