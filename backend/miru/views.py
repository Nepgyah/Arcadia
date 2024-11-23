from django.shortcuts import render
from miru.models import *
from django.http import JsonResponse

# Create your views here.
def MiruDashboard(request):
    '''Returns top anime lists such as:
        - Currently Airing
        - Most Popular
    '''
    season = Season.objects.get(season="Fall", year=2024)
    animes = season.animes.all()
    animes = [anime.to_json() for anime in animes]

    return JsonResponse(
        {
            "seasonal": animes
        },
        status = 200
    )
