from django.core.paginator import Paginator
from graphene_django import DjangoObjectType
import graphene
import yomu.models
import characters.schema
import shared.models
import shared.schema

class PublisherType(DjangoObjectType):

    class Meta:
        model = yomu.models.Publisher
        fields = "__all__"

class AuthorType(DjangoObjectType):

    class Meta:
        model = yomu.models.Author
        fields = "__all__"

class WorkAuthorType(DjangoObjectType):
    author = graphene.Field(AuthorType)
    role = graphene.String()

    class Meta:
        model = yomu.models.WorkAuthor
        fields = "__all__"

    def resolve_role(self, info):
        return self.get_role_display()
    
class WorkCharacterType(DjangoObjectType):
    character = graphene.Field(characters.schema.CharacterType)
    role = graphene.String()

    class Meta:
        model = yomu.models.WorkCharacter
        fields = "__all__"

    def resolve_role(self, info):
        return self.get_role_display()
    
class WorkType(DjangoObjectType):

    franchise = graphene.Field(shared.schema.FranchiseType)
    status = graphene.String()
    type = graphene.String()
    rating = graphene.String()
    authors = graphene.List(WorkAuthorType)
    characters = graphene.List(WorkCharacterType)
    previous_work = graphene.Field(lambda: WorkRelationType)
    next_work = graphene.Field(lambda: WorkRelationType)

    class Meta:
        model = yomu.models.Work
        fields = "__all__"

    def resolve_characters(self, info):
        return yomu.models.WorkCharacter.objects.filter(work=self)
    
    def resolve_authors(self, info):
        return yomu.models.WorkAuthor.objects.filter(work=self)
    
    def resolve_status(self, info):
        return self.get_status_display()
    
    def resolve_type(self, info):
        return self.get_type_display()
    
    def resolve_previous_work(self, info):
        return yomu.models.WorkRelation.objects.filter(to_work=self, relation_type=yomu.models.WorkRelation.Type.SEQUEL).first()
    
    def resolve_next_work(self, info):
        return yomu.models.WorkRelation.objects.filter(from_work=self, relation_type=yomu.models.WorkRelation.Type.PREQUEL).first()
    
class WorkRelationType(DjangoObjectType):
    from_anime = graphene.Field(lambda: WorkType)
    to_anime = graphene.Field(lambda: WorkType)
    relation_type = graphene.String()

    class Meta:
        model = yomu.models.WorkRelation
        fields = "__all__"

    def resolve_relation_type(self, info):
        return self.get_relation_type_display()
    
# Sorts and Filters
class WorkFilterInput(graphene.InputObjectType):
    title = graphene.String()
    status = graphene.Int()
    type = graphene.Int()

class WorkFilterResults(graphene.ObjectType):
    results = graphene.List(WorkType)
    page_count = graphene.Int()
    current_page = graphene.Int()

class WorkSortInput(graphene.InputObjectType):
    category = graphene.String()
    direction = graphene.String()

class Query(graphene.ObjectType):
    work_by_id = graphene.Field(WorkType, id=graphene.Int(required=True))
    search_work = graphene.Field(WorkFilterResults, filters=WorkFilterInput(), sort=WorkSortInput(), page=graphene.Int(default_value=1), per_page=graphene.Int(default_value=10))
    franchise_by_work = graphene.Field(shared.schema.FranchiseType, id=graphene.Int(required=True))
    characters_by_work = graphene.List(WorkCharacterType, id=graphene.Int(required=True))

    def resolve_work_by_id(self, info, id):
        return yomu.models.Work.objects.get(id=id)
    
    def resolve_franchise_by_work(self, info, id):
        work = yomu.models.Work.objects.get(id=id)
        return shared.models.Franchise.objects.get(id=work.franchise)
    
    def resolve_characters_by_work(self, info, id):
        work = yomu.models.Work.objects.get(id=id)
        return yomu.models.WorkCharacter.objects.filter(work=work)
    
    def resolve_search_work(self, info, filters=None, sort=None, page=1, per_page=10):
        queryset = yomu.models.Work.objects.only('id', 'title', 'score', 'users', 'status', 'summary', 'slug', 'franchise').select_related('franchise')

        if filters:
            if filters.title:
                queryset = queryset.filter(title__icontains=filters.title)
            if filters.status != -1:
                queryset = queryset.filter(status=filters.status)
            if filters.type != -1:
                queryset = queryset.filter(status=filters.type)

        if sort:
            direction = '' if sort.direction == 'asc' else '-'
            if sort.category == 'users':
                queryset = queryset.order_by(f'{direction}users')
            if sort.category == 'score':
                queryset = queryset.order_by(f'{direction}score')

        paginator = Paginator(queryset, per_page)
        page_obj = paginator.get_page(page)

        return WorkFilterResults(
            results=page_obj,
            page_count=paginator.num_pages,
            current_page=page
        )