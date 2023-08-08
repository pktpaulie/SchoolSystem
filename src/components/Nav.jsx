import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Staff from './Staff'
import Club from './Club'
import ClubForm from './ClubForm'
import StaffForm from './StaffForm'
import Course from './Course'
import CourseForm from './CourseForm'
import Student from './Student'
import Department from './Department';
import DepartmentForm from './DepartmentForm';
import Students from './Students'

export default function Nav() {
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/staff"}>Staff</Link>
      <Link to={"/staffform"}>StaffForm</Link>
      <Link to={"/department"}>Department</Link>
      <Link to={"/student"}>Student</Link>
      <Link to={"/students"}>Students</Link>
      <Link to={"/course"}>Course</Link>
      <Link to={"/courseform"}>CourseForm</Link>
      <Link to={"/club"}>Club</Link> 
      <Link to={"/clubform"}>ClubForm</Link>
      <Link to={"/department"}>Department</Link> 
      <Link to={"/departmentform"}>DepartmentForm</Link> 
      
        <Routes>
          <Route path='/' element={<h1>Homepage</h1>}></Route>
          <Route path='/staff' element={<Staff />}></Route>
          <Route path='/staffform' element={<StaffForm />}></Route>
          <Route path='/student' element={<Student />}></Route>
          <Route path='/students' element={<Students />}></Route>
          <Route path='/department' element={<Department />}></Route>
          <Route path='/departmentform' element={<DepartmentForm />}></Route>
          <Route path='/course' element={<Course />}></Route> 
          <Route path='/courseform' element={<CourseForm />}></Route> 
          <Route path='/club' element={<Club />}></Route>
          <Route path='/clubform' element={<ClubForm />}></Route>

        </Routes> 
      
    </div>
  );
}

 
/*export default function Nav() {
  return(
    <div>
      <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand" href={"/"}>Home</a>
        <a class="navbar-brand" href={"/staff"}>Staff</a>
        <a class="navbar-brand" Link to={"/students"}>Students</a>
        <a class="navbar-brand" Link to={"/department"}>Departments</a>
        <a class="navbar-brand" Link to={"/courses"}>Courses</a>
        <a class="navbar-brand" Link to={"/club"}>Clubs</a>
        </nav>
    </div>
    
  );
};*/