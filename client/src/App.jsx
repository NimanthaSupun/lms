import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/students/Home'
import CourseList from './pages/students/CoursesList'
import CourseDetails from './pages/students/CourseDetails'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './pages/students/Loading'

function App() {

  return (
   <div>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/course-list' element={<CourseList/>} />
      <Route path='/course-list/:input' element={<CourseList/>} />
      <Route path='/course/:id' element={<CourseDetails/>} />
      <Route path='/my-enrollment' element={<MyEnrollments/>} />
      <Route path='/player/:courseId' element={<Player/>} />
      <Route path='/loading/:path' element={<Loading/>} />
    </Routes>

   </div>
  )
}

export default App
