from rest_framework import serializers

from accounts.models import User

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