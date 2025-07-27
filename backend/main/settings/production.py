from .base import *;
import os
from dotenv import load_dotenv

load_dotenv(os.path.join(BASE_DIR, ".env.prod"))

SECRET_KEY = os.getenv("DJANGO_SECRET")

ALLOWED_HOSTS = [
    "arcadia-inky.vercel.app",
    "faint-jeanne-team-d2x-e4d18676.koyeb.app/"
]

CORS_ALLOWED_ORIGINS = [
    "https://arcadia-inky.vercel.app"
]

CSRF_TRUSTED_ORIGINS = [
    "https://arcadia-inky.vercel.app"
]

CSRF_COOKIE_SAMESITE = "None"
CSRF_COOKIE_SECURE = True
SESSION_COOKIE_SECURE = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.getenv('DB_NAME'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_PASSWORD'),
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT', '5432'),
        'OPTIONS': {
            'sslmode': 'require',
        },
    }
}