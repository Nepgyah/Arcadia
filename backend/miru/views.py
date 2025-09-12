import rest_framework.generics
import rest_framework.response
import rest_framework.status
import rest_framework.views
import miru.models
import miru.serializers
import utils.pagination

class HomeView(rest_framework.views.APIView):

    def get(self, request):
        latest_season = miru.models.Season.objects.all().first()
        seasonal_anime_objects = miru.models.Anime.objects.filter(season=latest_season)[:5]
        seasonal_anime_data = miru.serializers.AnimeSerializer(seasonal_anime_objects, many=True).data
        all_time_anime_objects = miru.models.Anime.objects.all().order_by('-score')[:5]
        all_time_anime_data = miru.serializers.AnimeSerializer(all_time_anime_objects, many=True).data

        return rest_framework.response.Response({
            'seasonal': seasonal_anime_data,
            'top': all_time_anime_data
        }, status=rest_framework.status.HTTP_200_OK)

class AnimeDetailView(rest_framework.views.APIView):

    def get(self, request, id=None):
        try:
            anime=miru.models.Anime.objects.get(id=id)
            anime_data = miru.serializers.AnimeSerializer(anime).data
            return rest_framework.response.Response(anime_data)
        except miru.models.Anime.DoesNotExist():
            return rest_framework.response.Response({}, status=rest_framework.status.HTTP_404_NOT_FOUND)
        
# class AnimeSearchView(rest_framework.views.APIView):

#     def get(self, request, page = 0):
#         query_result = []
#         return rest_framework.response.Response({
#             'result': query_result
#         }, status=rest_framework.status.HTTP_200_OK)
    
class AnimeSearchView(rest_framework.generics.ListAPIView):
    queryset = miru.models.Anime.objects.all()
    serializer_class = miru.serializers.AnimeListeSerializer
    pagination_class = utils.pagination.MediumResultSetPagination