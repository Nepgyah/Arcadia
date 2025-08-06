from django.db import models

class Manufacturer(models.Model):
    name=models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.name
    
class Part(models.Model):

    class Color(models.IntegerChoices):
        OTHER = 0, 'Other'
        BLACK = 1, 'Black'
        WHITE = 2, 'White'
        RED = 3, 'Red'
        BLUE = 4, 'Blue'
        YELLOW = 5, 'Yellow'
        GREEN = 6, 'Green'

    name=models.CharField(max_length=255)
    manufacturer=models.ForeignKey(Manufacturer, on_delete=models.SET_NULL, null=True, blank=True)
    color=models.IntegerField(choices=Color.choices, null=True, blank=True)
    msrp=models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)

    class Meta:
        abstract=True

    def __str__(self):
        return f'{self.name}'
    
class Socket(models.Model):
    name=models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.name
    
class Microarchitecture(models.Model):
    """
    Represents the family of cpus. Also known as codename.
    """
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class CPU(Part):
    socket_type=models.ForeignKey(Socket, on_delete=models.SET_NULL, null=True, blank=True)
    microarchitecture=models.ForeignKey(Microarchitecture, on_delete=models.SET_NULL, null=True, blank=True, help_text='Codename')
    core_count=models.IntegerField()
    thread_count=models.IntegerField()
    core_clock=models.FloatField(help_text='GHz')
    boost_clock=models.FloatField(help_text='GHz')
    l2_cache=models.IntegerField(null=True, blank=True, help_text='MB')
    l3_cache=models.IntegerField(null=True, blank=True, help_text='MB')
    tdp=models.IntegerField(help_text="Watts")
    max_temp=models.IntegerField(null=True, blank=True, help_text='Celcius')
    is_unlocked=models.BooleanField(help_text='Overclockable')
    has_graphics=models.BooleanField()

    def __str__(self):
        return self.name
    
class MemoryType(models.Model):
    """
    Represents the current DDRx version of memory
    """

    name=models.CharField(max_length=20, null=False, blank=False)

    def __str__(self):
        return self.name
    
class RAM(Part):
    memory_type=models.ForeignKey(MemoryType, on_delete=models.SET_NULL, null=True, blank=True)
    capacity=models.IntegerField(null=True, blank=True)
    modules=models.IntegerField(null=False, blank=False, default=1, help_text='Number of sticks/modules')
    speed=models.IntegerField(null=True, blank=True, help_text='MHz')

    def __str__(self):
        return self.name

class Chipset(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    
class Motherboard(Part):

    class FormFactor(models.IntegerChoices):
        MINI_ITX = 0, 'Mini-ITX'
        MICRO_ATX = 1, 'Micro-ATX'
        ATX = 2, 'ATX'
        E_ATX = 3, 'eATX'

    socket_type=models.ForeignKey(Socket, on_delete=models.SET_NULL, null=True, blank=True)
    form_factor=models.IntegerField(choices=FormFactor.choices, default=FormFactor.ATX, null=False, blank=False)
    chipset=models.ForeignKey(Chipset, on_delete=models.SET_NULL, null=True, blank=True)
    memory_type=models.ForeignKey(MemoryType, on_delete=models.SET_NULL, null=True, blank=True)
    memory_slots=models.IntegerField()
    max_memory=models.IntegerField()
    m2_slots=models.IntegerField()
    sata_slots=models.IntegerField()

    def __str__(self):
        return self.name

class GPUMemoryType(models.Model):
    name=models.CharField(max_length=20, null=False, blank=False)

    def __str__(self):
        return self.name
    
class GPU(Part):

    class SlotWidth(models.IntegerChoices):
        SINGLE = 1, 'Single-slot'
        DUAL = 2, 'Dual-slot'
        TRIPLE = 3, 'Triple-slot'
        QUADRUPLE = 4, 'Quadruple-slot'

    core_clock=models.IntegerField(help_text="MHz")
    boost_clock=models.IntegerField(help_text="MHz")
    vram=models.IntegerField()
    memory_type=models.ForeignKey(GPUMemoryType, on_delete=models.SET_NULL, null=True, blank=True)
    memory_clock=models.IntegerField(null=True, blank=True, help_text="MHz")
    memory_bus=models.IntegerField(null=True, blank=True, help_text="bits")
    length=models.IntegerField(null=True, blank=True, help_text='mm')
    tdp=models.IntegerField(null=True, blank=True, help_text="Watts")
    suggested_psu=models.IntegerField(null=True, blank=True, help_text="Watts")
    slot_width=models.IntegerField(choices=SlotWidth.choices, default=SlotWidth.DUAL)

    def __str__(self):
        return self.name