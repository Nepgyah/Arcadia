from django.urls import path
from . import views

app_name = 'asobu'

urlpatterns = [
    path('home/', views.HomeView.as_view(), name='asobu-home'),
    path('game/<int:id>/', views.GameDetailView.as_view(), name='game-details'),
 ]