from .base import *;
import os
from dotenv import load_dotenv

load_dotenv(os.path.join(BASE_DIR, ".env.local"))

SECRET_KEY = os.getenv("DJANGO_SECRET")

DEBUG = True

ALLOWED_HOSTS = [
    "localhost",
    "127.0.0.1",
    "localhost:8000",
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",  # Next.js dev server
]

CSRF_TRUSTED_ORIGINS = [
    "http://localhost:3000",  # Next.js dev server
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT', '5432'),
    }
}