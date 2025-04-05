from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils import timezone

class CustomUserManager(BaseUserManager):

    def create_superuser(self, email, username, password, **other_fields):
        other_fields.setdefault('is_staff', True)
        other_fields.setdefault('is_superuser', True)
        other_fields.setdefault('is_active', True)


        return self.create_user(email, username, password, **other_fields)
    
    def create_user(self, email, username, password, **other_fields ):

        if not email:
            raise ValueError('You must provide an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, username = username, **other_fields)
        user.set_password(password)
        user.save()

        return user

class User(AbstractBaseUser, PermissionsMixin):
    
    username = models.CharField(unique=True, max_length=50)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=150)
    about = models.TextField(max_length=500, blank=True)
    updated_at = models.DateTimeField(default=timezone.now)
    created_date = models.DateField(default=timezone.now)

    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    def __str__(self):
        return self.username

