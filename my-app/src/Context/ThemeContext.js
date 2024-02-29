import React from "react";
import { useContext } from "react";
export const ThemeContext = React.createContext({
    thememode: 'light',
    darkmode: ()=>{},
    lightmode: ()=>{}
})
export const ThemeProvider = ThemeContext.Provider;
export default function useTheme (){
    return useContext(ThemeContext);
}
