import { createContext } from "react";
import { tutors } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value = {
       tutors
    }

    return (
        <AppContext.Provider value ={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider