from rest_framework import serializers
from characters.serializers import TalentSerializer
from kiku.models import (
    Artist,
    Producer,
    Album,
    Song,
    AlbumSong
)

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = [
            'id',
            'slug',
            'name',
            'bio'
        ]

class SongSerializer(serializers.ModelSerializer):

    artist = ArtistSerializer()
    album = serializers.SerializerMethodField()

    class Meta:
        model = Song
        fields = [
            'id',
            'title',
            'artist',
            'plays',
            'album'
        ]
    
    def get_album(self, obj):
       related_albums = AlbumSong.objects.filter(song=obj).order_by('id')
       return related_albums[0].album.id

class AlbumSerializer(serializers.ModelSerializer):
    songs = SongSerializer(many=True, read_only=True)  # 'songs' is the related_name in Song
    artist = ArtistSerializer(read_only=True)
    type = serializers.SerializerMethodField()

    class Meta:
        model = Album
        fields = '__all__'

    def get_type(self, obj):
        return obj.get_type_display()
    