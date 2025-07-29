from django.db import models
from shared.models import Company

class Part(models.Model):

    class Color(models.IntegerChoices):
        BLACK = 0, 'Black'
        WHITE = 1, 'White'
        RED = 2, 'Red'
        BLUE = 3, 'Blue'
        YELLOW = 4, 'Yellow'
        GREEN = 5, 'Green'

    name=models.CharField(max_length=255, null=False, blank=False)
    maker=models.ForeignKey(Company, on_delete=models.SET_NULL, null=True, blank=True)
    color=models.IntegerField(choices=Color.choices, null=True, blank=True)
    msrp=models.FloatField(null=True, blank=True)

    def __str__(self):
        return f'{self.name}'
    
class Socket(models.Model):
    name=models.CharField(max_length=100, null=False, blank=False)

class Microarchitecture(models.Model):
    name = models.CharField(max_length=100)

class CPU(Part):
    socket=models.ForeignKey(Socket, on_delete=models.SET_NULL, null=False, blank=False)
    core_count=models.IntegerField(null=True, blank=True)
    core_clock=models.IntegerField(null=True, blank=True, help_text='MHz')
    boost_clock=models.IntegerField(null=True, blank=True)
    microarchitecture=models.ForeignKey(Microarchitecture, on_delete=models.SET_NULL, null=True, blank=True)
    tdp=models.IntegerField(null=True, blank=True, help_text="Watts")

class MemoryType(models.Model):
    name=models.CharField(max_length=20, null=False, blank=False)

class RAM(Part):
    memory_type=models.ForeignKey(MemoryType, on_delete=models.SET_NULL, null=False, blank=False)
    speed=models.IntegerField(null=True, blank=True, help_text='MHz')

class Motherboard(Part):

    class FormFactor(models.IntegerChoices):
        MINI_ITX = 0, 'Mini-ITX'
        MICRO_ATX = 1, 'Micro-ATX'
        ATX = 2, 'ATX'
        E_ATX = 3, 'eATX'

    socket=models.ForeignKey(Socket, on_delete=models.SET_NULL, null=True, blank=False)
    form_factor=models.IntegerField(choices=FormFactor.choices, default=FormFactor.ATX, null=False, blank=False)
    memory_type=models.ForeignKey(MemoryType, on_delete=models.SET_NULL, null=True, blank=False)
    memory_slots=models.IntegerField(null=True, blank=True)
    memory_max=models.IntegerField(null=True, blank=True)

class GPUChipset(models.Model):
    name=models.CharField(max_length=50, null=False, blank=False)

class GPU(Part):

    class FormFactor(models.IntegerChoices):
        MINI_ITX = 0, 'Mini-ITX'
        MICRO_ATX = 1, 'Micro-ATX'
        ATX = 2, 'ATX'
        E_ATX = 3, 'eATX'

    vram=models.IntegerChoices(null=True, blank=True)
    memory=models.IntegerField(null=True, blank=True)
    core_clock=models.IntegerField(null=True, blank=True, help_text="GHz")
    boost_clock=models.IntegerField(null=True, blank=True, help_text="GHz")
    length=models.IntegerField(null=True, blank=True)
    tdp=models.IntegerField(null=True, blank=True, help_text="Watts")

