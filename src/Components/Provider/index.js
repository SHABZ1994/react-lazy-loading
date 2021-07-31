import { createContext, useEffect, useState } from "react";
import data from '../../data'

/**Create the context */
export const AppContext = createContext();

export const Provider = ({ children }) => {
    const [state, setState] = useState([]);
    /**Call only once */
    useEffect(() => {
        setState(data)
    }, [])
    return (
        <AppContext.Provider value={{ data: state }}>
            {children}
        </AppContext.Provider>
    )
}