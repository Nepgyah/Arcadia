import rest_framework.views
import rest_framework.response
import rest_framework.status
import asobu.models
from asobu.serializers import GameSerializer

class HomeView(rest_framework.views.APIView):

    def get(self, request):
        latest_games = asobu.models.Game.objects.all().order_by('release_date')[:5]
        latest_game_data = GameSerializer(latest_games, many=True).data
        
        top_rated_games = asobu.models.Game.objects.all().order_by('-score')[:5]
        top_rated_games_data = GameSerializer(top_rated_games, many=True).data

        # all_time_games = asobu.models.Game.objects.all(
        return rest_framework.response.Response({
            'latest_games': latest_game_data,
            'top_rated_games' : top_rated_games_data
        }, status=rest_framework.status.HTTP_200_OK)

class GameDetailView(rest_framework.views.APIView):

    def get(self, request, slug=None):
        try:
            game = asobu.models.Game.objects.get(slug=slug)
            game_data = GameSerializer(game, many=False).data
            return rest_framework.response.Response(game_data)
        except asobu.models.Game.DoesNotExist():
            return rest_framework.response.Response({}, status=rest_framework.status.HTTP_404_NOT_FOUND)