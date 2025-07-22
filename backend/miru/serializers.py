from rest_framework import serializers
from .models import Anime

class AnimeSerializer(serializers.ModelSerializer):

    class Meta:
        model=Anime
        fields = [
            'id', 'slug',
            'title', 'title_ja', 'title_romaji','title_alternatives',
            'summary',
            'season', 'status', 'type',
            'company',
            'score','users',
            'airing_start_date', 'airing_end_date'
        ]