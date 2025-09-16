from django.core.paginator import Paginator

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
            'season_name': str(latest_season),
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

class AnimeSearchView(rest_framework.views.APIView):

    def get(self, request):
        page = request.query_params.get('page', 1)
        search = request.query_params.get('search', None)
        airing_status = int(request.query_params.get('status', -1))
        media_type = int(request.query_params.get('type', -1))

        anime_queryset = miru.models.Anime.objects.all()
        
        if airing_status != -1:
            anime_queryset = anime_queryset.filter(status=airing_status)

        if media_type != -1:
            anime_queryset = anime_queryset.filter(type=media_type)

        if search:
            anime_queryset = anime_queryset.filter(title__icontains=search)

        paginator = Paginator(anime_queryset, 3)
        page_obj = paginator.get_page(page)

        anime_data = miru.serializers.AnimeListeSerializer(page_obj, many=True).data

        return rest_framework.response.Response({
            'animes': anime_data,
            'page_count': paginator.num_pages
        }, status=rest_framework.status.HTTP_200_OK)