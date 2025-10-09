import graphene
from graphene_django import DjangoObjectType
from .models import (
    Song,
    Album,
    Artist
)

class SongType(DjangoObjectType):
    class Meta:
        model = Song
        fields = "__all__"

class AlbumType(DjangoObjectType):
    class Meta:
        model = Album
        fields = "__all__"

class ArtistType(DjangoObjectType):
    class Meta:
        model = Artist
        fields = "__all__"

class Query(graphene.ObjectType):
    all_songs = graphene.List(SongType)
    all_artists = graphene.List(ArtistType)

    artist_by_id = graphene.Field(ArtistType, id=graphene.Int(required=True))
    album_by_id = graphene.Field(AlbumType, id=graphene.UUID(required=True))

    def resolve_all_songs(root, info):
        return Song.objects.all()
    
    def resolve_all_artists(root, info):
        return Artist.objects.all()
    
    def resolve_album_by_id(root, info, id):
        return Album.objects.get(id=id)
    
    def resolve_artist_by_id(root, info, id):
        return Artist.objects.get(id=id)
    