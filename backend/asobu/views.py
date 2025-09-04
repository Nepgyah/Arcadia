import rest_framework.views
import rest_framework.response
import rest_framework.status
import asobu.models
from asobu.serializers import GameSerializer

class HomeView(rest_framework.views.APIView):

    def get(self, request):
        latest_games = asobu.models.Game.objects.all()
        latest_game_data = GameSerializer(latest_games, many=True).data

        return rest_framework.response.Response({
            'games': latest_game_data
        }, status=rest_framework.status.HTTP_200_OK)

class GameDetailView(rest_framework.views.APIView):

    def get(self, request, game_id=-1):
        try:
            game = asobu.models.Game.objects.get(id=game_id)
            game_data = GameSerializer(game, many=False).data
            return rest_framework.response.Response(game_data)
        except asobu.models.Game.DoesNotExist():
            return rest_framework.response.Response({}, status=rest_framework.status.HTTP_404_NOT_FOUND)