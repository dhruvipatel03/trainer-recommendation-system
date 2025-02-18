import { createContext, useEffect, useState } from "react";
// import { tutors } from "../assets/assets";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AppContext = createContext()

const AppContextProvider = (props) => {
const currencySymbol = '$'
const backendUrl = import.meta.env.VITE_BACKEND_URL
const [tutors, setTutors] = useState([])
const [token , setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false)


   
    const getTutorsData = async () => {
        try {

            const {data} = await axios.get(backendUrl + '/api/tutor/list')
            if (data.success){
                setTutors(data.tutors)
            }else{
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    const value = {
        tutors , 
        currencySymbol,
        token,setToken,
        backendUrl
     }

     
    useEffect(() => {
        getTutorsData()
    },[])

    return (
        <AppContext.Provider value ={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider