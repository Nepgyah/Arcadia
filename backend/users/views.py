from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from .forms import CreateUserForm, LoginForm

from django.contrib.auth.decorators import login_required

# Create your views here.
def loginPage(request):

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
    logout(request)
    return redirect('login')

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