from django.urls import path
from . import views

app_name = 'account'

urlpatterns = [
    path('auth/csrf/', views.csrf, name='csrf'),
    path('auth/login/', views.LoginView.as_view(), name='login'),
    path('auth/logout/', views.LogoutView.as_view(), name='logout'),
    path('get/', views.GetAccount.as_view(), name='get_user'),
    path('test/post/', views.testPost, name="test_post"),
    path('test/get/', views.testGet, name="test_get")
]