from django.contrib import admin
from .models import Company, Franchise, Genre

# Register your models here.
admin.site.register(Company)
admin.site.register(Franchise)
admin.site.register(Genre)

    