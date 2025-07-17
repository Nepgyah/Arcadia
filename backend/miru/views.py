from django.shortcuts import render
import rest_framework
import models
import serializers

# Create your views here.
class HomeView(rest_framework.views.APIView):

    def get(request):
        current_season = models.Season.objects.last()
        anime_query = models.Anime.objects.filter(season=current_season)
        print(anime_query)