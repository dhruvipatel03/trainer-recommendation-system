import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const RelatedTrainers = ({ speciality, tutorId }) => {
  const { tutors } = useContext(AppContext);
  const navigate = useNavigate();

  const [relTutor, setRelTutor] = useState([]);

  useEffect(() => {
    if (tutors.length > 0 && speciality) {
      const tutorsData = tutors.filter(
        (tutor) => tutor.speciality === speciality && tutor._id !== tutorId
      );
      setRelTutor(tutorsData);
    }
  }, [tutors, speciality, tutorId]);

  return (
    <div className='flex flex-col items-center gap-4 my-10 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Related Tutors</h1>
      <p className='sm:w-1/3 text-center text-sm'>
        Simply browse through our extensive list of trusted tutors.
      </p>
      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relTutor.slice(0, 5).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500'
            key={index}
          >
            <img className='bg-blue-50 w-full object-cover' src={item.image} alt={item.name} />
            <div className='p-4'>
            <div className='flex items-center gap-2 text-sm'>
  <p className={`w-2 h-2 ${item?.available ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></p>
  <p className={`${item?.available ? 'text-green-500' : 'text-red-500'}`}>
    {item?.available ? "Available" : "Unavailable"}
  </p>
</div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('../Trainers');
          scrollTo(0, 0);
        }}
        className='bg-blue-50 text-gray-600 px-6 py-2 rounded-full mt-10'
      >
        more
      </button>
    </div>
  );
};

export default RelatedTrainers;
