from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

app_name = 'user'

urlpatterns = [
    path('verify/', views.VerifyUser.as_view(), name="verify-user"),
    path('test/', views.UserDashboardView.as_view(), name="test"),
    path('logout/', views.LogoutView.as_view(), name="logout"),
]