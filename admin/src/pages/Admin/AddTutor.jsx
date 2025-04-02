import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddTutor = () => {
  const [tutImg, setTutImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("Biology");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!tutImg) {
        return toast.error("Image not selected");
      }

      const formData = new FormData();
      formData.append("image", tutImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-tutor",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setTutImg(null);
        setName("");
        setEmail("");
        setPassword("");
        setExperience("1 year");
        setFees("");
        setAbout("");
        setSpeciality("Biology");
        setDegree("");
        setAddress1("");
        setAddress2("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full flex flex-col items-center">
      <p className="mb-4 text-2xl font-semibold text-gray-700">Add Tutor</p>
      <div className="bg-white px-10 py-8 border border-gray-400 rounded-2xl shadow-lg w-full max-w-3xl">
        <div className="flex flex-col items-center gap-4 mb-6 text-gray-600">
          <label htmlFor="tut-img" className="cursor-pointer">
            <img
              className="w-20 h-20 bg-gray-100 rounded-full shadow-md object-cover"
              src={tutImg ? URL.createObjectURL(tutImg) : assets.upload_area}
              alt="Upload"
            />
          </label>
          <input
            onChange={(e) => setTutImg(e.target.files[0])}
            type="file"
            id="tut-img"
            hidden
          />
          <p className="text-sm">Upload Tutor Picture</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input className="input-field rounded-lg border border-gray-400" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input className="input-field rounded-lg border border-gray-400" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <label>Password</label>
            <input className="input-field rounded-lg border border-gray-400" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <label>Experience</label>
            <select className="input-field rounded-lg border border-gray-400" value={experience} onChange={(e) => setExperience(e.target.value)}>
              {Array.from({ length: 11 }, (_, i) => (
                <option key={i} value={`${i + 1} year`}>{`${i + 1} year`}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label>Fees</label>
            <input className="input-field rounded-lg border border-gray-400" type="number" value={fees} onChange={(e) => setFees(e.target.value)} required />
          </div>
          <div className="flex flex-col gap-2">
            <label>Speciality</label>
            <select className="input-field rounded-lg border border-gray-400" value={speciality} onChange={(e) => setSpeciality(e.target.value)}>
              {["Biology", "Physics", "Mathematics", "Literature", "Chemistry", "Psychology", "History", "Environmental Science", "Computer Science"].map((spec) => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>


        <div>
          <p className="mt-4 mb-2">About Tutor</p>
          <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className="w-full px-4 pt-2 border border-gray-400  rounded" placeholder="Write about tutor" rows={5}  required />
        </div>

        <button type="submit" className="bg-[#6b5b95] text-white px-6 py-3 rounded-full shadow-md mt-6 cursor-pointer hover:bg-[#6b5b95] transition">Add Tutor</button>
      </div>
    </form>
  );
};

export default AddTutor;
