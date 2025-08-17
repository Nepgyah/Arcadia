import { Dialog, DialogContent, DialogTitle } from "@mui/material"

import '@/styles/platform/components/partDetailDialog.scss';
import InfoItem from "@/components/platform/infoItem";
import { CPU, GPU, Motherboard, PSU, RAM } from "@/util/types/kumitateru";

export default function PartDetailDialog(
    {
        entry,
        partType,
        isOpen,
        handleClose
    } : {
        entry: any,
        partType: 'CPU' | 'GPU' | 'RAM' | 'Motherboard' | 'PSU',
        isOpen: boolean,
        handleClose: () => void
    }
) {
    return (
        <Dialog 
            id="kumitateru-part-dialog" 
            open={isOpen} 
            onClose={handleClose}
            maxWidth='md'
            fullWidth
            >
            <DialogTitle>{entry?.name}</DialogTitle>
            <DialogContent>
                <div>
                    <div className="left row-gap row-gap--md">
                        <div className="row-gap row-gap--xs">
                            <h3>Summary</h3>
                            <InfoItem label="Manufacturer" value={entry?.manufacturer}/>
                            <InfoItem label="Color" value={entry?.color ? entry.color : 'N/A'} />
                            <InfoItem label="Msrp" value={entry?.msrp} unit="$" />
                        </div>
                    </div>
                    <div className="right row-gap row-gap--md">
                        {
                            partType == 'CPU' ?
                                <CPUDetails cpu={entry} />
                            : 
                            partType == 'GPU' ?
                                <GPUDetails gpu={entry} />
                            :
                            partType == 'Motherboard' ?
                                <MotherboardDetails mobo={entry} />
                            :
                            partType == 'RAM' ?
                                <RamDetails ram={entry} />
                            :
                            partType == 'PSU' ?
                                <PSUDetails psu={entry} />
                            :
                                'Error loading part details'
                        }
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

function CPUDetails({cpu} : {cpu: CPU}) {
    return (
        <>
            <h3>Performance</h3>
            <div className="layout-grid-2">
                <div className="row-gap row-gap--xs">
                    <InfoItem label="Core Count" value={cpu.core_count} unit="Cores"/>
                    <InfoItem label="Thread Count" value={cpu.thread_count} unit="Threads"/>
                    <InfoItem label="Socket Type" value={cpu.socket_type} />
                    <InfoItem label="L2 Cache" value={cpu.l2_cache} unit="mb"/>
                    <InfoItem label="L3 Cache" value={cpu.l3_cache} unit="mb"/>
                </div>
                <div className="row-gap row-gap--xs">
                    <InfoItem label="Core Clock" value={cpu.boost_clock} unit="GHz"/>
                    <InfoItem label="Boost Clock" value={cpu.boost_clock} unit="GHz"/>
                </div>
            </div>
            <div className="row-gap row-gap--xs">
                <h3>Power</h3>
                <InfoItem label="TDP" value={cpu.tdp} unit="Watts" />
                <InfoItem label="Max Temp" value={cpu.max_temp} unit="C" />
            </div>
            <div className="row-gap row-gap--xs">
                <h3>Miscellaneous</h3>
                <InfoItem label="Code Name" value={cpu.microarchitecture} />
                <InfoItem label="Unlocked" value={cpu.is_unlocked === true ? 'Yes' : 'No'} />
                <InfoItem label="Graphics" value={cpu.has_graphics === true ? 'Yes' : 'Descrete Graphics Required'} />
            </div>
        </>
    )
}

function GPUDetails({gpu} : {gpu: GPU}) {
    return (
        <>
            <h3>Specification</h3>
            <div className="layout-grid-2">
                <div className="row-gap row-gap--xs">
                    <InfoItem label="Core Clock" value={gpu.core_clock} unit="MHz"/>
                    <InfoItem label="Boost Clock" value={gpu.boost_clock} unit="MHz"/>

                </div>
                <div className="row-gap row-gap--xs">
                    <InfoItem label="VRAM" value={gpu.vram} unit="GB"/>
                    <InfoItem label="Memory Clock" value={gpu.memory_clock} unit="GB/s"/>
                </div>
            </div>
            <div className="layout-grid-2">
                <div className="row-gap row-gap--xs">
                    <h3>Connection</h3>
                    <InfoItem label="Display Ports" value={gpu.dp_port_count} />
                    <InfoItem label="HDMI" value={gpu.hdmi_port_count} />
                    <InfoItem label="DVI" value={gpu.dvi_port_count} />
                </div>
                <div className="row-gap row-gap--xs">
                    <h3>Dimensions</h3>
                    <InfoItem label="Length" value={gpu.length} unit="mm"/>
                    <InfoItem label="Slot Width" value={gpu.slot_width} />
                </div>
            </div>
        </>
    )
}

function MotherboardDetails({mobo} : {mobo: Motherboard}) {
    return (
        <>
            <div className="row-gap row-gap--xs">
                <h3>Specification</h3>
                <div className="layout-grid-2">
                    <div className="row-gap row-gap--xs">
                        <InfoItem label="Form Factor" value={mobo.form_factor} />
                        <InfoItem label="Socket" value={mobo.socket_type} />
                    </div>
                    <div className="row-gap row-gap--xs">
                        <InfoItem label="Memory Type" value={mobo.memory_type} />
                        <InfoItem label="Memory Slots" value={mobo.memory_slots} />
                        <InfoItem label="Max Memory" value={mobo.max_memory} unit="GB" />
                    </div>
                </div>
            </div>
            <div className="row-gap row-gap--xs">
                <h3>Connections</h3>
                <div className="layout-grid-2">
                    <div className="row-gap row-gap--xs">
                        <InfoItem label="PCIE x16 Slots" value={mobo.pcie_x16_slots} />
                        <InfoItem label="PCIE x1 Slots" value={mobo.pcie_x1_slots} />
                        <InfoItem label="M.2 Slots" value={mobo.m2_slots} />
                        <InfoItem label="SATA Ports" value={mobo.sata_slots} />
                    </div>
                    <div className="row-gap row-gap--xs">
                        <InfoItem label="USB 2.X Headers" value={mobo.usb_2_headers} />
                        <InfoItem label="USB 3.x Headers" value={mobo.usb_3_headers} />
                    </div>
                </div>
                
            </div>
             <div className="row-gap row-gap--xs">
                <h3>Support</h3>
                <InfoItem label="RAID Support" value={mobo.does_support_raid ? 'Yes' : 'No'} />
                <InfoItem label="Multi GPU Support" value={mobo.does_support_multi_gpu ? 'Yes' : 'No'} />
                <InfoItem label="ECC Suport" value={mobo.does_support_ecc ? 'Yes' : 'No'} />
                <InfoItem label="Ethernet Connection" value={mobo.does_support_ethernet ? 'Yes' : 'No'} />
            </div>
        </>
    )
}

function RamDetails({ram} : {ram: RAM}) {
    return (
        <>
            <h3>Specification</h3>
            <div className="layout-grid-2">
                <div className="row-gap row-gap--xs">
                    <InfoItem label="Kit" value={ram.capacity + ' X ' + ram.modules} unit="GB" />
                    <InfoItem label="Speed" value={ram.speed} unit="MHz" />
                    <InfoItem label="Type" value={ram.memory_type} />
                </div>
                <div className="row-gap row-gap--xs">
        
                </div>
            </div>
        </>
    )
}

function PSUDetails({psu} : {psu: PSU}) {
    return (
        <>
            <div className="layout-grid-2">
                <div className="row-gap row-gap--xs">
                    <h3>Specification</h3>  
                    <InfoItem label="Wattage" value={psu.wattage} unit="Watts" />
                    <InfoItem label="80 Watt Efficient" value={psu.efficiency} />
                    <InfoItem label="Type" value={psu.type} />
                </div>
                <div className="row-gap row-gap--xs">
                    <h3>Customization</h3>  
                    <InfoItem label="Modular" value={psu.is_modular ? 'Yes' : 'No'} />
                    <InfoItem label="Zero RPM" value={psu.has_zero_rpm ? 'Yes' : 'No'} />
                </div>
            </div>
            <div className="row-gap row-gap--xs">
                <h3>Cables</h3>
                <div className="layout-grid-2">
                    <div className="row-gap row-gap--xs">
                        <InfoItem label="ATX 24 Pin" value={psu.connector_atx_24_pin_count ? '1' : '0'} />
                        <InfoItem label="EPS 8 Pin" value={psu.connector_eps_8_pin_count} />
                        <InfoItem label="EPS 4 Pin" value={psu.connector_eps_8_pin_count} />
                        <InfoItem label="PCIE 6 Pin" value={psu.connector_pcie_6_pin_count} />
                        <InfoItem label="PCIE 6 + 2 Pin" value={psu.connector_pcie_6_2_pin_count} />
                        <InfoItem label="PCIE 8 Pin" value={psu.connector_pcie_8_pin_count} />
                        <InfoItem label="12vhpwr" value={psu.connector_12vhpwr_count} />
                    </div>
                    <div className="row-gap row-gap--xs">
                        <InfoItem label="Molex Connectors" value={psu.connector_molex_4_pin_count} />
                        <InfoItem label="Sata Connectors" value={psu.connector_sata_count} />
                        <InfoItem label="Floppy Connectors" value={psu.connector_floppy_count} />
                    </div>
                </div>
            </div>
            <div className="row-gap row-gap--xs">
                <h3>Miscellaneous</h3>
                <InfoItem label="Dimensions" value={(psu.length ? psu.length : 'N/A') + ' mm X ' + (psu.width ? psu.width : 'N/A') + ' mm X ' + (psu.height ? psu.height : 'N/A') + ' mm'} />
                <InfoItem label="Weight" value={psu.weight} unit="kg"/>
            </div>
        </>
    )
}