from django.contrib import admin
from .models import Anime, Genre, Season, Episode, Character, Producer, Licensor, Studio

admin.site.register(Anime)
admin.site.register(Genre)
admin.site.register(Season)
admin.site.register(Episode)
admin.site.register(Character)
admin.site.register(Producer)
admin.site.register(Licensor)
admin.site.register(Studio)
