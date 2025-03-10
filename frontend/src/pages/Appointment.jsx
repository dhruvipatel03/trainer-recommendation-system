import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import { assets } from '../assets/assets.js';
import RelatedTrainers from '../components/RelatedTrainers.jsx';
import { toast } from 'react-toastify';
import axios from 'axios';

const Appointment = () => {
  const { tutorId } = useParams();
  const { tutors , currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN' , 'MON' , 'TUE' , 'WED' , 'THU' , 'FRI' , 'SAT']
  const navigate = useNavigate()

  const [tutorInfo, setTutorInfo] = useState(null);
  const [tutorSlots,setTutorSlots] = useState([])
  const [slotIndex , setSlotIndex] = useState(0)
  const [slotTime , setSlotTime] = useState('')

  const fetchTutorInfo = async () => {
    const tutor = tutors.find((tutor) => tutor._id === tutorId);
    setTutorInfo(tutor);
  };

  const getAvailableSlots = async() =>{
    setTutorSlots([])
    // getting current date
    let today = new Date()
    for(let i =0 ; i< 7 ; i++)
    {
      // getting date with index
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)
      // setting and time of the date with index
      let endTime = new Date()
      endTime.setDate(today.getDate() + i)
      endTime.setHours(21,0,0,0)

      // setting hours 
      if(today.getDate()=== currentDate.getDate())
      {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30:0)
      }
      else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      let timeSlots = []
      while(currentDate < endTime)
      {
        let formattedTime = currentDate.toLocaleTimeString([], {hour : '2-digit' , minute : '2-digit'})
        // add slot to array
        timeSlots.push({
        datetime: new Date(currentDate),
        time : formattedTime})

        // Icrement current time by 30 min
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
      setTutorSlots(prev => ([...prev , timeSlots]))
    }
  }


  useEffect(() => {
    fetchTutorInfo();
  }, [tutors, tutorId]);

  useEffect(()=>{
    getAvailableSlots()
  },[tutorInfo])

  useEffect(() => {
    console.log(tutorSlots);
  },[tutorSlots])
  return tutorInfo && (
    <div>
      {/* ----------------Trainer details------------------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div className=' w-full sm:max-w-72 rounded-lg'>
          <img src={tutorInfo.image} alt="" />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* ------------------Trainer info-------------------------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {tutorInfo.name}
             <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gapp-2 text-sm mt-1 text-gray-600'>
            <p>{tutorInfo.degree} - {tutorInfo.speciality}</p>
            <button className='py-0.5 px-2 mx-2 border text-xs rounded-full'>{tutorInfo.experience}</button>
          </div>

        {/* ----------------------Trainer about-------------------------------- */}
        <div>
          <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>
            About <img className='w-3.5' src={assets.info_icon} alt="" />
           </p>
          <p className='text-sm text-gray-500 max-w-[700px] mt-1:'>{tutorInfo.about}</p>
        </div>

        <p className='text-gray-500 font-medium mt-4'>
          Appointment fee : <span className='text-gray-600'> {currencySymbol} {tutorInfo.fees}</span></p>

        </div>
      </div>
      {/* ---------------------booking slots------------------------------ */}
      <div className='sm:ml-72 sm:pl-4 font-medium text-gray-700'>
        <p className='mt-4'>Booking slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            tutorSlots.length && tutorSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'
              }`}
             key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {tutorSlots.length && tutorSlots[slotIndex].map((item,index)=>(
            <p onClick={()=> setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'} `} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6 '>
          Book an appointment
        </button>
      </div>
      {/* -----------------------Listing related trainers---------------------------------- */}
      <RelatedTrainers tutorId = {tutorId} speciality={tutorInfo.speciality}/>
    </div>
  );
};

export default Appointment;
