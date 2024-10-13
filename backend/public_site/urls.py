from django.urls import path
from . import views

app_name = 'public_site'

urlpatterns = [
    path('', views.homepage, name='homepage'),
]