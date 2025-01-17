import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Trainers = () => {
  const {speciality}=useParams()
  const [filterTrain, setFilterTrain] = useState([])
  const {trainers} = useContext(AppContext)
  const applyFilter = ()=>{
    if(speciality)
    {
      setFilterTrain(trainers.filter(train=>train.speciality===speciality))
    }else{
      setFilterTrain(trainers)
    }
  }
  useEffect(()=>{
    applyFilter()
  },[trainers,speciality])
  return (
    <div>
      <p>Brows through the trainers speciality</p>
      <div>
        <div>
          <p>Biology</p>
          <p>Physics</p>
          <p>Mathematics</p>
          <p>Literature</p>
          <p>Chemistry</p>
          <p>Environmental Science</p>
        </div>
        <div>
          {
            
          }
        </div>
      </div>
    </div>
  )
}

export default Trainers