import React from 'react'
import { tutors } from '../assets/assets'

const TopTutors = () => {
  return (
    <div>
      <h1>Top Tutors to Book</h1>
      <p>Simply browse through our extensive list of trusted tutors.</p>
     <div>
        {tutors.slice(0,10).map((item, index)=>(
          <div>
            <img src={item.image} alt="" />
            <div>
                <div>
                    <p></p><p>Available</p>
                </div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
            </div>
          </div>
        ))}console.log(item.image);
      </div> 
      <button>more</button>
    </div>
  )
}

export default TopTutors
