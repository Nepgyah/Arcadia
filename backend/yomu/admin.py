from django.contrib import admin
from .models import Author, Work, WorkRelation, WorkCharacter, WorkAuthor, Publisher

# Register your models here.
class WorkAuthorInline(admin.TabularInline):
    model = WorkAuthor
    extra = 1
    autocomplete_fields = ['author']

class WorkCharacterInline(admin.TabularInline):
    model = WorkCharacter
    extra = 1
    autocomplete_fields = ['character']

class WorkRelationInline(admin.TabularInline):
    model = WorkRelation
    fk_name = 'to_work'
    extra = 1
    autocomplete_fields = ['from_work']

@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    inlines = [WorkCharacterInline, WorkRelationInline, WorkAuthorInline]
    search_fields = ['title']

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    search_fields = ['name']
    
admin.site.register(Publisher)