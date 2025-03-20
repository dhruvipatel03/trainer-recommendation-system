import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const AllAppointments = () => {
  const { aToken, appointments, getAllAppointments , cancelAppointment} = useContext(AdminContext);
  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  return (
    <div className="w-full max-w-6xl mx-auto p-5">
      <p className="mb-4 text-lg font-semibold text-gray-700">
        All Appointments
      </p>

      <div className="bg-white border border-gray-300 rounded-md text-sm overflow-y-auto">
        {/* Table Header */}
        <div className="hidden sm:grid grid-cols-[0.5fr_2fr_0.8fr_2.5fr_2fr_1fr_1fr] gap-4 py-3 px-6 bg-gray-100 border-b border-gray-300 font-semibold text-gray-600">
          <p>#</p>
          <p>Student</p>
          <p className="text-center">Age</p>
          <p className="text-center">Date & Time</p>
          <p className="text-center">Tutor</p>
          <p className="text-center">Fees</p>
          <p className="text-center">Actions</p>
        </div>

        {/* Table Data */}
        {appointments.map((item, index) => (
          <div
            className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_2fr_0.8fr_2.5fr_2fr_1fr_1fr] gap-4 items-center text-gray-600 py-3 px-6 border-b border-gray-300 hover:bg-gray-50 transition duration-200"
            key={index}
          >
            <p className="max-sm:hidden">{index + 1}</p>

            {/* Student Section */}
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={item.userData.image}
                alt=""
              />
              <p>{item.userData.name}</p>
            </div>

            {/* Age (Fixed Alignment) */}
            <p className="text-center">{calculateAge(item.userData.dob)}</p>

            {/* Date & Time (Properly Centered) */}
            <p className="text-center">
              {slotDateFormat(item.slotDate)}, {item.slotTime}
            </p>

            {/* Tutor Section (Centered) */}
            <div className="flex items-center gap-5">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={item.tutorData.image}
                alt=""
              />
              <p>{item.tutorData.name}</p>
            </div>
            <p className="text-center">
              {currency}
              {item.amount}
            </p>
            {
            item.cancelled
            ? <p className=" text-center text-red-400 text-lg font-medium">Cancelled</p>
            : item.isCompleted
            ? <p className="text-center text-green-500 text-lg font-medium">Completed</p>
            :<div  className="flex justify-center items-center">
               <img onClick={()=>cancelAppointment(item._id)}
              className="w-10 cursor-pointer"
              src={assets.cancel_icon}
              alt=""
            />
          </div> }
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAppointments;
