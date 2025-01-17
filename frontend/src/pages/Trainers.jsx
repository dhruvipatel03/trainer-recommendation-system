import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


const Trainers = () => {
  const {speciality}=useParams()
  const [filterTrain, setFilterTrain] = useState([])
  const navigate =useNavigate()
  const { tutors = [] } = useContext(AppContext);

const applyFilter = () => {
  if (speciality) {
    setFilterTrain(tutors.filter(tutor => tutor.speciality === speciality));
  } else {
    setFilterTrain(tutors);
  }
}
  useEffect(()=>{
    applyFilter()
  },[tutors,speciality])
  return (
    <div>
      <p className='text-gray-600'>Brows through the trainers speciality</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex-col gap-4 text-sm text-gray-600'>
          <p className={'W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Biology</p>
          <p className={'W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Physics</p>
          <p className={'W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Mathematics</p>
          <p className={'W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Literature</p>
          <p className={'W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Chemistry</p>
          <p className={'W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer '}>Environmental Science</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterTrain.map((item, index)=>(
              <div onClick={()=> navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:tranlate-y-[-10px] transition-all duration-500' key={index} >
                <img className='bg-blue-50' src={item.image} alt="" />
                <div className='p-4'>
                    <div className='flex items-centre gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium' >{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Trainers