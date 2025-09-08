from rest_framework import serializers
from .models import Community, Post, Comment
from shared.serializers import CompanySerializer, GenreSerializer
from characters.serializers import CharacterSerializer


class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    community = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'user', 'title', 'content', 'community', 'vote_score', 'created_at', 'updated_at'
        ]

    def get_user(self, obj):
        return {
            'id': obj.user.id,
            'username': obj.user.username,
            'picture_preset': obj.user.picture_preset
        }
    
    def get_community(self, obj):
        return {
            'id': obj.community.id,
            'title': obj.community.title
        }