import { useContext } from "react";
import { StylesContext } from "./StylesContext";


const ToggleDark = () => {
    const { themes } = useContext(StylesContext)    
    return (
        <div 
            style={{
                border:`1px solid ${themes.darkTheme.backgroundColor}`,
                background:themes.darkTheme.backgroundColor,
                display:"flex",
                alignItems:"center",
                gap:"5px",
                height:"18px", 
                width:"fit-content", 
                fontSize:"12px"
            }}
        >
            <div
                style={{
                    background:themes.lightTheme.backgroundColor,
                    marginLeft:'2px',
                    height:'12px',
                    width:'12px',
                }}
            ></div>
            <div 
                style={{
                    color:themes.darkTheme.color,
                    marginLeft:'auto',
                    marginRight:'4px',
                }}
            >dark</div>
        </div>
    )
}



const ToggleLight = () => {
    const { themes } = useContext(StylesContext)    
    return (
        <div 
            style={{
                border:`1px solid ${themes.darkTheme.backgroundColor}`,
                background:themes.lightTheme.backgroundColor,
                // borderRadius:"10px",
                display:"flex",
                alignItems:"center",
                gap:"5px",
                height:"18px", 
                width:"fit-content", 
                fontSize:"12px", 
            }}
        >
            <div style={{
                color:themes.lightTheme.color,
                marginLeft:'4px',
            }}>light</div>
            <div
                style={{
                    background:themes.darkTheme.backgroundColor,
                    marginLeft:'auto',
                    marginRight:'2px',
                    height:'12px',
                    width:'12px',
                    // borderRadius:'50%',
                }}
            ></div>
        </div>
    )
}

export {ToggleDark,ToggleLight};