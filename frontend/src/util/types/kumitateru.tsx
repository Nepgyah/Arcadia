interface Part {
    name: string,
    manufacturer: string,
    color: string,
    msrp: number
}

export interface CPU extends Part {
    socket_type: string,
    microarchitecture: string,
    core_count: number,
    thread_count: number,
    core_clock: number,
    boost_clock: number,
    l2_cache: number,
    l3_cache: number,
    tdp: number,
    max_temp: number,
    is_unlocked: boolean,
    has_graphics: boolean
}

export interface GPU extends Part {
    core_clock: number,
    boost_clock: number,
    vram: number,
    memory_type: string,
    memory_clock: number,
    memory_bus: number,
    length: number,
    tdp: number,
    suggested_psu: number,
    slot_width: string,
    dvi_port_count: number,
    hdmi_port_count: number,
    dp_port_count: number
}

export interface Motherboard extends Part {
    socket_type: string,
    form_factor: string,
    chipset: string,
    memory_type: string,
    memory_slots: number,
    max_memory: number,
    pcie_x16_slots: number,
    pcie_x1_slots: number,
    m2_slots: number,
    sata_slots: number,
    usb_2_headers: number,
    usb_3_headers: number,
    does_support_raid: boolean,
    does_support_ecc: boolean,
    does_support_multi_gpu: boolean,
    does_support_ethernet: boolean,
}

export interface RAM extends Part {
    memory_type: string,
    capacity: number,
    modules: number,
    speed: number
}

export interface PSU extends Part {
    wattage: number,
    efficiency: string,
    type: string,
    is_modular: boolean,
    has_zero_rpm: boolean,
    weight: number,
    length: number,
    width: number,
    height: number,
    connector_atx_24_pin_count: boolean,
    connector_eps_8_pin_count: number,
    connector_eps_4_pin_count: number,
    connector_pcie_6_pin_count: number,
    connector_pcie_6_2_pin_count: number,
    connector_pcie_8_pin_count: number,
    connector_12vhpwr_count: number,
    connector_sata_count: number,
    connector_molex_4_pin_count: number,
    connector_floppy_count: number,
}

export interface CPUCooler extends Part {
    type: string,
    height: number,
    has_fans: boolean,
    radiator_size: number
}