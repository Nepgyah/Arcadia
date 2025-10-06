from django.urls import path
from . import views

app_name = 'kiku'

urlpatterns = [
    path('home/', views.HomeView.as_view(), name='kiku-home'),
]