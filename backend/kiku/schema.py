import graphene
from graphene_django import DjangoObjectType
from .models import (
    AlbumSong,
    Song,
    Album,
    Artist
)

class AlbumType(DjangoObjectType):
    type = graphene.String()

    class Meta:
        model = Album
        fields = "__all__"

    def resolve_type(self, info):
        return self.get_type_display()
    
class ArtistType(DjangoObjectType):
    latest_album = graphene.Field(AlbumType)

    class Meta:
        model = Artist
        fields = "__all__"

    def resolve_latest_album(self, info):
        return Album.objects.filter(artist=self).first()

class AlbumSongType(DjangoObjectType):

    class Meta:
        model = AlbumSong
        fields = "__all__"

class SongType(DjangoObjectType):
    album = graphene.Field(AlbumType)
    
    class Meta:
        model = Song
        fields = "__all__"

    def resolve_album(self, info):
        related_albums = AlbumSong.objects.filter(song=self).order_by('id')
        return related_albums[0].album
    
class Query(graphene.ObjectType):
    featured_artist = graphene.Field(ArtistType)
    featured_album = graphene.Field(AlbumType)

    all_songs = graphene.List(SongType)
    all_artists = graphene.List(ArtistType)

    top_songs = graphene.List(SongType, count=graphene.Int(required=True), artist_id=graphene.Int(required=False))
    top_albums = graphene.List(AlbumType, count=graphene.Int(required=True))
    top_artists = graphene.List(ArtistType, count=graphene.Int(required=True))

    artist_by_id = graphene.Field(ArtistType, id=graphene.Int(required=True))
    album_by_id = graphene.Field(AlbumType, id=graphene.UUID(required=True))

    # Featured
    def resolve_featured_artist(root, info):
        return Artist.objects.first()
    
    def resolve_featured_album(root, info):
        return Album.objects.filter(artist=Artist.objects.first()).first()
    
    # Songs
    def resolve_all_songs(root, info):
        return Song.objects.all()
    
    def resolve_top_songs(root, info, count=5, artist_id=None):
        if artist_id:
            return Song.objects.filter(artist_id=artist_id).order_by('-plays')[:count]
        else:
            return Song.objects.order_by('-plays')[:count]
    
    # Artists
    def resolve_all_artists(root, info):
        return Artist.objects.all()
    
    def resolve_artist_by_id(root, info, id):
        return Artist.objects.get(id=id)
    
    def resolve_top_artists(root, info, count):
        return Artist.objects.all()[:count]
    
    # Album
    def resolve_album_by_id(root, info, id):
        return Album.objects.get(id=id)
    
    def resolve_top_albums(root, info, count):
        return Album.objects.order_by('-plays')[:count]
    