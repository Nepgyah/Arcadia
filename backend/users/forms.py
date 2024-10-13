from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django import forms


class CreateUserForm(UserCreationForm):
    class Meta:
        model = User
        fields = [
            'username',
            'email',
            'password1',
            'password2'
        ]

class LoginForm(forms.Form):
    username = forms.CharField(label="Your name", max_length=100)
    password = forms.CharField(label="Password", widget=forms.PasswordInput())