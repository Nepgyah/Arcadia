import graphene
from graphene_django import DjangoObjectType
import asobu.models

from characters.schema import (
    CharacterType
)
from shared.models import Franchise
from shared.schema import (
    FranchiseType
)

class CompanyType(DjangoObjectType):
    class Meta:
        model = asobu.models.Company
        fields = "__all__"

class GameCharacterType(DjangoObjectType):
    character = graphene.Field(CharacterType)
    role = graphene.String()

    class Meta:
        model = asobu.models.GameCharacter
        fields = '__all__'
    
    def resolve_role(self, info):
        return self.get_role_display()
    
class GameType(DjangoObjectType):
    status = graphene.String()
    esrb_rating = graphene.String()
    pegi_rating = graphene.String()
    franchise = graphene.Field(FranchiseType)
    previous_game = graphene.Field(lambda: GameRelationType)
    next_game = graphene.Field(lambda: GameRelationType)
    characters = graphene.List(GameCharacterType)

    class Meta:
        model = asobu.models.Game
        fields = "__all__"

    def resolve_status(self, info):
        return self.get_status_display()
    
    def resolve_esrb_rating(self, info):
        return self.get_esrb_rating_display()
    
    def resolve_pegi_rating(self, info):
        return self.get_esrb_rating_display()

    def resolve_franchise(self, info):
        return Franchise.objects.get(id=self.franchise.id)
    
    def resolve_previous_game(self, info):
        return asobu.models.GameRelation.objects.get(to_game=self, relation_type=asobu.models.GameRelation.Type.SERIES_ENTRY)
    
    def resolve_next_game(self, info):
        return asobu.models.GameRelation.objects.get(from_game=self, relation_type=asobu.models.GameRelation.Type.SERIES_ENTRY)
    
    def resolve_characters(self, info):
        return asobu.models.GameCharacter.objects.filter(game=self)
    
class GameRelationType(DjangoObjectType):
    from_game = graphene.Field(lambda: GameType)
    to_game = graphene.Field(lambda: GameType)
    relation_type = graphene.String()

    class Meta:
        model = asobu.models.GameRelation
        fields = '__all__'
    
    def resolve_relation_type(self, info):
        return self.get_relation_type_display()

    
class Query(graphene.ObjectType):
    game_by_id = graphene.Field(GameType, id=graphene.Int(required=True))


    def resolve_game_by_id(self, info, id):
        return asobu.models.Game.objects.get(id=id)

        
