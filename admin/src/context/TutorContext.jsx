import { createContext, useState } from "react";

export const TutorContext = createContext()

const TutorContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [tToken , setTToken ] = useState(localStorage.getItem('tToken') ?localStorage.getItem('tToken'):'')
    const value = {
        tToken, setTToken,
        backendUrl,
    }

    return (
        <TutorContext.Provider value = {value}>
            {props.children}
        </TutorContext.Provider>
    )
}

export default TutorContextProvider