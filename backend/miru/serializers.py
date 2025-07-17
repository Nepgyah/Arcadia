import rest_framework
import models

class AnimeSerializer(rest_framework.serializers.ModelSerializer):

    class meta:
        model=models.Anime
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