import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ?localStorage.getItem('aToken'):'')
    const [tutors, setTutors] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllTutors = async () => {
        try {
            const {data} = await axios.post(backendUrl + '/api/admin/all-tutors', {}, {headers:{aToken}})
            if(data.success){
                setTutors(data.tutors)
                console.log(data.tutors);

            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // const changeAvailability = async (tutorId) => {
    //     try {
    //         const { data } = await axios.post(backendUrl + '/api/admin/change-availability', {tutorId}, {headers:{aToken}})
    //         if(data.success){
    //             toast.success(data.message)
    //             getAllTutors()
    //         }else{
    //             toast.error(data.message)
    //         }
    //     } catch (error) {
    //         toast.error(error.message)
    //     }
    // }

    const value = {
        aToken, setAToken,
        backendUrl,tutors,
        getAllTutors, 
        // changeAvailability
    }

    return (
        <AdminContext.Provider value = {value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider