import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Trainers = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filterTrain, setFilterTrain] = useState([]);
  const { trainers } = useContext(AppContext);

  const applyFilter = () => {
    if (trainers && trainers.length > 0) {
      if (speciality) {
        setFilterTrain(trainers.filter((tain) => tain.speciality === speciality));
      } else {
        setFilterTrain(trainers);
      }
    } else {
      setFilterTrain([]);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [trainers, speciality]);

  return (
    <div>
      <p>Browse through the trainers speciality</p>
      <div>
        {/* Specialities List */}
        <div>
          <p>Biology</p>
          <p>Physics</p>
          <p>Mathematics</p>
          <p>Literature</p>
          <p>Chemistry</p>
          <p>Environmental Science</p>
        </div>

        {/* Trainers List */}
        <div>
          {filterTrain.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            >
              <img className="bg-blue-50" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;