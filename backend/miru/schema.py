import graphene
from graphene_django import DjangoObjectType
from graphene.types.generic import GenericScalar
from .models import (
    Anime,
    Studio,
    Season,
    AnimeCharacter,
    AnimeRelation,
    AnimeTheme
)

from characters.schema import (
    CharacterType
)

from shared.models import Franchise
from shared.schema import (
    FranchiseType,
    GenreType
)
    
class AnimeThemeType(DjangoObjectType):

    class Meta:
        model = AnimeTheme
        fields = "__all__"

class StudioType(DjangoObjectType):

    class Meta:
        model = Studio
        fields = "__all__"

class Season(DjangoObjectType):

    class Meta:
        model = Season
        fields = "__all__"

class AnimeCharacterType(DjangoObjectType):
    character = graphene.Field(CharacterType)
    role = graphene.String()

    class Meta:
        model = AnimeCharacter
        fields = "__all__"

    def resolve_role(self, info):
        return self.get_role_display()

class AnimeType(DjangoObjectType):
    franchise = graphene.Field(FranchiseType)
    status = graphene.String()
    type = graphene.String()
    rating = graphene.String()
    characters = graphene.List(AnimeCharacterType)
    previous_anime = graphene.Field(lambda: AnimeRelationType)
    next_anime = graphene.Field(lambda: AnimeRelationType)
    season = graphene.String()
    themes = GenericScalar()

    class Meta:
        model = Anime
        fields = "__all__"
    
    def resolve_franchise(self, info):
        return Franchise.objects.get(id=self.franchise.id)
    
    def resolve_rating(self, info):
        return self.get_rating_display()
    
    def resolve_type(self, info):
        return self.get_type_display()
    
    def resolve_status(self, info):
        return self.get_status_display()
    
    def resolve_season(self, info):
        if self.season:
            return str(self.season)
        else:
            return 'N/A'
        
    def resolve_characters(self, info):
        return AnimeCharacter.objects.filter(anime=self)
    
    def resolve_previous_anime(self, info):
        return AnimeRelation.objects.filter(to_anime=self, relation_type=AnimeRelation.Type.SERIES_ENTRY).first()
    
    def resolve_next_anime(self, info):
        return AnimeRelation.objects.filter(from_anime=self, relation_type=AnimeRelation.Type.SERIES_ENTRY).first()
    
    def resolve_themes(self, info):
        themes = AnimeTheme.objects.filter(anime=self)

        if not themes.exists:
            return {}
        else:
            return {
                'opening': [theme.serialize() for theme in themes.filter(theme_type=AnimeTheme.Type.OP)],
                'ending': [theme.serialize() for theme in themes.filter(theme_type=AnimeTheme.Type.ED)],
            }
    
class AnimeRelationType(DjangoObjectType):
    from_anime = graphene.Field(lambda: AnimeType)
    to_anime = graphene.Field(lambda: AnimeType)
    relation_type = graphene.String()

    class Meta:
        model = AnimeRelation
        fields = "__all__"

    def resolve_relation_type(self, info):
        return self.get_relation_type_display()

class Query(graphene.ObjectType):
    
    anime_by_id = graphene.Field(AnimeType, id=graphene.Int(required=True))

    def resolve_anime_by_id(self, info, id):
        return Anime.objects.get(id=id)
    