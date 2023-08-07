import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Staff from './Staff'
import StaffForm from './StaffForm'
import Departments from './Departments'
import DepartmentForm from './DepartmentForm'

export default function Nav() {
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/staff"}>Staff</Link>
      <Link to={"/staff_form"}>StaffForm</Link>
      <Link to={"/department"}>Departments</Link>
      <Link to={"/department_form"}>DepartmentForm</Link>
      <Routes>
        <Route path='/' element={<h1>Homepage</h1>}></Route>
        <Route path='/staff' element={<Staff />}></Route>
        <Route path='/department' element={<Departments />}></Route>
        <Route path='/staff_form' element={<StaffForm/>}></Route>
        <Route path='/department_form' element={<DepartmentForm/>}></Route>
      </Routes>
    </div>
  )
}
