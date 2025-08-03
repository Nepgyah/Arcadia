from rest_framework import serializers
from .models import (
    Part,
    CPU,
    RAM,
    Motherboard,
    GPU
)

class CPUSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SerializerMethodField()
    microarchitecture = serializers.SerializerMethodField()
    class Meta:
        model=CPU
        fields= [
            'name',
            'manufacturer',
            'msrp',
            'socket',
            'core_count',
            'thread_count',
            'core_clock',
            'boost_clock',
            'microarchitecture',
            'tdp'
        ]
    
    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
    def get_microarchitecture(self, obj):
        return obj.microarchitecture.name
    
class MotherboardSerializer(serializers.ModelSerializer):
    form_factor = serializers.SerializerMethodField()
    manufacturer = serializers.SerializerMethodField()
    socket = serializers.SerializerMethodField()

    class Meta:
        model=Motherboard
        fields= [
            'name',
            'manufacturer',
            'msrp',
            'socket',
            'form_factor',
            'memory_type',
            'memory_slots',
            'max_memory'
        ]

    def get_form_factor(self, obj):
        return obj.get_form_factor_display()

    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
    def get_socket(self, obj):
        return obj.socket.name
    
class GPUSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SerializerMethodField()

    class Meta:
        model=GPU
        fields= [
            'name',
            'manufacturer',
            'msrp',
            'vram',
            'memory_clock',
            'core_clock',
            'boost_clock',
            'length',
            'tdp'
        ]
    
    def get_manufacturer(self, obj):
        if (obj.manufacturer):
            return obj.manufacturer.name
        return None
    
class RAMSerializer(serializers.ModelSerializer):
    manufacturer = serializers.SerializerMethodField()
    
    class Meta:
        model=RAM
        fields= [
            'name',
            'manufacturer',
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
