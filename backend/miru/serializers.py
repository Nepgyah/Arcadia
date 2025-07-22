from rest_framework.serializers import Serializer
from .models import Anime

class AnimeSerializer(Serializer):

    class Meta:
        model=Anime
        fields = [
            'id', 'slug',
            'title', 'title_ja', 'title_romaji',' title_alternatives',
            'summary',
            'season', 'status', 'type',
            'company',
            'score','users',
            'airing_start_date', 'airing_end_date'
        ]