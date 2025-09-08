from django.db import models
from django.utils.text import slugify
import accounts.models

class Community(models.Model):
    title = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(unique=True, blank=True)

    description = models.TextField()
    owner = models.ForeignKey(accounts.models.User, on_delete=models.PROTECT, related_name='owned_communities')
    moderators = models.ManyToManyField(accounts.models.User, related_name='moderated_communities', blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
    
    def get_posts(self):
        return Post.objects.filter(community=self).count()
    
class Post(models.Model):
    user = models.ForeignKey(accounts.models.User, on_delete=models.CASCADE, null=False)
    title = models.CharField(max_length=255)
    content = models.TextField()
    community = models.ForeignKey(Community, on_delete=models.CASCADE, related_name='posts', null=False, blank=False)

    vote_score = models.IntegerField(default=0, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.title} by {self.user}'
    
class Comment(models.Model):
    user = models.ForeignKey(accounts.models.User, on_delete=models.CASCADE, related_name="comments")
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    parent = models.ForeignKey("self", null=True, blank=True, on_delete=models.CASCADE, related_name="replies")

    vote_score = models.IntegerField(default=0, blank=True)

    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def is_root(self):
        return self.parent is None

    def __str__(self):
        return f"Comment by {self.user} on {self.post}"