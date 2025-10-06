from rest_framework import serializers
from .models import Character, Talent

class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model=Character
        fields= [ 'id', 'first_name', 'last_name', 'nickname', 'slug' ]

class TalentSerializer(serializers.ModelSerializer):

    class Meta:
        model=Talent
        fields= [ 'id', 'first_name', 'last_name', 'slug', 'bio' ]