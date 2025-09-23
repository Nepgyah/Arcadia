from rest_framework import serializers
from .models import Character

class CharacterSerializer(serializers.ModelSerializer):

    class Meta:
        model=Character
        fields= [ 'id', 'first_name', 'last_name', 'nickname', 'slug' ]