import React from 'react' 
import { Navbar, Nav, Container } from 'react-bootstrap';

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

export default function NavHeader() {
  return (
    <>
   <div>
   <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">School React UI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
         <Link style={{marginLeft:"15px"}} to={"/"}>Home</Link>
          <Link style={{marginLeft:"15px"}} to={"/staff"}>Staff</Link>
          <Link style={{marginLeft:"15px"}} to={"/staffform"}>StaffForm</Link>
          <Link style={{marginLeft:"15px"}} to={"/department"}>Department</Link>
          <Link style={{marginLeft:"15px"}} to={"/student"}>Student</Link>
          <Link style={{marginLeft:"15px"}} to={"/students"}>Students</Link>
          <Link style={{marginLeft:"15px"}} to={"/course"}>Course</Link>
          <Link style={{marginLeft:"15px"}} to={"/courseform"}>CourseForm</Link>
          <Link style={{marginLeft:"15px"}} to={"/club"}>Club</Link> 
          <Link style={{marginLeft:"15px"}} to={"/clubform"}>ClubForm</Link>
          <Link style={{marginLeft:"15px"}} to={"/department"}>Department</Link> 
          <Link style={{marginLeft:"15px"}} to={"/departmentform"}>DepartmentForm</Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
   <div> 
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
   </>
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