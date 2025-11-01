from django.contrib import admin
from .models import Character, VoiceActor

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    search_fields = ['first_name', 'last_name']

admin.site.register(VoiceActor)