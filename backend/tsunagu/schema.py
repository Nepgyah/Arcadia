import graphene
import tsunagu.models
import graphene_django
import accounts.models
import accounts.schema
from graphene.types.generic import GenericScalar

class CommunityType(graphene_django.DjangoObjectType):
    
    class Meta:
        model = tsunagu.models.Community
        fields = "__all__"

class CommentType(graphene_django.DjangoObjectType):
    user = graphene.Field(accounts.schema.UserType)
    replies = graphene.List(lambda: CommentType)

    class Meta:
        model = tsunagu.models.Comment
        fields = "__all__"

    def resolve_replies(self, info):
        print(f'top comment {self.id}')
        return self.replies.all()
    
class PostType(graphene_django.DjangoObjectType):
    user = graphene.Field(accounts.schema.UserType)
    comment_count = graphene.Int()
    comments = GenericScalar()

    class Meta:
        model = tsunagu.models.Post
        fields = "__all__"

    def resolve_comment_count(self, info):
        return self.comment_count
    
    def resolve_comments(self, info):
        top_level_comments = self.comments.filter(parent=None)
        return [comment.get_comment_tree() for comment in top_level_comments]

class PostSortInput(graphene.InputObjectType):
    category = graphene.String()

class Query(graphene.ObjectType):
    tsunagu_posts = graphene.List(PostType, count=graphene.Int(required=True), sort=graphene.String(required=False), community=graphene.Int(required=False))
    tsunagu_communities = graphene.List(CommunityType, count=graphene.Int(required=True))
    tsunagu_community = graphene.Field(CommunityType, id=graphene.Int(required=True))
    tsunagu_post = graphene.Field(PostType, id=graphene.Int(required=True))

    def resolve_tsunagu_posts(self, info, count, sort, community):
        if community:
            return tsunagu.models.Post.objects.filter(community_id=community)[:count]
        else:
            return tsunagu.models.Post.objects.all()[:count]
        
    def resolve_tsunagu_communities(self, info, count):
        return tsunagu.models.Community.objects.all()[:count]
    
    def resolve_tsunagu_community(self, info, id):
        return tsunagu.models.Community.objects.get(id=id)
    
    def resolve_tsunagu_post(self, info, id):
        return tsunagu.models.Post.objects.get(id=id)
        