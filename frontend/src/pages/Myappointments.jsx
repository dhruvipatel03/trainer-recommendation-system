import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const Myappointments = () => {

  const { backendUrl, token, getTutorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])
  const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const navigate = useNavigate()

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const getUserAppointments = async () => {
    try {
      if (!token) {
        console.log("No token found");
        return;
      }

      const decodedToken = jwtDecode(token);
      if (!decodedToken || !decodedToken.id) {
        console.log("User ID not found in token");
        return;
      }

      const userId = decodedToken.id;
      const { data } = await axios.get(`${backendUrl}/api/user/appointments?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      console.log("Error fetching appointments:", error);
      toast.error(error.message);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;
      const { data } = await axios.post(
        backendUrl + '/api/user/cancel-appointment', 
        { appointmentId, userId }, 
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getTutorsData();
      } else {
        toast.error(data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || error.message);
    }
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const {data} = await axios.post(backendUrl + '/api/user/verifyRazorpay', response, {headers: {token}})
          if (data.success) {
            getUserAppointments()
            navigate('/Myappointments')
          }
        } catch (error) {
          console.log(error);
          toast.error(error.message)
        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const {data} = await axios.post(backendUrl + '/api/user/payment-razorpay', {appointmentId}, {headers:{token}})
      if (data.success) {
        initPay(data.order)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div className='px-6 md:px-12 lg:px-20 py-10 bg-gray-50'>
        <p className='pb-3  font-semibold text-gray-700 text-xl border-b'>My Appointments</p>
        <div className='mt-6'>
          {appointments.map((item, index)=>(
            <div className='grid grid-cols-[1fr_2fr] gap-6 sm:flex sm:gap-8 py-4 border-b bg-white p-4 rounded-lg shadow-md' key={index}>
              <div>
                <img className='w-32 rounded-lg shadow-sm' src={item.tutorData.image} alt="" />
              </div>
              <div className='flex-1 text-sm text-gray-600'>
                <p className='text-gray-800 font-semibold text-lg'>{item.tutorData.name}</p>
                <p>{item.tutorData.speciality}</p>
                <p className='text-gray-700 font-medium mt-2'>Address:</p>
                <p className='text-xs'>{item.tutorData.address.line1}</p>
                <p className='text-xs'>{item.tutorData.address.line2}</p>
                <p className='text-xs mt-2'><span className='text-sm text-gray-700 font-medium'>Date & Time:</span> {slotDateFormat(item.slotDate)} | {item.slotTime} </p>
              </div>
              <div className='flex flex-col gap-2 justify-end'>
                {!item.cancelled && item.payment && !item.isCompleted && <button className='sm:min-w-48 py-2 border rounded text-green-600 bg-green-50 font-medium'>Paid</button>}
                {!item.cancelled && !item.payment && !item.isCompleted && <button onClick={()=>appointmentRazorpay(item._id)} className='text-sm sm:min-w-48 py-2 border rounded bg-indigo-500 text-white hover:bg-indigo-700 transition-all duration-300'>Pay Online</button>}
                {!item.cancelled && !item.isCompleted && <button onClick={()=>cancelAppointment(item._id)} className='text-sm sm:min-w-48 py-2 border rounded bg-red-500 text-white hover:bg-red-700 transition-all duration-300'>Cancel Appointment</button>}
                {item.cancelled && !item.isCompleted && <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>Appointment Cancelled</button>}
                {item.isCompleted && <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>Completed</button>}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Myappointments