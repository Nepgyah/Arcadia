from django.urls import path
from . import views

app_name = 'tsunagu'

urlpatterns = [
    path('home/', views.HomeView.as_view(), name='tsunagu-home'),
]