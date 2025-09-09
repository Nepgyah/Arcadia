from django.urls import path
from . import views

app_name = 'tsunagu'

urlpatterns = [
    path('home/', views.HomeView.as_view(), name='tsunagu-home'),
    path('community/<int:id>/', views.CommunityDetailView.as_view(), name='tsunagu-community-detail'),
    path('community/<int:id>/posts/', views.CommunityPostsView.as_view(), name='tsunagu-community-posts'),
    path('community/<int:community_id>/post/<int:post_id>/', views.PostDetailView.as_view(), name='tsunagu-post-detail'),
]