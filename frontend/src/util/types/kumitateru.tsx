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
    slot_width: string
}

export interface Motherboard extends Part {
    socket_type: string,
    form_factor: string,
    memory_type: string,
    memory_slots: number,
    max_memory: number
}

export interface RAM extends Part {
    memory_type: string,
    capacity: number,
    modules: number,
    speed: number
}