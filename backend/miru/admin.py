from django.contrib import admin

# Register your models here.
from .models import Anime, Season

admin.site.register(Anime)
admin.site.register(Season)