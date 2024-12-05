from miru.models import *
from django.http import JsonResponse

# Create your views here.
def dashboard(request):
    '''Returns top anime lists such as:
        - Currently Airing
        - Most Popular
    '''
    current_season = Season.objects.get(season="Fall", year=2024)
    seasonal_anime = current_season.animes.order_by('-score')[:5]
    seasonal_anime = [anime.get_snippet() for anime in seasonal_anime]

    top_animes = Anime.objects.filter(score__isnull=False).order_by('-score')[:5]
    top_animes = [anime.get_snippet() for anime in top_animes]

    return JsonResponse(
        {
            "seasonal_anime": seasonal_anime,
            "top_anime": top_animes
        },
        status = 200
    )

def get_anime_details(request, id):

    try:
        anime = Anime.objects.get(id=id)
        characters = anime.characters.all()
        characters = [character.to_json() for character in characters]
    except Exception as e:
        print(e)
        return JsonResponse({ "message" : "A server error has occured" }, status=500)
    return JsonResponse({ 
            "anime" : anime.to_json(),
            "characters" : characters,
        },
        status=200)

def get_seasonal_anime(request):

    try:
        current_season = Season.objects.get(season="Fall", year=2024)
        seasonal_anime = current_season.animes.all()
        seasonal_anime = [anime.get_card_data() for anime in seasonal_anime]

        return JsonResponse(
            {
                "seasonal_anime": seasonal_anime,
            },
            status = 200
        )
    except Exception as e:
        print(e)

def get_top_anime(request):

    try:
        top_animes = Anime.objects.filter(score__isnull=False).order_by('-score')[:50]
        top_animes = [anime.get_card_data() for anime in top_animes]

        return JsonResponse(
            {
                "top_anime": top_animes,
            },
            status = 200
        )
    except Exception as e:
        print(e)