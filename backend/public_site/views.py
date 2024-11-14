from django.shortcuts import render

# Create your views here.
def homepage(request):
    return render(request, "public-site/homepage.html")

def not_found(request):
    return render(request, 'misc/404.html')