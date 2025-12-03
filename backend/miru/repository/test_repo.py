from miru.test_setup import TestSetup
from miru.repository.anime_repository import AnimeRepository

class TestRepository(TestSetup):
    
    def test_repo_can_get_anime_by_id(self):
        anime = AnimeRepository.get_anime_by_id(id=self.test_anime.id)
        self.assertEqual(anime.title, self.test_anime.title)

    def test_repo_anime_not_found(self):
        anime = AnimeRepository.get_anime_by_id(id=99)
        self.assertIsNone(anime)

    def test_repo_can_get_characters_by_anime(self):
        characters = AnimeRepository.get_characters(self.test_anime.id)
        self.assertIn(self.test_anime_character, characters)

    def test_repo_cannot_get_characters_by_anime(self):
        characters = AnimeRepository.get_characters(99)
        self.assertIsNone(characters)

    def test_repo_can_get_themes_by_anime(self):
        themes = AnimeRepository.get_themes_by_anime(self.test_anime.id)
        self.assertIn(self.test_anime_theme, themes)

    def test_repo_cannot_get_themes_by_anime(self):
        themes = AnimeRepository.get_themes_by_anime(99)
        self.assertIsNone(themes)