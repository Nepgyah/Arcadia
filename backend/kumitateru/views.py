from rest_framework import (
    views,
    response,
    status
)
import kumitateru.models
from kumitateru.serializers import (
    CPUSerializer,
    MotherboardSerializer,
    GPUSerializer,
    RAMSerializer
)

class HomeView(views.APIView):

    def get(self, request):
        cpu_query_result = kumitateru.models.CPU.objects.filter()[:5]
        motherboard_query_result = kumitateru.models.Motherboard.objects.filter()[:5]
        gpu_query_result = kumitateru.models.GPU.objects.filter()[:5]
        ram_query_result = kumitateru.models.RAM.objects.filter()[:5]

        cpu_data = CPUSerializer(cpu_query_result, many=True).data
        motherboard_data = MotherboardSerializer(motherboard_query_result, many=True).data
        gpu_data = GPUSerializer(gpu_query_result, many=True).data
        ram_data = RAMSerializer(ram_query_result, many=True).data

        return response.Response({
            'cpus': cpu_data,
            'motherboards': motherboard_data,
            'gpus': gpu_data,
            'ram': ram_data
        }, status=status.HTTP_200_OK)