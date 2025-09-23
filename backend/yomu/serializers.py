from rest_framework import serializers
from .models import Work, Author, WorkAuthor
from characters.serializers import CharacterSerializer
from shared.serializers import (
    FranchiseSerializer, 
    GenreSerializer
)

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model=Author
        fields=[
            'id', 'name'
        ]

class WorkSerializer(serializers.ModelSerializer):

    characters = CharacterSerializer(many=True, read_only=True)
    status = serializers.SerializerMethodField()
    authors = serializers.SerializerMethodField()
    genres = GenreSerializer(many=True, read_only=True)
    type = serializers.SerializerMethodField()
    franchise = FranchiseSerializer(read_only=True)
    
    class Meta:
        model=Work
        fields=[
            'id', 'slug', 'title', 'score', 'users', 'summary',
            'title_alternatives', 'status', 'characters', 'genres', 'type',
            'total_volumes', 'total_chapters',
            'authors', 'publishing_start_date', 'publishing_end_date', 'franchise'
        ]

    def get_authors(self, obj):
        related_authors_query = WorkAuthor.objects.filter(work=obj)
        authors = []
        for author_relation in related_authors_query:
            authors.append({
                'name': author_relation.author.name,
                'role': author_relation.get_role_display()
            })
        return authors

    def get_status(self, obj):
        return obj.get_status_display()
    
    def get_type(self, obj):
        return obj.get_type_display()
    
class WorkLiteSerializer(serializers.ModelSerializer):
    franchise = FranchiseSerializer(read_only=True)
    status = serializers.SerializerMethodField()

    class Meta:
        model = Work
        fields = [ 'id', 'title', 'slug', 'score', 'status', 'summary', 'users', 'franchise']

    def get_status(self, obj):
        return obj.get_status_display()