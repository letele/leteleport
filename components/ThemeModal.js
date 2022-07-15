import { useContext } from "react";
import { VscChromeClose,VscTriangleDown,VscTriangleUp,VscSymbolColor } from "react-icons/vsc";
import { useModal } from "../hooks";
import { StylesContext } from "./StylesContext";
import {ToggleDark,ToggleLight} from "./ToggleSwitch";


const ThemeModal = () => {
    const {
        theme,themes,checked, setChecked,fonts,font,
        setFont,setTheme,themeModal,setThemeModal,
        navListStyles,
        backgroundSectionColor
    } =useContext(StylesContext)

    const {ref,toggled,setToggled,modal} = useModal()

    const activeFont = Object.keys(fonts).find(i=>fonts[i]===font)

    const otherFonts = Object.keys(fonts).filter(i => i!==activeFont)

    const selectedTheme = themes[checked?'darkTheme':'lightTheme'] 
    const handleClick = () => {
        setChecked(!checked);
        // console.log(selectedTheme)
    }
    const handleSelect = (i) => {
        setToggled(false)
        setFont(fonts[i])
        // console.log(selectedTheme)
    }
    const handleApply = () =>{
        setTheme(selectedTheme)
        setThemeModal(false)
    }
    
    return ( themeModal &&
        <div id='theme-modal'>
            <div id="theme-form" 
                style={{
                    ...navListStyles,
                    ...theme,
                }}
            >            
                <div id="form-header" className="flex">
                    <VscSymbolColor />
                    <VscChromeClose onClick={() => setThemeModal(false)}/>
                </div>
                
                <div id="form-section" style={backgroundSectionColor}>
                    <div id="font" className="flex row">
                        <div>Font <span>:</span></div>
                        <div id='select' ref={ref} style={backgroundSectionColor}>
                            <div 
                                id="title" 
                                className="flex"
                                style={{border:navListStyles.border}}
                                onClick={() => setToggled(!toggled)}
                            >
                                <span>{activeFont}</span>
                                
                                {toggled? 
                                    <VscTriangleUp />:
                                    <VscTriangleDown />
                                }
                              
                            </div>
                            {toggled && <div 
                                id="options" 
                                style={{
                                    ...backgroundSectionColor,
                                    border:navListStyles.border,
                                    borderTop:"none"
                                }}
                            >
                                {otherFonts.map(i => 
                                <div 
                                    key={i} 
                                    onClick={() => handleSelect(i)}
                                >{i}</div> )}
                            </div>}
                        </div>
                    </div>

                    <div id="theme" className=" flex row">
                        <div>Theme <span>:</span></div>
                        {checked ? 
                            <div onClick={() => handleClick()}><ToggleDark /></div>
                            : 
                            <div onClick={() => handleClick()}><ToggleLight /></div>
                        }
                    </div>
                </div>
                
                <div id="form-footer" className="flex" >
                    <button 
                        id="btn-apply" 
                        onClick={handleApply}
                        style={{
                            ...backgroundSectionColor,
                            color:theme.color
                        }}
                    >Apply</button>
                    <button 
                        id="btn-cancel" 
                        onClick={() => setThemeModal(false)}
                        style={{
                            ...backgroundSectionColor,
                            color:theme.color
                        }}
                    >Cancel</button>
                </div>

            </div>                
        </div>
     );
}
 
export default ThemeModal;