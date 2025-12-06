from shared.repository.franchise_repository import FranchiseRepository
from miru.repository.anime_repository import AnimeRepository
from yomu.repository.yomu_repository import WorkRepository

class FranchiseService:

    @staticmethod
    def get_franchise_via_anime(id):
        anime = AnimeRepository.get_anime_by_id(id)
        if anime == None:
            return None
        else:
            franchise = FranchiseRepository.get_franchise_by_id(anime.franchise.id)
            return franchise
        
    @staticmethod
    def get_franchise_via_work(id):
        work = WorkRepository.get_work(id)
        if work == None:
            return None
        else:
            return FranchiseRepository.get_franchise_by_id(work.franchise.id)