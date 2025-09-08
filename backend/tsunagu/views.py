from django.shortcuts import render
import rest_framework.views
import rest_framework.response
import rest_framework.status
import tsunagu.models

from .serialzers import PostSerializer, CommunitySerializer
# Create your views here.

class HomeView(rest_framework.views.APIView):

    def get(self, request):
        latest_posts = tsunagu.models.Post.objects.all().order_by('-created_at')[:5]
        lastest_posts_data = PostSerializer(latest_posts, many=True).data

        return rest_framework.response.Response({
            'latest_posts': lastest_posts_data
        }, status=rest_framework.status.HTTP_200_OK)
    
class CommunityDetailView(rest_framework.views.APIView):

    def get(self, request, id=None):
        try :
            community_query = tsunagu.models.Community.objects.get(id=id)
            community_data = CommunitySerializer(community_query).data

        except tsunagu.models.Community.DoesNotExist:
            return rest_framework.response.Response({}, status=rest_framework.status.HTTP_404_NOT_FOUND)
        
        return rest_framework.response.Response(community_data)

class CommunityPostsView(rest_framework.views.APIView):

    def get(self, request, id=None):
        try:
            community_query = tsunagu.models.Community.objects.get(id=id)
            community_post_query = tsunagu.models.Post.objects.filter(community=community_query)[:5]
            community_post_data = PostSerializer(community_post_query, many=True).data

        except tsunagu.models.Community.DoesNotExist:
            return rest_framework.response.Response({}, status=rest_framework.status.HTTP_404_NOT_FOUND)
        
        return rest_framework.response.Response(community_post_data)
    
class PostDetailView(rest_framework.views.APIView):

    def get(self, request, community_id=None, post_id=None):
        try:
            post_query = tsunagu.models.Post.objects.get(community=community_id, id=post_id)
            post_data = PostSerializer(post_query).data

        except tsunagu.models.Post.DoesNotExist:
            return rest_framework.response.Response({}, status=rest_framework.status.HTTP_404_NOT_FOUND)
        
        return rest_framework.response.Response(post_data)
