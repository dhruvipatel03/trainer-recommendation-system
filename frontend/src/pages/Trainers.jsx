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
    <div>
      <p className="text-gray-600">Brows through the trainers speciality</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white" : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Biology"
                ? navigate("/tutors")
                : navigate("/tutors/Biology")
            }
            className={`W-[100vw] sm:w-[16VW] pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Biology" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Biology
          </p>
          <p
            onClick={() =>
              speciality === "Physics"
                ? navigate("/tutors")
                : navigate("/tutors/Physics")
            }
            className={`W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Physics" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Physics
          </p>
          <p
            onClick={() =>
              speciality === "Mathematics"
                ? navigate("/tutors")
                : navigate("/tutors/Mathematics")
            }
            className={`W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Mathematics" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Mathematics
          </p>
          <p
            onClick={() =>
              speciality === "Literature"
                ? navigate("/tutors")
                : navigate("/tutors/Literature")
            }
            className={`W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Literature" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Literature
          </p>
          <p
            onClick={() =>
              speciality === "Chemistry"
                ? navigate("/tutors")
                : navigate("/tutors/Chemistry")
            }
            className={`W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Chemistry" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Chemistry
          </p>
          <p
            onClick={() =>
              speciality === "Psychology"
                ? navigate("/tutors")
                : navigate("/tutors/Psychology")
            }
            className={`W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Psychology" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Psychology
          </p>
          <p
            onClick={() =>
              speciality === "History"
                ? navigate("/tutors")
                : navigate("/tutors/History")
            }
            className={`W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "History" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            History
          </p>
          <p
            onClick={() =>
              speciality === "Environmental Science"
                ? navigate("/tutors")
                : navigate("/tutors/Environmental Science")
            }
            className={`W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Environmental Science"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Environmental Science
          </p>
          <p
            onClick={() =>
              speciality === "Computer Science"
                ? navigate("/tutors")
                : navigate("/tutors/Computer Science")
            }
            className={`W-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Computer Science"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Computer Science
          </p>
        </div>
        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterTrain.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:tranlate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm">
                  <p
                    className={`w-2 h-2 ${
                      item?.available ? "bg-green-500" : "bg-red-500"
                    } rounded-full`}
                  ></p>
                  <p
                    className={`${
                      item?.available ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {item?.available ? "Available" : "Unavailable"}
                  </p>
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
