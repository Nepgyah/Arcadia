import json
from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST, require_GET
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.exceptions import NotFound
from rest_framework.response import Response

from accounts.models import User
from accounts.serializers import UserSerializer, CreateUserSerializer

from pathlib import Path
import os
from dotenv import load_dotenv

load_dotenv(Path(__file__).resolve().parent.parent / ".env.prod")
ARC_KEY = os.getenv("ARC_KEY")

@ensure_csrf_cookie
def csrf(request):
    return JsonResponse({
        'csrfToken': request.META.get("CSRF_COOKIE"),
        'message': 'CSRF cookie set'
    })

class LoginView(APIView):

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        user_obj = authenticate(request, email=email, password=password)
        
        if user_obj:
            user_data = UserSerializer(user_obj, many=False).data
            login(request, user_obj)

            return Response({
                'user': user_data,
                'csrfToken': request.META.get("CSRF_COOKIE")
            })
        else:
            return Response({'message': 'Invalid'}, status=status.HTTP_400_BAD_REQUEST)
    
class LogoutView(APIView):

    def post(self, request):
        logout(request)
        return Response({})
    
class GetProfileView(APIView):

    def get(self, request, profile_id = 0):
        try:
            user_obj = User.objects.get(id=profile_id)
        except User.DoesNotExist:
            return Response({'user': None})

        user_data = UserSerializer(user_obj, many=False).data

        return Response({'user': user_data})
        
class GetAccountView(APIView):

    def get(self, request):
        try:
            user_obj = User.objects.get(id=request.user.id)
        except User.DoesNotExist:
            return Response({'user': None})

        user_data = UserSerializer(user_obj, many=False).data

        return Response({'user': user_data})

@require_POST
def CreateUser(request):

    data = json.loads(request.body.decode('utf-8')) 
    formData = data.get('form')
    serializer = CreateUserSerializer(data=formData)
    
    if serializer.is_valid():
        if formData['arc_key'] == ARC_KEY:
            user = serializer.save()
            login(request, user)
            return JsonResponse({
                'user':UserSerializer(user, many=False).data,
                'csrfToken': request.META.get("CSRF_COOKIE")
            }, status=200)
        else:
            return JsonResponse({}, status=400)
    else:
        return JsonResponse({
            'errors': serializer.errors
        }, status=400)

# MISC
@require_POST
def testPost(request):
    print('ok')
    return JsonResponse({}, status=200)

@require_GET
def testGet(request):
    print('ok')
    return JsonResponse({}, status=200)
