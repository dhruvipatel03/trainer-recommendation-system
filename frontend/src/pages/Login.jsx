import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const {backendUrl , token , setToken} = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()


    try {
      if (state === 'Sign Up') {
        const {data} = await axios.post(backendUrl + '/api/user/register',{name , password , email})
        if(data.success)
        {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        }
        else{
          toast.error(data.message)
        }
      }
      else{
        const {data} = await axios.post(backendUrl + '/api/user/login',{password , email})
        if(data.success)
        {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        }
        else{
          toast.error(data.message)
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(()=>{
     if (token) {
      navigate('/')
     }
  },[token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[70vh] flex items-center pt-2'>
      <div className='flex flex-col gap-2 m-auto items-start p-5 min-w-[280px] sm:min-w-[320px] border rounded-lg text-zinc-600 text-sm shadow-md'>
        <p className='text-xl font-semibold'>{state === 'Sign Up' ?  "Create Account" : "Login"}</p>
        <p className='text-sm'>Please {state === 'Sign Up' ?  "sign up" : "log in"} to book appointment</p>
        {
            state === "Sign Up" && <div className='w-full'>
              <p className='text-sm'>Full Name</p>
              <input className='border border-zinc-300 rounded w-full p-1 mt-1 text-xs' type="text" onChange={(e)=>setName(e.target.value)} value={name} required/>
            </div>
        }
        <div className='w-full'>
            <p className='text-sm'>Email</p>
            <input className='border border-zinc-300 rounded w-full p-1 mt-1 text-xs' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} required/>
        </div>
        <div className='w-full'>
            <p className='text-sm'>Password</p>
            <input className='border border-zinc-300 rounded w-full p-1 mt-1 text-xs' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} required/>
        </div>
        <button type='submit' className='bg-primary text-white w-full py-1 rounded-md text-base'>{state === 'Sign Up' ?  "Create Account" : "Login"}</button>
        {
            state === "Sign Up"
            ? <p>Already have an account? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create a new account? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login