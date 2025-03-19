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
import { TutorContext } from './context/TutorContext';
import TutorDashboard from './pages/Tutor/TutorDashboard';
import TutorAppointment from './pages/Tutor/TutorAppointment';
import TutorProfile from './pages/Tutor/TutorProfile';

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {tToken} = useContext(TutorContext)
  return aToken || tToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar/>
        <Routes>
           {/* Admin Route */}
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/all-appointments' element={<AllAppointments/>}/>
          <Route path='/add-tutor' element={<AddTutor/>}/>
          <Route path='/tutors-list' element={<TutorsList/>}/>

          {/* Tutor Route */}
          <Route path='/tutor-dashboard' element={<TutorDashboard/>}/>
          <Route path='/tutor-appointments' element={<TutorAppointment/>}/>
          <Route path='/tutor-profile' element={<TutorProfile/>}/>
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