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

def team(request):

    ### TEMP ###
    leadership = [
        {
            'name': "Nepgyah",
            'position': "Founder & Lead Developer",
            'image' : 'leadership/me.png'
        },
        {
            'name': "Moanin",
            'position': "Co Founder",
            'image' : 'leadership/pyke.jpg'
        },
        {
            'name': "Himeko",
            'position': "Lead Innovation Office",
            'image' : 'leadership/himeko.jpg'
        },
        {
            'name': "Yukong",
            'position': "Logistics Director",
            'image' : 'leadership/yukong.jpg'
        },
        {
            'name': "Groza",
            'position': "Director Of Operations",
            'image' : 'leadership/groza.png'
        },
        {
            'name': "Harmless Wind",
            'position': "Senior Advisor",
            'image' : 'leadership/tommy-2.jpg'
        },
    ]

    context = {
        'leadership' : leadership
    }
    return render(request, 'public-site/company/team.html', context)

# Misc
def not_found(request):
    return render(request, 'misc/404.html')

def not_ready(request):
    return render(request, 'misc/not-ready.html')