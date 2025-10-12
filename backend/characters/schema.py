import graphene
from graphene_django import DjangoObjectType
from .models import (
    VoiceActor,
    Character
)

class VoiceActorType(DjangoObjectType):
    class Meta:
        model = VoiceActor
        fields = "__all__"

class CharacterType(DjangoObjectType):
    played_by = graphene.Field(VoiceActorType)

    class Meta:
        model = Character
        fields = "__all__"

    def resolve_played_by(self, info):
        voice_actor = VoiceActor.objects.get(id=self.played_by.id)
        return voice_actor