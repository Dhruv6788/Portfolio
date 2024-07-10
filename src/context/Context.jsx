import React, { createContext } from 'react'
import { useState } from 'react'
const MyContext = createContext()

const MyProvider = ({ children }) => {
    const [contextData, setcontextData] = useState({ bg: '#000', text: 'white', hoverBg: "" })
    const updateContextData = (newData) => {
        setcontextData(newData);    
    };
    return (
        <MyContext.Provider value={{contextData, updateContextData}}>
        {children}
        </MyContext.Provider>
    )
}
export { MyProvider, MyContext }