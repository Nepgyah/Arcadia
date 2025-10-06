from rest_framework import serializers
from characters.serializers import TalentSerializer
from kiku.models import (
    Genre,
    Producer,
    Album,
    Song
)

class AlbumSerializer(serializers.ModelSerializer):

    artists = TalentSerializer(many=True)
    type = serializers.SerializerMethodField()

    class Meta:
        model = Album
        fields = [ 'id', 'title', 'artists', 'producer', 'type', 'release_date']

    def get_type(self, obj):
        return obj.get_type_display()
    
class SongSerializer(serializers.ModelSerializer):

    featured_artists = TalentSerializer(many=True)
    
    class Meta:
        model = Song
        fields = [ 'id', 'title', 'featured_artists', 'plays']
