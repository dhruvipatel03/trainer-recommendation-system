import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode';

const Myappointments = () => {

  const { backendUrl, token } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])

const getUserAppointments = async () => {
  try {
    if (!token) {
      console.log("No token found");
      return;
    }

    // Decode JWT token
    const decodedToken = jwtDecode(token);
    console.log("Decoded Token:", decodedToken); // Debugging

    if (!decodedToken || !decodedToken.id) {
      console.log("User ID not found in token");
      return;
    }

    const userId = decodedToken.id; // Extract userId from token

    // Send request with userId as a query parameter
    const { data } = await axios.get(`${backendUrl}/api/user/appointments?userId=${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });

    console.log("API Response:", data);

    if (data.success) {
      setAppointments(data.appointments.reverse());
    }
  } catch (error) {
    console.log("Error fetching appointments:", error);
    toast.error(error.message);
  }
};

  useEffect(()=>{
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div>
        <p className='pb-3 mt-8 font-medium text-zinc-700 border-b'>My appointments</p>
        <div>
          {appointments.map((item, index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
              <div>
                <img className='w-32' src={item.tutorData.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold'>{item.tutorData.name}</p>
                <p>{item.tutorData.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs'>{item.tutorData.address.line1}</p>
                <p className='text-xs'>{item.tutorData.address.line2}</p>
                <p className='text-xs mt-1'><span className='text-sm text-neutral-700 font-medium'>Date & Time:</span> {item.slotDate} | {item.slotTime} </p>
              </div>
              <div></div>
              <div className='flex flex-col gap-2 justify-end'>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel appointment</button>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Myappointments