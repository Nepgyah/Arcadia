import rest_framework.pagination

class MediumResultSetPagination(rest_framework.pagination.PageNumberPagination):
    page_size = 2
    page_query_param = 'page_size'
    max_page_size = 3