from rest_framework import serializers
from .models import Community, Post, Comment
from shared.serializers import CompanySerializer, GenreSerializer
from characters.serializers import CharacterSerializer

class CommunitySerializer(serializers.ModelSerializer):
    posts = serializers.SerializerMethodField()

    class Meta:
        model = Community
        fields = [
            'id',
            'title',
            'description',
            'owner',
            'posts',
            'created_at'
        ]

    def get_posts(self, obj):
        return obj.get_posts()
    
class CommentSerializer(serializers.ModelSerializer):
    replies = serializers.SerializerMethodField()
    user = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ["id", "user", "content", "created_at", "replies"]

    def get_user(self, obj):
        return {
            'id': obj.user.id,
            'username': obj.user.username
        }
    
    def get_replies(self, obj):
        # Recursive call for replies on replies
        children = obj.replies.all()
        return CommentSerializer(children, many=True, context=self.context).data

class PostSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()
    community = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()
    comment_count = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id', 
            'user', 
            'title', 
            'content', 
            'comment_count',
            'comments', 
            'community', 
            'vote_score', 
            'created_at', 
            'updated_at'
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
            'title': obj.community.title,
            'slug': obj.community.slug
        }
    
    def get_comment_count(self, obj):
        return Comment.objects.filter(post=obj).count()
    
    def get_comments(self, obj):
        top_level_comments = obj.comments.filter(parent=None)
        comment_data = CommentSerializer(top_level_comments, many=True, read_only=True, context=self.context).data
        return comment_data