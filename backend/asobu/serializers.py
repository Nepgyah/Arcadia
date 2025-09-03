from rest_framework import serializers
from asobu.models import (
    Company,
    Game,
    GameCharacter,
    GameRelation,
    DLC
)
from characters.serializers import CharacterSerializer
from shared.serializers import FranchiseSerializer
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
    esrb_rating = serializers.SerializerMethodField()
    pegi_rating = serializers.SerializerMethodField()
    franchise = serializers.SerializerMethodField()

    class Meta:
        model = Game
        fields = [
            'id', 'slug', 'title',
            'status', 'esrb_rating', 'pegi_rating',
            'related', 'characters',
            'genres', 'developers', 'publishers',
            'has_campaign_mode', 'has_pvp_mode', 'has_pve_mode', 'is_on_console', 'is_on_pc',
            'release_date', 'franchise'
        ]

    def get_status(self, obj):
        return obj.get_status_display()

    def get_esrb_rating(self, obj):
        return obj.get_esrb_rating_display()
    
    def get_pegi_rating(self, obj):
        return obj.get_pegi_rating_display()
    
    def get_franchise(self, obj):
        return obj.franchise.name