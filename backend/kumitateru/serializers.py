from rest_framework import serializers
from .models import (
    Part,
    CPU,
    RAM,
    Motherboard,
    GPU,
    PSU,
    CPUCooler
)

class CPUSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SerializerMethodField()
    microarchitecture = serializers.SerializerMethodField()
    socket_type = serializers.SerializerMethodField()

    class Meta:
        model=CPU
        fields= [
            'name',
            'manufacturer',
            'msrp',
            'socket_type',
            'microarchitecture',
            'core_count',
            'thread_count',
            'core_clock',
            'boost_clock',
            'l2_cache',
            'l3_cache',
            'tdp',
            'max_temp',
            'is_unlocked',
            'has_graphics'
        ]
    
    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
    def get_microarchitecture(self, obj):
        return obj.microarchitecture.name
    
    def get_socket_type(self, obj):
        return obj.socket_type.name
    
class MotherboardSerializer(serializers.ModelSerializer):
    form_factor = serializers.SerializerMethodField()
    manufacturer = serializers.SerializerMethodField()
    socket_type = serializers.SerializerMethodField()
    memory_type = serializers.SerializerMethodField()

    class Meta:
        model=Motherboard
        fields= [
            'name',
            'manufacturer',
            'msrp',
            'socket_type',
            'form_factor',
            'memory_type',
            'memory_slots',
            'max_memory',
            'pcie_x16_slots',
            'pcie_x1_slots',
            'm2_slots',
            'sata_slots',
            'usb_2_headers',
            'usb_3_headers',
            'does_support_raid',
            'does_support_ecc',
            'does_support_multi_gpu',
            'does_support_ethernet',
        ]

    def get_form_factor(self, obj):
        return obj.get_form_factor_display()

    def get_memory_type(self, obj):
        return obj.memory_type.name
    
    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
    def get_socket_type(self, obj):
        return obj.socket_type.name
    
class GPUSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SerializerMethodField()

    class Meta:
        model=GPU
        fields= [
            'name',
            'manufacturer',
            'msrp',
            'core_clock',
            'boost_clock',
            'vram',
            'memory_type',
            'memory_clock',
            'memory_bus',
            'length',
            'tdp',
            'suggested_psu',
            'slot_width'
        ]
    
    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
class RAMSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SerializerMethodField()
    memory_type = serializers.SerializerMethodField()

    class Meta:
        model=RAM
        fields= [
            'name',
            'manufacturer',
            'color',
            'msrp',
            'memory_type',
            'capacity',
            'modules',
            'speed'
        ]

    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
    def get_memory_type(self, obj):
        return obj.memory_type.name

class PSUSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SerializerMethodField()
    efficiency = serializers.SerializerMethodField()
    type = serializers.SerializerMethodField()

    class Meta:
        model=PSU
        fields= [
            'name',
            'manufacturer',
            'color',
            'msrp',
            'wattage',
            'efficiency',
            'type',
            'is_modular',
            'has_zero_rpm',
            'weight',
            'length',
            'width',
            'height',
            'connector_8_pin_count',
            'connector_6_2_pin_count',
            'connector_6_pin_count',
            'connector_4_molex_count',
            'connector_sata_count'
        ]

        
    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
    def get_type(self, obj):
        return obj.get_type_display()

    def get_efficiency(self, obj):
        return obj.get_efficiency_display()
    
class CPUCoolerSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SerializerMethodField()
    type = serializers.SerializerMethodField()

    class Meta:
        model=CPUCooler
        fields = [
            'name',
            'manufacturer',
            'color',
            'msrp',
            'type',
            'height',
            'has_fans',
            'radiator_size'
        ]

    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
    def get_type(self, obj):
        return obj.get_type_display()