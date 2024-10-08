from django.shortcuts import render, redirect

# Create your views here.
def login(request):
    print('logging in')
    return redirect('http://127.0.0.1:3000/')