from django.urls import path
from . import views

app_name = 'kumitateru'

urlpatterns = [
    path('home/', views.HomeView.as_view(), name='miru-home'),
]