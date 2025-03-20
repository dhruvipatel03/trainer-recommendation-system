import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const TutorContext = createContext()

const TutorContextProvider = (props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [tToken , setTToken ] = useState(localStorage.getItem('tToken') ?localStorage.getItem('tToken'):'')
    const [appointments , setAppointments] = useState([])
    const [dashData , setDashData] = useState(false)
    const [profileData , setProfileData] = useState(false)

    const getAppointments = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/tutor/appointments',{headers:{tToken}})
            if (data.success) {
                setAppointments(data.appointments.reverse())
                console.log(data.appointments)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const completeAppointment = async (appointmentId)=>{
        
        try {
            const {data} = await axios.post(backendUrl + '/api/tutor/complete-appointment', {appointmentId} , {headers:{tToken}} )
            if (data.success) {
                toast.success(data.message)
                getAppointments()
            }
            else{
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId)=>{
        
        try {
            const {data} = await axios.post(backendUrl + '/api/tutor/cancel-appointment', {appointmentId} , {headers:{tToken}} )
            if (data.success) {
                toast.success(data.message)
                getAppointments()
            }
            else{
                toast.error(data.message)
            }
            
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }
    
    const getDashData = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/tutor/dashboard' , {headers:{tToken}})
            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getProfileData = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/tutor/profile' , {headers:{tToken}})
            if(data.success){
                setProfileData(data.profileData)
                console.log(data.profileData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        tToken, setTToken,
        backendUrl,appointments , setAppointments,
        getAppointments ,
        completeAppointment , 
        cancelAppointment,
        dashData , setDashData , getDashData,
        profileData , setProfileData , getProfileData
    }

    return (
        <TutorContext.Provider value = {value}>
            {props.children}
        </TutorContext.Provider>
    )
}

export default TutorContextProvider