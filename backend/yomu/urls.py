from django.urls import path
from . import views

app_name = 'yomu'

urlpatterns = [
    path('home/', views.HomeView.as_view() ,name='yomu-home'),
    path('work/<int:id>/', views.WorkDetailView.as_view(), name='yomu-work-details'),
    path('work/search/', views.WorkSearchVIew.as_view(), name='yomu-work-search'),
    path('work/all-time/', views.WorkAllTimeView.as_view(), name='yomu-work-all-time')
]