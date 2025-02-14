import React, {useContext} from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdminContext} from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddTutor from './pages/Admin/AddTutor';
import TutorsList from './pages/Admin/TutorsList';

const App = () => {

  const {aToken} = useContext(AdminContext)
  return aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllAppointments/>}/>
          <Route path='/add-tutor' element={<AddTutor/>}/>
          <Route path='/tutors-list' element={<TutorsList/>}/>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>

  )
}

export default App