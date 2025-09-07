from rest_framework import serializers
from .models import Franchise, Genre, Company

class FranchiseSerializer(serializers.Serializer):

    class Meta:
        model = Franchise
        fields = [
            'id', 
            'name', 
            'slug'
        ]
        
class CompanySerializer(serializers.Serializer):

    class Meta:
        model=Company
        fields = [ 'name' ]

class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = [
            'name'
        ]