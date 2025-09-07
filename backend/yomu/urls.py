from django.urls import path
from . import views

app_name = 'yomu'

urlpatterns = [
    path('home/', views.HomeView.as_view() ,name='yomu-home'),
    path('work/<int:id>/', views.WorkDetailView.as_view(), name='work-details')
]