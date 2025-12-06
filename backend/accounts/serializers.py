from rest_framework import serializers
from accounts.models import User
from django.contrib.auth.password_validation import validate_password

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'tag',
            'email',
            'real_name',
            'about',
            'birth_date',
            'updated_at',
            'created_at',
            'picture_preset',
            'color_preset'
        ]

class CreateUserSerializer(serializers.ModelSerializer):
    confirm_password=serializers.CharField(min_length=10)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'confirm_password']

    def validate(self, data):
        try:
            validate_password(data['password'])
        except serializers.ValidationError as e:
            raise serializers.ValidationError({'password': list(e.messages)})
        
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({'password': 'Passwords do not match'})
        
        return data
    
    def create(self, data):
        print('Creating user')
        return User.objects.create_user(
            username=data['username'],
            email=data['email'],
            password=data['password'],
            is_active=True
        )
