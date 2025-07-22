from django.contrib import admin
from .models import Talent, Character, Company

# Register your models here.
admin.site.register(Talent)
admin.site.register(Character)
admin.site.register(Company)