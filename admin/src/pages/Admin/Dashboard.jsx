import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const Dashboard = () => {
  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext);
  const {slotDateFormat} = useContext(AppContext)
  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);
  return (
    dashData && (
      <div className="m-5">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-200 hover:scale-105 transition-all">
            <img className="w-14" src={assets.tutor_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.tutors}
              </p>
              <p className="text-lg text-gray-500">Tutors</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-200 hover:scale-105 transition-all">
            <img className="w-14" src={assets.appointments_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.appointments}
              </p>
              <p className="text-lg text-gray-500">Appointments</p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-white p-4 min-w-52 rounded border-2 border-gray-200 hover:scale-105 transition-all">
            <img className="w-14" src={assets.student_icon} alt="" />
            <div>
              <p className="text-xl font-semibold text-gray-600">
                {dashData.students}
              </p>
              <p className="text-lg text-gray-500">Students</p>
            </div>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border border-gray-300">
            <img src={assets.list_icon} alt="" />
            <p>Latest Bookings</p>
          </div>

          <div className="pt-4 border border-t-0 border-gray-300">
            {dashData.latestAppointments?.map(
              (item, index) =>
                item.tutorData && (
                  <div className="flex items-center px-6 py-3 gap-3 hover:bg-gray-100 transition-all duration-200" key={index}>
                    <img className="rounded-full w-10" src={item.tutorData.image} alt="Tutor" />
                    <div className="flex-1 text-sm ">
                      <p className="text-gray-800 font-medium">{item.tutorData.name}</p>
                      <p className=" text-gray-700">{slotDateFormat(item.slotDate)}</p>
                    </div>
                    {
                      item.cancelled
                      ? <p className="text-red-600 font-bold">Cancelled</p>
                      : <img onClick={()=>cancelAppointment(item._id)} className="w-10 cursor-pointer" src={assets.cancel_icon} alt="" />
                      }
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
