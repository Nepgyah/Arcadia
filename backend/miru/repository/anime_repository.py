from miru.models import (
    Anime,
    AnimeTheme,
    AnimeCharacter
)

# Data Access Layer (Repository) - Where the actual orm/interaction with the database takes place

class AnimeRepository:

    @staticmethod
    def get_anime_by_id(id):
        try:
            return Anime.objects.get(id=id)
        except Anime.DoesNotExist:
            return None
        
    @staticmethod
    def get_animes_by_category(category, count=None):
        valid_fields = ['score', 'users']

        if category not in valid_fields:
            raise ValueError(f'Invalid category: {category}')
        
        if count == None:
            count = 5
        animes = Anime.objects.order_by(f'-{category}')
        return animes[:count]
    
    @staticmethod
    def get_themes_by_anime(anime):
        return AnimeTheme.objects.filter(anime=anime)
    
    @staticmethod
    def get_characters(anime):
        return AnimeCharacter.objects.filter(anime=anime)