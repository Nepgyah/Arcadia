'use client';

import { FormControl, IconButton, Input, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';


export default function UpdateTracker() {
    const [status, setStatus] = useState("")

    const handleStatus = (event: SelectChangeEvent) => {
        setStatus(event.target.value as string) 
    }
    return (
        <div className="update-form">
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Select
                    label="status"
                    defaultValue={""}
                >
                    <MenuItem value={""}>Select</MenuItem>
                    <MenuItem value={0}>Watching</MenuItem>
                    <MenuItem value={1}>Completed</MenuItem>
                    <MenuItem value={2}>On Hold</MenuItem>
                    <MenuItem value={3}>Plan To Watch</MenuItem>
                    <MenuItem value={4}>Dropped</MenuItem>
                </Select>
            </FormControl>
            <div className="episode">
                <FormControl>
                    <InputLabel>Episode</InputLabel>
                    <Input />
                </FormControl>
                <p>/</p>
                <p>13</p>
                <IconButton>
                    <AddIcon />
                </IconButton>
            </div>
            <FormControl >
                <InputLabel>Your Score</InputLabel>
                <Select
                    label="status"
                    defaultValue={""}
                >
                    <MenuItem value={""}>Select</MenuItem>
                    <MenuItem value={0}>Watching</MenuItem>
                    <MenuItem value={1}>Completed</MenuItem>
                    <MenuItem value={2}>On Hold</MenuItem>
                    <MenuItem value={3}>Plan To Watch</MenuItem>
                    <MenuItem value={4}>Dropped</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}