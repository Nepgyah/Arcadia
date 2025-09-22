from django.core.paginator import Paginator

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
    
class WorkDetailView(rest_framework.views.APIView):

    def get(self, request, id=None):
        try:
            work = yomu.models.Work.objects.get(id=id)
            work_data = yomu.serializers.WorkSerializer(work).data
            return rest_framework.response.Response(work_data)
        except yomu.models.Work.DoesNotExist():
            return rest_framework.response.Response({}, status=rest_framework.status.HTTP_404_NOT_FOUND)

class WorkAllTimeView(rest_framework.views.APIView):

    def get(self, request):
        page = request.query_params.get('page', 1)

        work_queryset = yomu.models.Work.objects.all()
        paginator = Paginator(work_queryset, 4)
        page_obj = paginator.get_page(page)
        work_data = yomu.serializers.WorkLiteSerializer(page_obj, many=True).data

        return rest_framework.response.Response({
            'works': work_data,
            'page_count': paginator.num_pages
        }, status=rest_framework.status.HTTP_200_OK)