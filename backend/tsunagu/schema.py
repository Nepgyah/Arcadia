import graphene
import tsunagu.models
import graphene_django
import accounts.models
import accounts.schema

class CommunityType(graphene_django.DjangoObjectType):
    
    class Meta:
        model = tsunagu.models.Community
        fields = "__all__"

class PostType(graphene_django.DjangoObjectType):
    user = graphene.Field(accounts.schema.UserType)

    class Meta:
        model = tsunagu.models.Post
        fields = "__all__"

class CommentType(graphene_django.DjangoObjectType):
    user = graphene.Field(accounts.schema.UserType)

    class Meta:
        model = tsunagu.models.Comment
        fields = "__all__"

class PostSortInput(graphene.InputObjectType):
    category = graphene.String()

class Query(graphene.ObjectType):
    posts = graphene.List(PostType, count=graphene.Int(required=True), sort=graphene.String(required=True), community=graphene.Int(required=False))

    def resolve_posts(self, info, count, sort, community):
        if community:
            return tsunagu.models.Post.objects.all()[:count]
        else:
            return tsunagu.models.Post.objects.filter(community_id=community)[:count]
        