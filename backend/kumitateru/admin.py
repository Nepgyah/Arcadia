from django.contrib import admin
from .models import (
    Socket,
    Microarchitecture,
    CPU,
    MemoryType,
    RAM,
    Motherboard,
    GPU,
    Manufacturer,
    Chipset,
    GPUMemoryType
)
# Register your models here.

admin.site.register(Manufacturer)
admin.site.register(Socket)
admin.site.register(Microarchitecture)
admin.site.register(CPU)
admin.site.register(MemoryType)
admin.site.register(RAM)
admin.site.register(Motherboard)
admin.site.register(GPU)
admin.site.register(Chipset)
admin.site.register(GPUMemoryType)
