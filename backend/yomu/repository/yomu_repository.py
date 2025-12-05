from yomu.models import (
    Work,
    WorkCharacter
)

class WorkRepository:

    @staticmethod
    def get_work(id):
        try:
            return Work.objects.get(id=id)
        except Work.DoesNotExist:
            return None
        
    @staticmethod
    def get_characters(id):
        try:
            work = Work.objects.get(id=id)
            return WorkCharacter.objects.filter(work=work)
        except Work.DoesNotExist:
            return None
        
    @staticmethod
    def get_works_by_category(category, direction, count):
        if direction == 'desc':
            return Work.objects.order_by(f'-{category}')[:count]
        else:
            return Work.objects.order_by(category)[:count]
