import React from 'react'
import ReactDOM from "react-dom/client";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Staff from './Staff'
import Club from './Club'
import StaffForm from './StaffForm'
import Course from './CourseForm'
import Student from './Student'
import ClubForm from './ClubForm';

export default function Nav() {
  return (
    <div>
      <Link to={"/"}>Homepage</Link>
      <Link to={"/staff"}>Staff</Link>
      <Link to={"/staffform"}>StaffForm</Link>
      <Link to={"/department"}>Department</Link>
      <Link to={"/student"}>Student</Link>
      <Link to={"/course"}>Course</Link>
      <Link to={"/courseform"}>CourseForm</Link>
      <Link to={"/club"}>Club</Link> 
      <Link to={"/clubform"}>ClubForm</Link>
      
        <Routes>
          <Route path='/' element={<h1>Homepage</h1>}></Route>
          <Route path='/staff' element={<Staff />}></Route>
          <Route path='/staffform' element={<StaffForm />}></Route>
           <Route path='/student' element={<Student />}></Route>
          {/*<Route path='/department' element={<Department />}></Route>*/}
          <Route path='/course' element={<Course />}></Route> 
          <Route path='/courseform' element={<Course />}></Route> 
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