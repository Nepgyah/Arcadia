from django.db import models

class Talent(models.Model):
    first_name=models.CharField(max_length=150, blank=False)
    last_name=models.CharField(max_length=150, null=True, blank=True)
    bio=models.TextField(max_length=1000, default='A bio will be written at a later date.', blank=True)

class Character(models.Model):
    first_name=models.CharField(max_length=150, blank=False)
    last_name=models.CharField(max_length=150, null=True, blank=True)
    nickname=models.JSONField(default=list, blank=True)
    played_by=models.ForeignKey(Talent, on_delete=models.DO_NOTHING, null=True, blank=True)

class Company(models.Model):
    name=models.CharField(max_length=150, null=False, blank=False)
