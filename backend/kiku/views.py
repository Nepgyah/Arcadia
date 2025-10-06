from django.shortcuts import render
import rest_framework.views
import rest_framework.response
import rest_framework.status
import kiku.models
import kiku.serializers

# Create your views here.
# class HomeView(rest_framework.views.APIView):

#     def get(self, request):
#         top_songs_query = kiku.models.Song.objects.all()[:5]
#         top_albums_query = kiku.models.Album.objects.all()[:5]
#         top_artists_query = kiku.models.Talent.objects.all().order_by('-plays')[:5]

#         top_songs_data = kiku.models.Album.objects.all().order_by('release_date')[:5]
#         top_albums_query = kiku.serializers.AlbumSerializer(most_recent_albums_query, many=True).data


#         return rest_framework.response.Response({
#             'popular_songs': most_popular_song_data,
#             'recent_albums': most_recent_albums_data
#         }, status=rest_framework.status.HTTP_200_OK)