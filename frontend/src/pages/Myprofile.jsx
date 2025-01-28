import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Myprofile = () => {


  const [userData , setUserData] = useState({
    name:"Soham soni",
    image:assets.profile_pic,
    email:'sohamsoni@gmail.com',
    phone:'123456789',
    address:{
      line1:"12 sahibag road",
      line2:"ahmedabad , gujarat"
    },
    gender:'Male',
    dob:'02-02-2000'
  })
  const [isEdit , setIsEdit] = useState(false)
  return (
    <div>
      <img src={userData.image} alt="" />
      {
        isEdit 
        ?<input type='text' />
        : <p>{userData.name}</p>
      }
    </div>
  )
}

export default Myprofile