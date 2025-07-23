from django.urls import path
from . import views

app_name = 'miru'

urlpatterns = [
    path('home/', views.HomeView.as_view(), name='miru-home'),
    path('anime/<slug:slug>/', views.AnimeDetailView.as_view(), name='anime-details')
]