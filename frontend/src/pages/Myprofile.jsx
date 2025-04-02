import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets.js";
import axios from "axios";
import { toast } from "react-toastify";

const Myprofile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);

      image && formData.append("image", image);
      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    userData && (
      <div className="max-w-lg flex flex-col gap-4 text-sm bg-white p-6 shadow-lg rounded-xl border border-gray-200 mx-auto">
        <div className="flex flex-col items-center">
          {isEdit ? (
            <label htmlFor="image" className="cursor-pointer relative">
              <img className="w-36 h-36 rounded-full object-cover shadow-md" src={image ? URL.createObjectURL(image) : userData.image} alt="" />
              <img className="w-10 absolute bottom-2 right-2 opacity-75" src={image ? "" : assets.upload_icon} alt="" />
              <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
            </label>
          ) : (
            <img className="w-36 h-36 rounded-full object-cover shadow-md" src={userData.image} alt="" />
          )}
          {isEdit ? (
            <input
              className="bg-gray-100 text-2xl font-semibold text-center mt-4 p-2 rounded-lg"
              type="text"
              value={userData.name}
              onChange={(e) => setUserData((prev) => ({ ...prev, name: e.target.value }))}
            />
          ) : (
            <p className="font-semibold text-2xl text-gray-800 mt-4">{userData.name}</p>
          )}
        </div>
        <hr className="border-gray-300" />
        <div>
          <p className="text-gray-500 font-semibold mb-2">Contact Information</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-3 text-gray-700">
            <p className="font-medium">Email:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input className="bg-gray-100 p-2 rounded-lg" type="text" value={userData.phone} onChange={(e) => setUserData((prev) => ({ ...prev, phone: e.target.value }))} />
            ) : (
              <p className="text-blue-400">{userData.phone}</p>
            )}
            <p className="font-medium">Address:</p>
            {isEdit ? (
              <div className="flex flex-col gap-2">
                <input className="bg-gray-100 p-2 rounded-lg" onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                <input className="bg-gray-100 p-2 rounded-lg" onChange={(e) => setUserData((prev) => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
              </div>
            ) : (
              <p className="text-gray-500">{userData.address.line1}<br />{userData.address.line2}</p>
            )}
          </div>
        </div>
        <hr className="border-gray-300" />
        <div>
          <p className="text-gray-500 font-semibold mb-2">Basic Information</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-3 text-gray-700">
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select className="bg-gray-100 p-2 rounded-lg" onChange={(e) => setUserData((prev) => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-400">{userData.gender}</p>
            )}
            <p className="font-medium">Birthday:</p>
            {isEdit ? (
              <input className="bg-gray-100 p-2 rounded-lg" type="date" onChange={(e) => setUserData((prev) => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
            ) : (
              <p className="text-gray-400">{userData.dob}</p>
            )}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          {isEdit ? (
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition-all shadow-md" onClick={updateUserProfileData}>Save</button>
          ) : (
            <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-opacity-80 transition-all shadow-md" onClick={() => setIsEdit(true)}>Edit</button>
          )}
        </div>
      </div>
    )
  );
};

export default Myprofile;
