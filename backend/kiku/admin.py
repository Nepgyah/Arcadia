from django.contrib import admin
from .models import Genre, Producer, Album, Song, Artist, AlbumSong

@admin.register(Song)
class SongAdmin(admin.ModelAdmin):
    search_fields = ['title', 'artist__name']
    list_filter = ['artist', 'genre']

class AlbumSongInline(admin.TabularInline):
    model = AlbumSong
    extra = 1
    autocomplete_fields = ['song']

@admin.register(Album)
class AlbumAdmin(admin.ModelAdmin):
    inlines = [AlbumSongInline]
    list_display = ('title', 'producer', 'type', 'release_date')
    search_fields = ('title',)
    list_filter = ('type', 'release_date')

admin.site.register(Artist)
admin.site.register(Genre)
admin.site.register(Producer)