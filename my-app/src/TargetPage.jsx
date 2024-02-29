import React, { useEffect, useState } from 'react'
import useTheme, { ThemeProvider } from './Context/ThemeContext'

function TargetPage() {
    const [thememode, setThememode] = useState('light');
    const darkmode =()=>{setTheme('dark')}
    const lightmode =()=>{setTheme('light')}

    useEffect(()=>{
        document.querySelector('html').classList.remove('light', 'dark');
        document.querySelector('html').classList.add(thememode);
    },[thememode])
  return (
    <ThemeProvider value={{thememode, darkmode, lightmode}}>

    </ThemeProvider>
  )
}

export default TargetPage
