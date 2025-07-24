from django.contrib import admin
from .models import Talent, Character, Company, Genre

# Register your models here.
admin.site.register(Talent)
admin.site.register(Company)
admin.site.register(Genre)

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    search_fields = ['first_name', 'last_name']
    