from django.core.paginator import Paginator
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
    FranchiseType
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

class AnimeFilterInput(graphene.InputObjectType):
    title = graphene.String()
    type = graphene.Int()
    status = graphene.Int()

class AnimeFilterResults(graphene.ObjectType):
    results = graphene.List(AnimeType)
    page_count = graphene.Int()
    current_page = graphene.Int()

class Query(graphene.ObjectType):
    
    anime_by_id = graphene.Field(AnimeType, id=graphene.Int(required=True))
    top_anime_by_category = graphene.List(AnimeType, count=graphene.Int(required=False), category=graphene.String(required=True))
    search_anime = graphene.Field(AnimeFilterResults, filters=AnimeFilterInput(), page=graphene.Int(default_value=1), per_page=graphene.Int(default_value=10))

    def resolve_anime_by_id(self, info, id):
        return Anime.objects.get(id=id)
    
    def resolve_top_anime_by_category(self, info, count, category):
        if count:
            return Anime.objects.order_by(f'-{category}')[:count]
        else:
            return Anime.objects.order_by(f'-{category}')[:5]
        
    def resolve_search_anime(self, info, filters=None, page=1, per_page=10):
        queryset = Anime.objects.only('id', 'title', 'score', 'users', 'status', 'summary', 'slug', 'franchise').select_related('franchise')

        if filters:
            if filters.title:
                queryset = queryset.filter(title__icontains=filters.title)
            if filters.type != -1:
                print('filter type')
                queryset = queryset.filter(type=filters.type)
            if filters.status != -1:
                print('filter status')
                queryset = queryset.filter(status=filters.status)

        paginator = Paginator(queryset, per_page)
        page_obj = paginator.get_page(page)

        return AnimeFilterResults(
            results=page_obj,
            page_count=paginator.num_pages,
            current_page=page
        )
    