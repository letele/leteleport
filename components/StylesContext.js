import { createContext, useState } from "react";

export const StylesContext = createContext();

export const withStylesContext = Component => {
    const WrappedComp = props => {
      
        const [darkColor,lightColor] = ["#3b3b3b", "#ddd"]
        const [lightBackgoround,darkBackgoround] = ["#ececec","#354c5f"]       
        const darkBackgoroundSection = "#3c566b"       
        const lightBackgoroundSection = "#f8f8f8"       
    
        const fonts = {
            Arial : "Arial,Helvetica,sans-serif",
            Century : "'Century Gothic',sans-serif",
            Comic : "'Comic Sans MS',cursive",
            Courier:"'Courier New',Courier, monospace",
            Georgia : "Georgia, erif",
            Times:"'Times New Roman', Times, serif",
            Trebuchet:"'Trebuchet MS', Helvetica, sans-serif"
        }


        const [font, setFont] = useState(fonts['Georgia'])

        const [checked, setChecked] = useState(false)

        const darkTheme = {
            backgroundColor: darkBackgoround,
            color:lightColor,
            fontFamily:font
        }

        const lightTheme = {
            backgroundColor: lightBackgoround,
            color:darkColor,
            fontFamily:font
        }

        const themes = {
            darkTheme, lightTheme
        }
        
        const [theme, setTheme] = useState(lightTheme)
        const [themeModal, setThemeModal] = useState(false)

       
        const backgroundSectionColor =  {
            backgroundColor:theme.backgroundColor=== darkBackgoround?
            darkBackgoroundSection : lightBackgoroundSection
        }

         const lightListStyles = {
            backgroundColor:lightBackgoroundSection,
            border:"1px solid #8b8b8b",
            boxShadow: "#8b8b8b 0.15em 0.15em 0.12em"
        }
        
        const darkListStyles = {
            backgroundColor:darkBackgoroundSection,
            border:`1px solid #2b363f`,
            boxShadow: "#2b363f 0.15em 0.15em 0.12em"
        }
        const navListStyles = theme.color===darkColor?
        lightListStyles : darkListStyles 

        
        const children ={
            theme, setTheme,
            darkTheme,lightTheme,
            backgroundSectionColor,
            fonts,font, setFont,
            themes,checked, setChecked,
            themeModal, setThemeModal,
            navListStyles
        }
        
        return(
            <StylesContext.Provider value={{...children}} >
                <Component {...props} />    
            </StylesContext.Provider>
        )
    }
        
    return WrappedComp;
}
 
