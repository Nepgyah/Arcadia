from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Anime, Season
from .serializers import AnimeSerializer

# Create your views here.

class HomeView(APIView):

    def get(self, request):
        current_season = Season.objects.last()
        anime_query = Anime.objects.filter(season=current_season)[:5]
        anime_data = AnimeSerializer(anime_query, many=True).data
        return Response({'animes': anime_data})