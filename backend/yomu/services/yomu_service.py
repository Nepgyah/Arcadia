from yomu.repository.yomu_repository import WorkRepository

class YomuSerivce:

    @staticmethod
    def get_work_by_id(id):
        return WorkRepository.get_work(id)
    
    @staticmethod
    def get_works_by_category(category, direction, count):
        valid_categories = ['score', 'users']
        valid_directions = ['asc', 'desc']

        if category not in valid_categories:
            raise ValueError(f'Invalid category: {category}')
        
        if direction not in valid_directions:
            raise ValueError(f'Invalid category: {category}')
        
        if count == None:
            count = 5
        return WorkRepository.get_works_by_category(category, direction, count)

    @staticmethod
    def get_characters_by_work(id):
        characters = WorkRepository.get_characters(id)

        if characters == None:
            return {}
        else:
            return characters
        