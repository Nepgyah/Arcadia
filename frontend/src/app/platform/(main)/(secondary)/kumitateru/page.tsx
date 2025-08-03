'use client';
import { apiGET } from "@/util/api/api"
import { Breadcrumbs, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import React from "react";
import PartDetailDialog from "./partDialogue";
import WIP from "@/components/platform/wip";
import PlusIcon from '@mui/icons-material/AddCircleOutline';

import '@/styles/platform/pages/kumitateru/kumitateru.scss';

export default function KumitateruHome() {

    const [cpus, setCPUs] = useState<any>();
    const [gpus, setGPUs] = useState<any>();
    const [motherboards, setMotherboards] = useState<any>();
    const [memory, setMemory] = useState<any>();

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
            <Breadcrumbs>
                <Typography>Kumitateru</Typography>
                <Typography>Home</Typography>
            </Breadcrumbs>
            <div id="page-miru-home" className="page-content row-gap row-gap--lg">
                <div id="row-one" className="layout-grid-2">
                    <div>
                        <h2>Your Builds</h2>
                        <div className="layout-grid-3">
                            <div className="build-card media-image align-content align-content--center">
                                <Tooltip placement="top" arrow title='Start a new build!'>
                                    <IconButton className="animation__hover-grow">
                                        <PlusIcon />
                                    </IconButton>
                                </Tooltip>
                                <p>Start a new build</p>
                            </div>
                            <div className="build-card media-image align-content align-content--center">
                                <WIP />
                            </div>
                            <div className="build-card media-image align-content align-content--center">
                                <WIP />
                            </div>
                        </div>
                    </div>
                    <div className="layout-grid-2">
                        <div>
                            <h2>CPUs</h2>
                            <PartList list={cpus} handleOpenDialog={handleOpenDialog} type="CPU"/>
                        </div>
                        <div>
                            <h2>GPUs</h2>
                            <PartList list={gpus} handleOpenDialog={handleOpenDialog} type="GPU" />
                        </div>
                    </div>
                </div>
                <div id="row-two" className="layout-grid-4">
                    <div>
                        <h2>Motherboards</h2>
                        <PartList list={motherboards} handleOpenDialog={handleOpenDialog} type="Motherboard"/>
                    </div>
                    <div>
                        <h2>RAM</h2>
                        <PartList list={memory} handleOpenDialog={handleOpenDialog} type="RAM" />
                    </div>
                    <div>
                        <h2>CPU Coolers</h2>
                        <WIP />
                    </div>
                    <div>
                        <h2>Power Supply</h2>
                        <WIP />
                    </div>
                </div>
                <div id="row-three" className="layout-grid-4">
                    <div>
                        <h2>Storage</h2>
                        <WIP />
                    </div>
                    <div>
                        <h2>Cases</h2>
                        <WIP />
                    </div>
                    <div>
                        <h2>Monitors</h2>
                        <WIP />
                    </div>
                    <div>
                        <h2>Mouse / Keyboard</h2>
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
        list: any,
        type: string,
        handleOpenDialog: (part: any, type: any) => void
    }) {
    return (
        <div className="part-list">
            {
                list?
                    <ul>
                    {
                        list.map((entry: any, idx: number) => (
                            <li key={entry.name} className="clickable" onClick={() => handleOpenDialog(entry, type)}>{entry.name}</li>
                        ))
                    }
                    </ul>
                :
                <p>Loading</p>
            }
            
        </div>
    )
}