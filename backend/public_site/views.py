from django.shortcuts import render

# Create your views here.
def homepage(request):
    return render(request, "public-site/homepage.html")

# Apps

def miruAbout(request):
    return render(request, 'app/miru.html')

# Company Pages
def aboutUs(request):
    return render(request, 'public-site/company/about-us.html')

# Misc
def not_found(request):
    return render(request, 'misc/404.html')

def not_ready(request):
    return render(request, 'misc/not-ready.html')