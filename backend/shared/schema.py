import graphene
from graphene.types.generic import GenericScalar
from graphene_django import DjangoObjectType
from .models import (
    Franchise,
    Genre
)
    
class FranchiseType(DjangoObjectType):
    socials = GenericScalar()

    class Meta:
        model = Franchise
        fields = "__all__"

    def resolve_socials(root, info):
        return root.socials

class GenreType(DjangoObjectType):

    class Meta:
        model = Genre
        fields = "__all__"