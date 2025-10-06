from rest_framework import serializers
from characters.serializers import TalentSerializer
from kiku.models import (
    Artist,
    Producer,
    Album,
    Song
)

class ArtistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Artist
        fields = [
            'id',
            'slug',
            'name'
        ]

class SongSerializer(serializers.ModelSerializer):
    class Meta:
        model = Song
        fields = '__all__'
    
class AlbumSerializer(serializers.ModelSerializer):
    songs = SongSerializer(many=True, read_only=True)  # 'songs' is the related_name in Song

    class Meta:
        model = Album
        fields = '__all__'
    