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
import Home from './Home';
// 
import ViewStudent from '../Student/usecases/viewStudents/ViewStudent';

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
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/staff">Staff</Nav.Link>
            <Nav.Link as={Link} to="/staffform">StaffForm</Nav.Link>
            <Nav.Link as={Link} to="/department">Department</Nav.Link> 
            <Nav.Link as={Link} to="/student">Student</Nav.Link> 
            {/* <Nav.Link as={Link} to="/students">Students</Nav.Link>  */}
            <Nav.Link as={Link} to="/course">Course</Nav.Link> 
            <Nav.Link as={Link} to="/courseform">CourseForm</Nav.Link> 
            <Nav.Link as={Link} to="/club">Club</Nav.Link> 
            <Nav.Link as={Link} to="/clubform">ClubForm</Nav.Link> 
            <Nav.Link as={Link} to="/departmentform">DepartmentForm</Nav.Link> 
            {/* New clean links */}
            <Nav.Link as={Link} to="/viewStudent">View-Students</Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </div>
   <div> 
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/staff' element={<Staff />}></Route>
          <Route path='/staffform' element={<StaffForm />}></Route>
          <Route path='/student' element={<Student />}></Route>
          {/* <Route path='/students' element={<Students />}></Route> */}
          <Route path='/department' element={<Department />}></Route>
          <Route path='/departmentform' element={<DepartmentForm />}></Route>
          <Route path='/course' element={<Course />}></Route> 
          <Route path='/courseform' element={<CourseForm />}></Route> 
          <Route path='/club' element={<Club />}></Route>
          <Route path='/clubform' element={<ClubForm />}></Route>
          {/* New Routes */}
          <Route path='/ViewStudent' element={<ViewStudent />}></Route>
        </Routes> 
   </div>
   </>
  );
}
