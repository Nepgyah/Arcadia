from shared.repository.franchise_repository import FranchiseRepository
from miru.repository.anime_repository import AnimeRepository

class FranchiseService:

    @staticmethod
    def get_franchise_via_anime(id: int):
        anime = AnimeRepository.get_anime_by_id(id)
        if anime == None:
            return None
        else:
            franchise = FranchiseRepository.get_franchise_by_id(anime.franchise.id)
            return franchise