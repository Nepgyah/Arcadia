from django.urls import path
from . import views

app_name = 'miru'

urlpatterns = [
    path('dashboard/', views.dashboard, name="miru-dashboard"),
    path('anime/<int:id>/details/', views.get_anime_details, name="anime-details"),
    path('anime/list/seasonal/', views.get_seasonal_anime, name="anime-details"),
    path('anime/list/top/', views.get_top_anime, name="anime-details"),
]