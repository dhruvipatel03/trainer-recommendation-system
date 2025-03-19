import { createContext, useState } from "react";
import axios from 'axios'
import {toast} from 'react-toastify'

export const AdminContext = createContext()

const AdminContextProvider = (props) => {
    
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ?localStorage.getItem('aToken'):'')
    const [tutors, setTutors] = useState([])
    const [appointments , setAppointments] = useState([])
    const [dashData , setDashData] = useState(false)

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

    const changeAvailability = async (tutorId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/change-availability', {tutorId}, {headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                getAllTutors()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const getAllAppointments = async () => {
        try {
            const url = backendUrl.endsWith('/') 
                ? backendUrl + 'api/admin/appointments' 
                : backendUrl + '/api/admin/appointments';
    
            console.log("Requesting URL:", url);
            const { data } = await axios.get(url, { headers: { aToken } });
    
            if (data.success) {
                setAppointments(data.appointments);
                console.log(data.appointments);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
            console.error("API Error:", error);
        }
    }
    const cancelAppointment = async (appointmentId) => {
        try {
            console.log("Backend URL:", backendUrl); // Debugging line
            const url = `${backendUrl}/api/admin/cancel-appointment`;
            console.log("API URL:", url); // Debugging line
    
            const { data } = await axios.post(url, { appointmentId });
    
            if (data.success) {
                toast.success(data.message);
                getAllAppointments();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.error("Cancel Appointment Error:", error);
            toast.error(error.response?.data?.message || "Error cancelling appointment");
        }
    };
    
    const getDashData = async()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/admin/dashboard' , {headers:{aToken}})
            if (data.success) {
                setDashData(data.dashData)
                console.log(data.dashData)
            }
            else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    
    
    const value = {
        aToken, setAToken,
        backendUrl,tutors,
        getAllTutors, 
        changeAvailability,
        appointments , setAppointments,
        getAllAppointments,
        cancelAppointment,
        dashData , getDashData
    }

    return (
        <AdminContext.Provider value = {value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider