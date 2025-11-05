from django.contrib import admin
from .models import Season, Anime, AnimeCharacter, AnimeRelation, Studio, AnimeTheme

# Register your models here.
class AnimeCharacterInline(admin.TabularInline):
    model = AnimeCharacter
    extra = 1
    autocomplete_fields = ['character']

class AnimeRelationInline(admin.TabularInline):
    model = AnimeRelation
    fk_name = 'to_anime'
    extra = 1
    autocomplete_fields = ['from_anime']

@admin.register(Anime)
class AnimeAdmin(admin.ModelAdmin):
    inlines = [AnimeCharacterInline, AnimeRelationInline]
    search_fields = ['title']

admin.site.register(Season)
admin.site.register(Studio)
admin.site.register(AnimeTheme)