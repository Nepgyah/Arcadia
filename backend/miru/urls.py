from django.urls import path
from . import views

app_name = 'miru'

urlpatterns = [
    path('dashboard/', views.MiruDashboard, name="test"),
]