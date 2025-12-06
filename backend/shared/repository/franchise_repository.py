from shared.models import Franchise

class FranchiseRepository:

    @staticmethod
    def get_franchise_by_id(id: int):
        return Franchise.objects.get(id=id)