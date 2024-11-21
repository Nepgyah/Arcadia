from django.urls import path
from . import views

app_name = 'user'

urlpatterns = [
    path('test/', views.test, name="test"),
    path('logout/', views.logoutUser, name='logout'),
    path('check-auth/', views.checkAuthentication, name='check-authentication')
]