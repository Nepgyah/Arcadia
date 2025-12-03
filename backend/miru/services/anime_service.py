from miru.repository.anime_repository import AnimeRepository

# Service/Business Layer - Transform/Prepare objects and call the repositories here

class AnimeService:

    @staticmethod
    def get_anime_by_id(id):
        return AnimeRepository.get_anime_by_id(id)
    
    @staticmethod
    def get_top_animes_by_category(category, count):
        animes = AnimeRepository.get_animes_by_category(category)
        animes = animes[:count]
        return animes
    
    @staticmethod
    def get_themes_by_anime(id):
        themes = AnimeRepository.get_themes_by_anime(id)
        if not themes.exists:
            return {}
        else:
            return themes
        
    @staticmethod
    def get_characters_by_anime(id):
        characters = AnimeRepository.get_characters(id)
        if not characters.exists:
            return []
        else:
            return characters