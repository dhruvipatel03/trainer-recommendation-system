import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Myappointments = () => {

  const { tutors } = useContext(AppContext)

  return (
    <div>
        <p>My appointments</p>
        <div>
          {doctors.slice(0,2).map((item, index)=>(
            <div key={index}>
              <div>
                <img src={item.image} alt="" />
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Myappointments