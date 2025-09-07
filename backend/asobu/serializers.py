from rest_framework import serializers
from asobu.models import (
    Company,
    Game,
    GameCharacter,
    GameRelation,
    DLC
)
from characters.serializers import CharacterSerializer
from shared.serializers import FranchiseSerializer, GenreSerializer
class CompanySerializer(serializers.ModelSerializer):

    class Meta:
        model = Company
        fields = [
            'id', 'name'
        ]

class GameSerializer(serializers.ModelSerializer):
    status = serializers.SerializerMethodField()
    characters = CharacterSerializer(many=True, read_only=True)
    developers = CompanySerializer(many=True, read_only=True)
    publishers = CompanySerializer(many=True, read_only=True)
    genres = GenreSerializer(many=True, read_only=True)
    esrb_rating = serializers.SerializerMethodField()
    pegi_rating = serializers.SerializerMethodField()
    franchise = serializers.SerializerMethodField()
    previous_games = serializers.SerializerMethodField()
    next_games = serializers.SerializerMethodField()

    class Meta:
        model = Game
        fields = [
            'id', 'slug', 'title', 'score', 'users', 'summary',
            'status', 'esrb_rating', 'pegi_rating',
            'related', 'characters', 'previous_games', 'next_games',
            'genres', 'developers', 'publishers',
            'has_campaign_mode', 'has_pvp_mode', 'has_pve_mode', 'is_on_console', 'is_on_pc',
            'release_date', 'franchise'
        ]

    def get_previous_games(self, obj):
        previous_game_result = GameRelation.objects.filter(to_game=obj)
        previous_game_data = []
        for game in previous_game_result:
            if game.relation_type == GameRelation.Type.SERIES_ENTRY:
                relation = 'Prequel'
            else:
                relation = game.get_relation_type_display()

            previous_game_data.append(
                {
                    'id': game.from_game.id,
                    'name': game.from_game.title,
                    'slug': game.from_game.slug,
                    'relation': relation
                }
            )
        return previous_game_data
    
    def get_next_games(self, obj):
        next_game_result = GameRelation.objects.filter(from_game=obj)
        next_game_data = []
        for game in next_game_result:
            if game.relation_type == GameRelation.Type.SERIES_ENTRY:
                relation = 'Sequel'
            else:
                relation = game.get_relation_type_display()
            next_game_data.append(
                {
                    'id': game.to_game.id,
                    'name': game.to_game.title,
                    'slug': game.to_game.slug,
                    'relation': relation
                }
            )
        return next_game_data
    
    def get_status(self, obj):
        return obj.get_status_display()

    def get_esrb_rating(self, obj):
        return obj.get_esrb_rating_display()
    
    def get_pegi_rating(self, obj):
        return obj.get_pegi_rating_display()
    
    def get_franchise(self, obj):
        return obj.franchise.name