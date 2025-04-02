import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Trainers = () => {
  const { speciality } = useParams();
  const [filterTrain, setFilterTrain] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { tutors = [] } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterTrain(tutors.filter((tutor) => tutor.speciality === speciality));
    } else {
      setFilterTrain(tutors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [tutors, speciality]);
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <p className="text-gray-700 text-lg font-semibold text-center">Browse through the Trainers' Specialties</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-2 px-4 border rounded-lg text-sm font-medium transition-all sm:hidden ${
            showFilter ? "bg-primary text-white shadow-md" : "bg-white hover:bg-gray-100"
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-medium text-gray-700 font-medium ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          {["Biology", "Physics", "Mathematics", "Literature", "Chemistry", "Psychology", "History", "Environmental Science", "Computer Science"].map((subject) => (
            <p
              key={subject}
              onClick={() => (speciality === subject ? navigate("/tutors") : navigate(`/tutors/${subject}`))}
              className={`w-full sm:w-[16vw] pl-3 py-2 border border-gray-300 rounded-lg transition-all cursor-pointer hover:bg-indigo-200 ${
                speciality === subject ? "bg-indigo-100 text-black" : "bg-white hover:shadow-md"
              }`}
            >
              {subject}
            </p>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterTrain.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg hover:-translate-y-2 transition-all duration-500 bg-white"
              key={index}
            >
              <img className="w-full h-40 object-cover bg-blue-50 rounded-t-xl" src={item.image} alt="Trainer" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm">
                  <p
                    className={`w-2 h-2 ${item?.available ? "bg-green-500" : "bg-red-500"} rounded-full`}
                  ></p>
                  <p className={`${item?.available ? "text-green-500" : "text-red-500"} font-medium`}>
                    {item?.available ? "Available" : "Unavailable"}
                  </p>
                </div>
                <p className="text-gray-900 text-lg font-semibold mt-2">{item.name}</p>
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
