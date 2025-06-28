from django.views.decorators.csrf import ensure_csrf_cookie
from django.views.decorators.http import require_POST, require_GET
from django.http import JsonResponse

@ensure_csrf_cookie
def csrf(request):
    return JsonResponse({'message': 'CSRF cookie set'})

@require_POST
def testPost(request):
    print('ok')
    return JsonResponse({}, status=200)

@require_GET
def testGet(request):
    print('ok')
    return JsonResponse({}, status=200)