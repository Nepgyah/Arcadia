from django.contrib import admin
from .models import Season, Anime, AnimeCharacter

# Register your models here.
class AnimeCharacterInline(admin.TabularInline):
    model = AnimeCharacter
    extra = 1
    autocomplete_fields = ['character']

@admin.register(Anime)
class AnimeAdmin(admin.ModelAdmin):
    inlines = [AnimeCharacterInline]  # ← this is the key

admin.site.register(Season)