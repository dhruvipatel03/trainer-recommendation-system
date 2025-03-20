import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import { TutorContext } from '../context/TutorContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [state, setState] = useState('Admin');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate function

    const { setAToken, backendUrl } = useContext(AdminContext);
    const { setTToken } = useContext(TutorContext);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        console.log("Submitting login request...");

        try {
            if (state === 'Admin') {
                console.log("Backend URL:", backendUrl);
                const { data } = await axios.post(`${backendUrl}/api/admin/login`, { email, password });

                if (data.success) {
                    localStorage.setItem('aToken', data.token);
                    setAToken(data.token);
                    console.log("Login Successful:", data);
                    navigate('/admin-dashboard'); // Redirect to Admin Dashboard
                } else {
                    console.log("Login Failed:", data.message);
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(`${backendUrl}/api/tutor/login`, { email, password });

                if (data.success) {
                    localStorage.setItem('tToken', data.token);
                    setTToken(data.token);
                    console.log("Login Successful:", data);
                    navigate('/tutor-dashboard'); // Redirect to Tutor Dashboard
                } else {
                    console.log("Login Failed:", data.message);
                    toast.error(data.message);
                }
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("Something went wrong. Please try again.");
        }
    };

    return (
        <form onSubmit={onSubmitHandler} className='min-h-[100vh] flex items-center'>
            <div className='flex flex-col gap-3 m-auto items-start p-5 min-w-[340px] sm:min-w-80 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
                <p className='text-2xl font-semibold m-auto'>
                    <span className='text-[#5F6FFF]'> {state} </span> Login
                </p>
                <div className='w-full'>
                    <p>Email</p>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
                </div>
                <div className='w-full'>
                    <p>Password</p>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
                </div>
                <button className='bg-[#5F6FFF] text-white w-full py-1 rounded-md text-base'>Login</button>
                {
                    state === 'Admin'
                        ? <p>Tutor Login? <span className='text-[#5F6FFF] underline cursor-pointer' onClick={() => setState('Tutor')}>Click here</span></p>
                        : <p>Admin Login? <span className='text-[#5F6FFF] underline cursor-pointer' onClick={() => setState('Admin')}>Click here</span></p>
                }
            </div>
        </form>
    );
};

export default Login;
