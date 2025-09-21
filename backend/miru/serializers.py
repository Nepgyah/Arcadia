from rest_framework import serializers
from .models import Anime, Season, Company, AnimeRelation
from shared.serializers import FranchiseSerializer, GenreSerializer
from characters.serializers import CharacterSerializer

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
    season = serializers.SerializerMethodField()
    type = serializers.SerializerMethodField()
    status = serializers.SerializerMethodField()
    characters = CharacterSerializer(many=True, read_only=True)
    genres = GenreSerializer(many=True, read_only=True)
    rating = serializers.SerializerMethodField()
    studio = serializers.SerializerMethodField()
    previous_anime = serializers.SerializerMethodField()
    next_anime = serializers.SerializerMethodField()
    franchise = FranchiseSerializer(read_only=True)
    
    class Meta:
        model=Anime
        fields = "__all__"

    def get_season(self, obj):
        if obj.season:
            return str(obj.season)
        else:
            return 'N/A'
        
    def get_previous_anime(self, obj):
        previous_anime_result = AnimeRelation.objects.filter(to_anime=obj)
        previous_anime_data = []
        for anime in previous_anime_result:
            previous_anime_data.append(
                {
                    'id': anime.from_anime.id,
                    'name': anime.from_anime.title,
                    'slug': anime.from_anime.slug,
                    'relation': anime.get_relation_type_display()
                }
            )
        return previous_anime_data
    
    def get_next_anime(self, obj):
        next_anime_result = AnimeRelation.objects.filter(from_anime=obj)
        next_anime_data = []
        for anime in next_anime_result:
            next_anime_data.append(
                {
                    'id': anime.to_anime.id,
                    'name': anime.to_anime.title,
                    'slug': anime.to_anime.slug,
                    'relation': anime.get_relation_type_display()
                }
            )
        return next_anime_data
    
    def get_studio(self, obj):
        return str(obj.studio)
    
    def get_rating(self, obj):
        return obj.get_rating_display()
    
    def get_type(self, obj):
        return obj.get_type_display()
    
    def get_status(self, obj):
        return obj.get_status_display()
        

class AnimeLiteSerializer(serializers.ModelSerializer):
    franchise = FranchiseSerializer(read_only=True)
    status = serializers.SerializerMethodField()

    class Meta:
        model = Anime
        fields = [ 'id', 'title', 'slug', 'score', 'status', 'summary', 'rating', 'users', 'franchise']

    def get_status(self, obj):
        return obj.get_status_display()