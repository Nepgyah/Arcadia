from django.shortcuts import render
from django.http import JsonResponse

# Create your views here.
def test(request):
    return JsonResponse({'message': 'OK!'}, status=200)