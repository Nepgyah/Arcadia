import graphene
import graphene_django
import accounts.models

class UserType(graphene_django.DjangoObjectType):
    
    class Meta:
        model = accounts.models.User
        fields = "__all__"