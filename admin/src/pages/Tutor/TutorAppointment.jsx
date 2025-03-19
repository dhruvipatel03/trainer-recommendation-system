import React, { useContext, useEffect } from 'react'
import { TutorContext } from '../../context/TutorContext.jsx'
import { assets } from '../../assets/assets.js'
import { AppContext } from '../../context/AppContext.jsx'

const TutorAppointment = () => {
  const {tToken , appointments ,getAppointments , completeAppointment , cancelAppointment} = useContext(TutorContext)
  const {calculateAge , slotDateFormat , currency} = useContext(AppContext)
  useEffect(()=>{
    if (tToken) {
      getAppointments()
    }
  },[tToken])
  return (
    <div className='w-full max-w-6xl m-5'>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border border-gray-300 rounded text-sm overflow-y-scroll'>
        <div className='max-sm:hidden grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr_1fr] gap-1 py-3 px-6 '>
          <p>#</p>
          <p>Student</p>
          <p>Payment</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {
          appointments.map((item , index)=>(
            <div className='flex flex-wrap justify-between max-sm:gap-5 max-sm:text-base sm:grid grid-cols-[0.5fr_2fr_1fr_1fr_3fr_1fr__1fr] gap-1 items-center text-gray-500 py-3 px-6 border-b border-gray-300 hover:bg-gray-100' key={index}>
              <p className='max-sm:hidden'>{index+1}</p>
              <div className='flex items-center gap-2'>
                <img className='w-8 rounded-full' src={item.userData.image} alt="" />
                <p>{item.userData.name}</p>
              </div>
              <div>
                <p className='text-xs inline border border-gray-800 px-4 py-2 rounded-full'>
                  {item.payment ? 'Online': 'Cash'}
                </p>
              </div>
              <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
              <p>{slotDateFormat(item.slotDate)} , {item.slotTime}</p>
              <p>{currency}{item.amount}</p>
              {
                item.cancelled 
                ? <p className="text-red-600 font-semibold">Cancelled</p> 
                : item.isCompleted 
                  ? <p className="text-green-600 font-semibold">Completed</p> 
                  : <div className='flex'>
                      <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt='' />
                      <img onClick={() => completeAppointment(item._id)} className='w-10 cursor-pointer' src={assets.tick_icon} alt='' />
                    </div>
              }
              
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TutorAppointment