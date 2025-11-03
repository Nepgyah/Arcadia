import graphene
from graphene_django import DjangoObjectType
import yomu.models
import characters.schema
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
    
class Query(graphene.ObjectType):
    work_by_id = graphene.Field(WorkType, id=graphene.Int(required=True))

    def resolve_work_by_id(self, info, id):
        return yomu.models.Work.objects.get(id=id)