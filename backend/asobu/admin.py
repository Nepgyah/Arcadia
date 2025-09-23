from django.contrib import admin
from .models import (
    Company,
    Game,
    DLC,
    GameCharacter,
    GameRelation
)

class GameCharacterInline(admin.TabularInline):
    model = GameCharacter
    extra = 1
    autocomplete_fields = ['character']

class GameRelationInline(admin.TabularInline):
    model = GameRelation
    fk_name = 'to_game'
    extra = 1
    autocomplete_fields = ['from_game']

@admin.register(Game)
class AnimeAdmin(admin.ModelAdmin):
    inlines = [GameCharacterInline, GameRelationInline]
    search_fields = ['title']

admin.site.register(Company)
admin.site.register(DLC)