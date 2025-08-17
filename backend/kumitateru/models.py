from django.db import models

class Manufacturer(models.Model):
    name=models.CharField(max_length=100, null=False, blank=False)

    def __str__(self):
        return self.name
    
class Part(models.Model):

    class Color(models.IntegerChoices):
        OTHER = 0, 'Other'
        BLACK = 1, 'Black'
        SILVER = 2, 'Silver'
        WHITE = 3, 'White'
        RED = 4, 'Red'
        BLUE = 5, 'Blue'
        YELLOW = 6, 'Yellow'
        GREEN = 7, 'Green'

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
    has_heat_spreader=models.BooleanField(default=False)
    tested_voltage=models.FloatField(default=1.00)

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
    memory_slots=models.IntegerField(default=1)
    max_memory=models.IntegerField(default=1, help_text='GB')
    pcie_x16_slots=models.IntegerField(default=0)
    pcie_x1_slots=models.IntegerField(default=0)
    m2_slots=models.IntegerField(default=0)
    sata_slots=models.IntegerField(default=0)
    usb_2_headers=models.IntegerField(default=0)
    usb_3_headers=models.IntegerField(default=0)
    does_support_raid=models.BooleanField(default=False)
    does_support_ecc=models.BooleanField(default=False)
    does_support_multi_gpu=models.BooleanField(default=False)
    does_support_ethernet=models.BooleanField(default=False)

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
    dvi_port_count=models.IntegerField(default=0)
    hdmi_port_count=models.IntegerField(default=0)
    dp_port_count=models.IntegerField(default=0)
    
class PSU(Part):

    class Efficiency(models.IntegerChoices):
        BRONZE = 1, 'Bronze'
        SILVER = 2, 'Silver'
        GOLD = 3, 'Gold'
        PLATINUM = 4, 'Platinum'

    class PSUType(models.IntegerChoices):
        ATX = 1, 'ATX'
        SFX = 2, 'SFX'

    wattage = models.IntegerField()
    efficiency = models.IntegerField(choices=Efficiency.choices, default=Efficiency.BRONZE, help_text='Defaults to bronze')
    type = models.IntegerField(choices=PSUType.choices, default=PSUType.ATX, help_text='Defaults to ATX')
    is_modular = models.BooleanField()
    has_zero_rpm = models.BooleanField()
    weight = models.FloatField(help_text='kg', null=True, blank=True)
    length = models.IntegerField(null=True, blank=True, help_text='mm')
    width = models.IntegerField(null=True, blank=True, help_text='mm')
    height = models.IntegerField(null=True, blank=True, help_text='mm')
    
    # Motherboard
    connector_atx_24_pin_count = models.BooleanField(default=0, help_text='Always included for motherboard power')
    connector_eps_8_pin_count = models.IntegerField(default=0, help_text='8-pin EPS (CPU power) connectors')
    connector_eps_4_pin_count = models.IntegerField(default=0, help_text='4-pin EPS (CPU power) connectors')

    # GPU
    connector_pcie_6_pin_count = models.IntegerField(default=0, help_text='6-pin PCIe connectors')
    connector_pcie_6_2_pin_count = models.IntegerField(default=0, help_text='6+2-pin PCIe connectors')
    connector_pcie_8_pin_count = models.IntegerField(default=0, help_text='Dedicated 8-pin PCIe connectors (rare)')
    connector_12vhpwr_count = models.IntegerField(default=0, help_text='12VHPWR 16-pin connectors for PCIe Gen 5 GPUs')

    # Drives & Peripherals
    connector_sata_count = models.IntegerField(default=0, help_text='SATA power connectors')
    connector_molex_4_pin_count = models.IntegerField(default=0, help_text='4-pin Molex connectors')
    connector_floppy_count = models.IntegerField(default=0, help_text='Floppy/Berg connectors (legacy)')

class CPUCooler(Part):
    
    class CoolerType(models.IntegerChoices):
        AIO = 0, "Water - AIO"
        SINGLE = 1, 'Air - Single Tower'
        DUAL = 2, 'Air - Dual Tower'
    
    supported_sockets = models.ManyToManyField(Socket, related_name='compatible_coolers')
    type = models.IntegerField(choices=CoolerType.choices, default=CoolerType.SINGLE)
    height = models.IntegerField(null=True, blank=True, help_text='mm')
    has_fans = models.BooleanField()
    radiator_size = models.IntegerField(null=True, blank=True, help_text='mm')
