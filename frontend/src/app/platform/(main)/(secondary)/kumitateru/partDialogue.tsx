import { Dialog, DialogContent, DialogTitle } from "@mui/material"

import '@/styles/platform/components/partDetailDialog.scss';
import InfoItem from "@/components/platform/infoItem";
import { CPU, GPU } from "@/util/types/kumitateru";

export default function PartDetailDialog(
    {
        entry,
        partType,
        isOpen,
        handleClose
    } : {
        entry: any,
        partType: 'CPU' | 'GPU' | 'RAM' | 'Motherboard',
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
                        <h3>Summary</h3>
                        <div className="row-gap row-gap--xs">
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
                                <p>Ram</p>
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
            <div className="row-gap row-gap--xs">
                <h3>Power</h3>
                <InfoItem label="TDP" value={gpu.tdp} unit="Watts"/>
                    <InfoItem label="Suggested PSU" value={gpu.suggested_psu} unit="Watts"/>
            </div>
            <div className="row-gap row-gap--xs">
                <h3>Miscellaneous</h3>
                <InfoItem label="Length" value={gpu.length} unit="mm"/>
                <InfoItem label="Slot Width" value={gpu.slot_width} />
            </div>
        </>
    )
}

function MotherboardDetails({mobo} : {mobo: any}) {
    return (
        <>
            <h3>Specification</h3>
            <div className="layout-grid-2">
                <div className="row-gap row-gap--xs">
                    <InfoItem label="Form Factor" value={mobo.form_factor} />
                    <InfoItem label="Socket" value={mobo.socket} />
                </div>
                <div className="row-gap row-gap--xs">
                    <InfoItem label="Memory Type" value={mobo.memory_type} />
                    <InfoItem label="Memory Slots" value={mobo.memory_slots} />
                    <InfoItem label="Max Memory" value={mobo.max_memory} unit="GB" />
                </div>
            </div>
            <h3>Miscellaneous</h3>
        </>
    )
}