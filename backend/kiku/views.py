from django.shortcuts import render
import rest_framework.views
import rest_framework.response
import rest_framework.status
import kiku.models
import kiku.serializers

# Create your views here.
class HomeView(rest_framework.views.APIView):

    def get(self, request):

        feature_artist_query = kiku.models.Artist.objects.all().first()
        featured_artist_data = kiku.serializers.ArtistSerializer(feature_artist_query).data
        featured_album_data = kiku.serializers.AlbumSerializer(kiku.models.Album.objects.filter(artist=feature_artist_query).first()).data
        
        top_songs_query = kiku.models.Song.objects.all().order_by('-plays')[:5]
        top_albums_query = kiku.models.Album.objects.all().order_by('-plays')[:5]
        top_artists_query = kiku.models.Artist.objects.all()[:5]

        # top_song_data = kiku.Song
        top_songs_data = kiku.serializers.SongSerializer(top_songs_query, many=True).data
        top_albums_data = kiku.serializers.AlbumSerializer(top_albums_query, many=True).data
        top_artists_data = kiku.serializers.ArtistSerializer(top_artists_query, many=True).data

        return rest_framework.response.Response({
            'featured_artist': featured_artist_data,
            'featured_album': featured_album_data,
            'top_songs': top_songs_data,
            'top_albums': top_albums_data,
            'top_artists': top_artists_data
        }, status=rest_framework.status.HTTP_200_OK)
    
class AlbumDetailView(rest_framework.views.APIView):

    def get(self, request, uuid):
        try:
            album_query = kiku.models.Album.objects.get(id=uuid)
        except kiku.models.Album.DoesNotExist():
            print('NOT FOUND')
            return rest_framework.response.Response({}, status=rest_framework.status.HTTP_404_NOT_FOUND)
        
        album_data = kiku.serializers.AlbumSerializer(album_query).data
        return rest_framework.response.Response({
            'album': album_data
        }, rest_framework.status.HTTP_200_OK)

