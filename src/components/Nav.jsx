import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Staff from './Staff'
import Club from './Club'
import StaffForm from './StaffForm'

export default function Nav() {
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/staff"}>Staff</Link>
      <Link to={"/club"}>staff-form</Link>
      <Link to={"/department"}>department</Link>
      <Link to={"/course"}>Course</Link>
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>}></Route>
        <Route path='/staff' element={<Staff />}></Route>
        <Route path='/club' element={<Club />}></Route>
        <Route path='/course' element={<Course />}></Route>
      </Routes>
    </div>
  )
}
