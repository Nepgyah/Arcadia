from yomu.repository.yomu_repository import WorkRepository

class YomuSerivce:

    @staticmethod
    def get_work_by_id(id):
        return WorkRepository.get_work(id)
    
    @staticmethod
    def get_characters_by_work(id):
        characters = WorkRepository.get_characters(id)
        if characters == None:
            return {}
        else:
            return characters