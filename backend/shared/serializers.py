from rest_framework import serializers
from .models import Genre, Company

class CompanySerializer(serializers.Serializer):

    class Meta:
        model=Company
        fields = [ 'name' ]