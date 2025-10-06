from django.contrib import admin
from .models import Genre, Producer, Album, Song

# Register your models here.
class SongInline(admin.TabularInline):
    model = Song
    extra = 1
    fields = ('title', 'featured_artists', 'genre')
    filter_horizontal = ('featured_artists', 'genre') 
    
@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    list_display = ('title', 'producer', 'type', 'release_date')
    search_fields = ('title',)
    list_filter = ('type', 'release_date')
    inlines = [SongInline]  # attach the inline here

admin.site.register(Song)
admin.site.register(Genre)
admin.site.register(Producer)