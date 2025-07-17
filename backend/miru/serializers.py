from rest_framework import serializers
from .models import Anime

class AnimeSerializer(serializers.ModelSerializer):

    class Meta:
        model=Anime
        fields = [
            'title', 'title_ja', 'title_romaji', 'title_alternatives',
            'slug',
            'summary',
            'season',
            'status',
            'prequels',
            'type',
            'airing_from',
            'airing_to'
        ]