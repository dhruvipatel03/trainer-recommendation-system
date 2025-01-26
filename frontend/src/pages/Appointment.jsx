import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext.jsx';

const Appointment = () => {
  const { trainid } = useParams()
  const {tutors} = useContext(AppContext)
  const [tutorInfo,settutorInfo] = useState(null)

  const fetchTutorInfo = async() =>{
    const tutorInfo = tutors.find(tutors => tutors._id === trainid)
    settutorInfo(tutorInfo)
    console.log(tutorInfo)
  }
  useEffect(()=>{
    fetchTutorInfo()
  },[tutors,trainid])
  return (
    <div>
        {/* ----------------Trainer details------------------- */}
        <div>
          <div>
            
          </div>
        </div>
    </div>
  )
}

export default Appointment