from rest_framework import serializers
from .models import Anime, Season, Company
from shared.serializers import CompanySerializer

class SeasonSerializer(serializers.ModelSerializer):
    season = serializers.SerializerMethodField()

    class Meta:
        model=Season
        fields = [
            'id', 'season', 'year'
        ]

    def get_season(self, obj):
        return obj.get_season_display()
    
class AnimeSerializer(serializers.ModelSerializer):
    season = SeasonSerializer()
    type = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    rating = serializers.SerializerMethodField()
    studio = serializers.SerializerMethodField()

    class Meta:
        model=Anime
        fields = [
            'id', 'slug',
            'title', 'title_ja', 'title_romaji','title_alternatives',
            'summary',
            'season', 'status', 'type',
            'studio',
            'score','users', 'rating',
            'airing_start_date', 'airing_end_date'
        ]

    def get_studio(self, obj):
        return str(obj.studio)
    
    def get_rating(self, obj):
        return obj.get_rating_display()
    
    def get_type(self, obj):
        return obj.get_type_display()
    
    def get_status(self, obj):
        return obj.get_status_display()