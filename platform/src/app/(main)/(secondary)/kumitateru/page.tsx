'use client';
import { apiGET } from "@/util/api/api"
import { Breadcrumbs, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import React from "react";
import PartDetailDialog from "./partDialogue";
import WIP from "@/components/wip";
import PlusIcon from '@mui/icons-material/AddCircleOutline';
import ArcHeader from "@/components/arcHeader";
import BreadcrumbSetter from "@/components/breadcrumb/setBreadcrumbs";

export default function KumitateruHome() {

    const [cpus, setCPUs] = useState<any>();
    const [gpus, setGPUs] = useState<any>();
    const [motherboards, setMotherboards] = useState<any>();
    const [memory, setMemory] = useState<any>();
    const [psu, setPsu] = useState<any>()

    const [currentPart, setCurrentPart] = useState(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [partType, setPartType] = useState<any>('CPU')

    useEffect(() => {
        apiGET<any>('kumitateru/home/')
        .then((res) => {
            setCPUs(res.cpus)
            setGPUs(res.gpus)
            setMotherboards(res.motherboards)
            setMemory(res.ram)
            setPsu(res.psu)
        })
    }, [])

    const handleOpenDialog = (selectedPart : any, partType: any) => {
        setCurrentPart(selectedPart);
        setIsDialogOpen(true);
        setPartType(partType)
    }
    return (
        <React.Fragment>
            <PartDetailDialog entry={currentPart} partType={partType} isOpen={isDialogOpen} handleClose={() => setIsDialogOpen(false)}/>
            <BreadcrumbSetter breadcrumbs={['Kumitateru', 'Home']} />
            <div id="page-kumitateru-home" className="flex-row flex-row--gap-md">
                <div id="row-one" className="grid grid--2-col">
                    <div>
                        <ArcHeader title="Your Builds" />
                        <WIP />
                        {/* <div className="">
                            <div className="">
                                <Tooltip placement="top" arrow title='Start a new build! (Feature To Be Added Later)'>
                                    <IconButton className="animation__hover-grow">
                                        <PlusIcon />
                                    </IconButton>
                                </Tooltip>
                                <p>Start a new build</p>
                            </div>
                            <div className="">
                                <WIP />
                            </div>
                            <div className="">
                                <WIP />
                            </div>
                        </div> */}
                    </div>
                    <div className="grid grid--2-col">
                        <div>
                            <ArcHeader title="CPUs" />
                            <PartList list={cpus} handleOpenDialog={handleOpenDialog} type="CPU"/>
                        </div>
                        <div>
                            <ArcHeader title="GPUs" />
                            <PartList list={gpus} handleOpenDialog={handleOpenDialog} type="GPU" />
                        </div>
                    </div>
                </div>
                <div id="row-two" className="grid grid--4-col">
                    <div>
                        <ArcHeader title="Motherboards" />
                        <PartList list={motherboards} handleOpenDialog={handleOpenDialog} type="Motherboard"/>
                    </div>
                    <div>
                        <ArcHeader title="RAM" />
                        <PartList list={memory} handleOpenDialog={handleOpenDialog} type="RAM" />
                    </div>
                    <div>
                        <ArcHeader title="CPU Coolers" />
                        <WIP />
                    </div>
                    <div>
                        <ArcHeader title="Power Supplies" />
                        <PartList list={psu} handleOpenDialog={handleOpenDialog} type="PSU" />
                    </div>
                </div>
                <div id="row-three" className="grid grid--4-col">
                    <div>
                        <ArcHeader title="Storage" />
                        <WIP />
                    </div>
                    <div>
                        <ArcHeader title="Cases" />
                        <WIP />
                    </div>
                    <div>
                        <ArcHeader title="Monitors" />
                        <WIP />
                    </div>
                    <div>
                        <ArcHeader title="Mouse / Keyboards" />
                        <WIP />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

function PartList(
    {
        list, 
        type,
        handleOpenDialog
    } : {
        list: any[],
        type: string,
        handleOpenDialog: (part: any, type: any) => void
    }) {
    return (
        <div className="part-list">
            {
                list?
                    list.length === 0 ?
                        <p>No parts found</p>
                    :
                    <ul>
                    {
                        list.map((entry: any, idx: number) => (
                            <li key={entry.name}>
                                <span
                                    onClick={() => handleOpenDialog(entry, type)}
                                    className="clickable">{entry.name}
                                </span>
                            </li>
                        ))
                    }
                    </ul>
                :
                <p>Loading</p>
            }
            
        </div>
    )
}