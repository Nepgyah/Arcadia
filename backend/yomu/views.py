import rest_framework.views
import rest_framework.response
import rest_framework.status
import yomu.models
import yomu.serializers

class HomeView(rest_framework.views.APIView):

    def get(self, request):
        trending_work_batch = yomu.models.Work.objects.all()[:5]
        trending_work_data = yomu.serializers.WorkSerializer(trending_work_batch, many=True).data

        return rest_framework.response.Response({
            'trending': trending_work_data
        })
    
