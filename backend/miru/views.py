import rest_framework.views
import rest_framework.response
import miru.models
import miru.serializers

class HomeView(rest_framework.views.APIView):

    def get(self, request):
        latest_season = miru.models.Season.objects.all().first()
        seasonal_anime_objects = miru.models.Anime.objects.filter(season=latest_season)[:5]
        seasonal_anime_data = miru.serializers.AnimeSerializer(seasonal_anime_objects, many=True).data
        all_time_anime_objects = miru.models.Anime.objects.all().order_by('score')[:5]
        all_time_anime_data = miru.serializers.AnimeSerializer(all_time_anime_objects, many=True).data

        return rest_framework.response.Response({
            'seasonal': seasonal_anime_data,
            'top': all_time_anime_data
        })