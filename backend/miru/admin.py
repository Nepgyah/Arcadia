from django.contrib import admin
from .models import Season, Anime, AnimeCharacter

# Register your models here.
class AnimeCharacterInline(admin.TabularInline):
    model = AnimeCharacter
    extra = 1
    autocomplete_fields = ['character']

@admin.register(Anime)
class AnimeAdmin(admin.ModelAdmin):
    list_display = ('title', 'type', 'status', 'company')
    search_fields = ('title', 'title_romaji')
    list_filter = ('status', 'type')
    inlines = [AnimeCharacterInline]  # ← this is the key
    filter_horizontal = ['genres']
    autocomplete_fields = ['company', 'season']