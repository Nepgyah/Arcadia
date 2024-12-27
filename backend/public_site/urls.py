from django.urls import path
from . import views
from django.conf.urls import handler404

app_name = 'public_site'

handler404 = views.not_found

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('about-us/', views.aboutUs, name='about-us'),
]