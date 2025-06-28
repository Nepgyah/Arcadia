from django.urls import path
from . import views

app_name = 'account'

urlpatterns = [
    path('auth/csrf/', views.csrf, name='csrf'),
    path('test/post/', views.testPost, name="test_post"),
    path('test/get/', views.testGet, name="test_get")
]