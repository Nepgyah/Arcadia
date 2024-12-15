from user.models import *
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import AccessToken
from rest_framework import authentication, permissions

class CookieTokenRefreshView(TokenRefreshView):
    def post(self, request, *args, **kwargs):
        print('Refreshing Tokens')
        response = super().post(request, *args, **kwargs)
        new_access = response.data.get("access")

        if new_access:
            response.set_cookie(
                key="access_token",
                value=new_access,
                httponly=True,
                secure=True,
                samesite="Strict",
            )

        return response
    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):

     def validate(self, attrs):
        data = super().validate(attrs)

        user = self.user
        data.update({
            "username": user.username,
            "email": user.email,
        })
        return data
     
class CookieTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        if response.status_code == 200:
            data = response.data
            access_token = data.get('access')
            refresh_token = data.get('refresh')

            response.set_cookie(
                key='access',
                value=access_token,
                httponly=True,
                secure=True,
                samesite='None',
                max_age=3600
            )
            response.set_cookie(
                key='refresh',
                value=refresh_token,
                httponly=True,
                secure=True,
                samesite='None',
                max_age=7 * 24 * 3600
            )

        return response

class VerifyUser(APIView):

    authentication_classes = [authentication.TokenAuthentication]

    def get(self, request, *args, **kwargs):
        access_token = request.COOKIES.get('access')
        if not access_token:
            return Response({"message": "Error accessing token"}, status=401)
        
        try:
            token = AccessToken(access_token)
            user = token.payload.get('user_id')
            user = User.objects.get(id=user)

            profile_data = {
                "username": user.username,
                "email": user.email,
            }

            return Response(profile_data, status=200)
        
        except User.DoesNotExist:
            return Response({}, status=404)

        except:
            return Response({"message": "An unexpected error occured, please try later"}, status=500)
        
class UserDashboardView(APIView):

    authentication_classes = [authentication.TokenAuthentication]
    
    def get(self, request, *args, **kwargs):
        access_token = request.COOKIES.get('access')
        if not access_token:
            return Response({"detail": "Token not provided"}, status=401)
        
        try:
            token = AccessToken(access_token)
            user = token.payload.get('user_id')
            user = User.objects.get(id=user)

            profile_data = {
                "username": user.username,
                "email": user.email,
                "name": user.name,
                "about": user.about,
            }

            return Response(profile_data, status=200)
        except Exception as e:
            return Response({"detail": "Token is invalid or expired."}, status=401)

class LogoutView(APIView):

    def post(self, request, *args, **kwargs):
        response = Response({"detail": "Successfully logged out"}, status=200)
        response.delete_cookie('access', path='/', samesite='None')
        response.delete_cookie('refresh', path='/', samesite='None')

        return response
