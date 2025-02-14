import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddTutor = () => {

  const [tutImg, setTutImg] = useState(null);
  const [name , setName] =useState('')
  const [email , setEmail] =useState('')
  const [password , setPassword] =useState('')
  const [experience , setExperience] =useState('1 year')
  const [fees , setFees] =useState('')
  const [about, setAbout] =useState('')
  const [speciality , setspeciality] =useState('Biology')
  const [degree , setDegree] =useState('')
  const [address1 , setAddress1] =useState('')
  const [address2 , setAddress2] =useState('')

  const {backendUrl , aToken} = useContext(AdminContext) 
  
  const onSubmitHandler = async(event) =>{
    event.preventDefault()

    try{
      if (!tutImg) {
        return toast.error('Image not selected')
      }

      const formData = new FormData()
      formData.append('image',tutImg)
      formData.append('name',name)
      formData.append('email',email)
      formData.append('password',password)
      formData.append('experience',experience)
      formData.append('fees',Number(fees))
      formData.append('about',about)
      formData.append('speciality',speciality)
      formData.append('degree',degree)
      formData.append('address',JSON.stringify({line1:address1 , line2:address2}))

      //console log formdata
      formData.forEach((value,key)=>{
        console.log(`${key}:${value}`);
      })
      const {data} = await axios.post(backendUrl + '/api/admin/add-tutor',formData,
        {headers : { aToken }
      })
      if (data.success) {
        toast.success(data.message)
      }
      else{
        toast.error(data.message)
      }
    }
    catch(error){

    }
  }


  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full ">
      <p className="mb-3 text-lg font-medium">Add Tutor</p>
      <div className="bg-white px-8 py-8 border rounded border-gray-300 w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="tut-img">
            <img className="cursor-pointer w-16 bg-gray-100 rounded-full" src={tutImg ? URL.createObjectURL(tutImg) : assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setTutImg(e.target.files[0])} type="file" id="tut-img" hidden />
          <p>
            Upload tutor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Tutor name</p>
              <input onChange={(e)=>setName(e.target.value)} value={name} className="border border-gray-400 rounded px-3 py-2" type="text" placeholder="Name" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Tutor Email</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} className="border border-gray-400  rounded px-3 py-2" type="email" placeholder="Email" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Tutor password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} className="border border-gray-400  rounded px-3 py-2" type="password" placeholder="Password" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Experience</p>
              <select onChange={(e)=>setExperience(e.target.value)} value={experience} className="border border-gray-400  rounded px-3 py-2" name="" id="">
                <option value="1 year">1 year</option>
                <option value="2 year">2 year</option>
                <option value="3 year">3 year</option>
                <option value="4 year">4 year</option>
                <option value="5 year">5 year</option>
                <option value="6 year">6 year</option>
                <option value="7 year">7 year</option>
                <option value="8 year">8 year</option>
                <option value="9 year">9 year</option>
                <option value="10 year">10 year</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Fees</p>
              <input onChange={(e)=>setFees(e.target.value)} value={fees} className="border border-gray-400  rounded px-3 py-2" type="number" placeholder="Fees" required />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p>Speciality</p>
              <select onChange={(e)=>setspeciality(e.target.value)} value={speciality} className="border border-gray-400  rounded px-3 py-2" name="" id="">
                <option value="Biology">Biology</option>
                <option value="Physics">Physics</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Literature">Literature</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Psychology">Psychology</option>
                <option value="History">History</option>
                <option value="Environmental Science">
                  Environmental Science
                </option>
                <option value="Computer Science">Computer Science</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Education</p>
              <input onChange={(e)=>setDegree(e.target.value)} value={degree} className="border border-gray-400  rounded px-3 py-2" type="text" placeholder="Education" required />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p>Address</p>
              <input onChange={(e)=>setAddress1(e.target.value)} value={address1} className="border border-gray-400  rounded px-3 py-2" type="text" placeholder="address 1" required />
              <input onChange={(e)=>setAddress2(e.target.value)} value={address2}  className="border border-gray-400  rounded px-3 py-2" type="text" placeholder="address 2" required />
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4 mb-2">About Tutor</p>
          <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className="w-full px-4 pt-2 border border-gray-400  rounded" placeholder="Write about tutor" rows={5}  required />
        </div>

        <button type="submit" className="bg-primary px-10 py-3 mt-4 text-white rounded-full cursor-pointer ">Add tutor</button>
      </div>
    </form>
  );
};

export default AddTutor;
