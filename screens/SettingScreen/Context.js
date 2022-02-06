import React, { useState ,  createContext } from 'react'    
const SettingContext = createContext() 
function SettingProvider({children}) { 
    const [options , setOptions] = useState({
        language: 'vie', 
        theme: 'light',
    })
    const chooseLanguage = (language) => {
        setOptions({
            ...options,
            language: language, 
        })
    }  
    const chooseTheme = (theme) => {
        setOptions({
            ...options,
            theme: theme, 
        })
    }  
    const value = { 
        chooseLanguage,
        chooseTheme,
        options,   
    }
    return (
        <SettingContext.Provider value={value}> 
            {children}
        </SettingContext.Provider> 
    )
}
export { SettingProvider, SettingContext }