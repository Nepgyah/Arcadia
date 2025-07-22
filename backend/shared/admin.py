from django.contrib import admin
from .models import Talent, Character, Company

# Register your models here.
admin.site.register(Talent)
admin.site.register(Company)

@admin.register(Character)
class CharacterAdmin(admin.ModelAdmin):
    search_fields = ['first_name', 'last_name']
    