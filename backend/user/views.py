from django.shortcuts import render

# Create your views here.
from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth import authenticate, login, logout
from .forms import CreateUserForm, LoginForm
from django.contrib.auth.decorators import login_required

# Authentication - Important for access to platform frontend
def checkAuthentication(request):
    return JsonResponse({'authenticated': request.user.is_authenticated})

# Create your views here.
def loginPage(request):

    print(request.user)
    ## Auto redirect if already logged in
    if request.user.is_authenticated:
        return redirect('http://127.0.0.1:3000/')
    
    form = LoginForm
    context = {
        'form': form
    }
    
    if request.method == 'POST':
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('http://127.0.0.1:3000/')
        else:
            print("Invalid login")
    return render(request, 'account/login.html', context)

def logoutUser(request):
    print("Call to logout recieved!")
    logout(request)
    return JsonResponse({}, status=200)

def register(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        
    context = {
        'form' : form
    }
    return render(request, 'account/register.html', context)