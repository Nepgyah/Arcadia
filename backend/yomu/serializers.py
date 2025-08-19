from rest_framework import serializers
from .models import Work, Author
from shared.serializers import CompanySerializer, CharacterSerializer, GenreSerializer

class AuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model=Author
        fields=[
            'id', 'name'
        ]

class WorkSerializer(serializers.ModelSerializer):

    characters = CharacterSerializer(many=True, read_only=True)
    status = serializers.SerializerMethodField()
    authors = AuthorSerializer(many=True, read_only=True)

    class Meta:
        model=Work
        fields=[
            'id', 'slug', 'title', 'score', 'users', 'summary',
            'title_alternatives', 'status', 'characters',
            'total_volumes', 'total_chapters',
            'authors', 'publishing_start_date', 'publishing_end_date'
        ]

    def get_status(self, obj):
        return obj.get_status_display()