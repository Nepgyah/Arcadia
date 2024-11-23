from django.urls import path
from . import views

app_name = 'miru'

urlpatterns = [
    path('dashboard/', views.MiruDashboard, name="miru-dashboard"),
    path('anime/<int:id>/details/', views.anime_details, name="anime-details")
]