from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.forms import ValidationError
from django.utils import timezone

import random

class CustomUserManager(BaseUserManager):

    def create_superuser(self, email, username, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)

        return self.create_user(email, username, password, **other_fields)
    
    def create_user(self, email, username, password=None, **other_fields):

        if not email:
            raise ValueError('You must provide an email address')
        
        if not username:
            raise ValueError('You must provide a username')
        
        email = self.normalize_email(email)

        tag = self._generate_unique_tag(username)

        user = self.model(email=email, username=username, tag=tag, **other_fields)
        user.set_password(password)
        user.full_clean()
        user.save()

        return user

    def _generate_unique_tag(self, username):
        for _ in range(10):
            tag = str(random.randint(0, 9999)).zfill(4)

            if not self.model.objects.filter(username=username, tag=tag).exists():
                return tag
            
        raise ValidationError('Could not generate a unique tag for this username.')
    
class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(max_length=50, blank=False)
    tag = models.CharField(max_length=4)
    email = models.EmailField(unique=True)
    real_name = models.CharField(max_length=75, blank=True, null=True)
    about = models.TextField(max_length=500, blank=True, null=True)
    birth_date = models.DateField(null=True, blank=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now=True)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    picture_preset = models.SmallIntegerField(default=0)
    color_preset = models.SmallIntegerField(default=0)
    objects = CustomUserManager()

    class Meta:
        unique_together = ('username', 'tag')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return '%s#%s <%s>' % (self.username, self.tag, self.email)