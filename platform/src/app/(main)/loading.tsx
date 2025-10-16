import { CircularProgress } from "@mui/material";

export default function ArcadiaLoading() {
    return (
        <div id="arcadia-loading" style={{ width: "100%", height: "50dvh", paddingTop: '5rem'}}>
            <div id="loading-container" 
                style={
                    { 
                        position: 'relative',
                        margin: 'auto', 
                        width: "50%",
                        display: 'flex',
                        justifyContent: 'center'
                    }
                }
            >
                <CircularProgress size={"200px"}/>
                <img 
                    style={{ 
                        width: '150px', 
                        height: '150px',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translateX(-50%) translateY(-50%)'
                    }} 
                    src="/global/logo/logo-solo-icon.png" 
                    alt="" 
                />
            </div>
        </div>
    )
}