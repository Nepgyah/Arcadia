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
    comment_count = graphene.Int()

    class Meta:
        model = tsunagu.models.Post
        fields = "__all__"

    def resolve_comment_count(self, info):
        return self.comment_count
    
class CommentType(graphene_django.DjangoObjectType):
    user = graphene.Field(accounts.schema.UserType)

    class Meta:
        model = tsunagu.models.Comment
        fields = "__all__"

class PostSortInput(graphene.InputObjectType):
    category = graphene.String()

class Query(graphene.ObjectType):
    tsunagu_posts = graphene.List(PostType, count=graphene.Int(required=True), sort=graphene.String(required=False), community=graphene.Int(required=False))
    tsunagu_communities = graphene.List(CommunityType, count=graphene.Int(required=True))
    
    def resolve_tsunagu_posts(self, info, count, sort, community):
        if community:
            print('Getting posts withing community')
            return tsunagu.models.Post.objects.filter(community_id=community)[:count]
        else:
            print('Getting all posts')
            return tsunagu.models.Post.objects.all()[:count]
        
    def resolve_tsunagu_communities(self, info, count):
        return tsunagu.models.Community.objects.all()[:count]
        