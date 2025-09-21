from django.urls import path
from . import views

app_name = 'miru'

urlpatterns = [
    path('home/', views.HomeView.as_view(), name='miru-home'),
    path('anime/<int:id>/', views.AnimeDetailView.as_view(), name='anime-details'),
    path('anime/search/', views.AnimeSearchView.as_view(), name='miru-anime-search'),
    path('anime/all-time/', views.AnimeAllTimeView.as_view(), name='miru-anime-all-time'),
    path('anime/season/', views.AnimeSeasonView.as_view(), name='miru-anime-all-time')
]