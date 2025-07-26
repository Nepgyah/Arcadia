from rest_framework import serializers
from .models import Genre, Company, Character

class CompanySerializer(serializers.Serializer):

    class Meta:
        model=Company
        fields = [ 'name' ]

class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model=Character
        fields= [ 'first_name', 'last_name', 'nickname', 'slug' ]