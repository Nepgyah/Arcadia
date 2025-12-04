from rest_framework.test import APITestCase
from miru.models import Anime, AnimeCharacter, AnimeTheme
from characters.models import Character

class TestSetup(APITestCase):

    def setUp(self):
        self.test_anime = Anime.objects.create(
            title='Bocchi The Rock'
        )
        self.test_character = Character.objects.create(
            first_name='Hitori',
            last_name='Gotoh',
            nickname='Bocchi'
        )
        self.test_anime_character = AnimeCharacter.objects.create(
            anime=self.test_anime,
            character=self.test_character,
            role=0
        )
        self.test_anime_theme = AnimeTheme.objects.create(
            anime=self.test_anime,
            title='Seishun Complex',
            artist='Kessoku Band'
        )
        return super().setUp()