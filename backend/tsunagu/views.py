from django.shortcuts import render
import rest_framework.views
import rest_framework.response
import rest_framework.status
import tsunagu.models

from .serialzers import PostSerializer
# Create your views here.

class HomeView(rest_framework.views.APIView):

    def get(self, request):
        latest_posts = tsunagu.models.Post.objects.all().order_by('-created_at')[:5]
        lastest_posts_data = PostSerializer(latest_posts, many=True).data

        return rest_framework.response.Response({
            'latest_posts': lastest_posts_data
        }, status=rest_framework.status.HTTP_200_OK)
