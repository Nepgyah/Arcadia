from django.contrib import admin
from .models import Character, Talent

# Register your models here.
admin.site.register(Talent)

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    search_fields = ['first_name', 'last_name']