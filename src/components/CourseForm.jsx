import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [courseCode, setCourseCode] = useState('');
  const [department, setDepartment] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a data object with the form values
    const newCourse = {
      course_name: courseName,  
      course_code: courseCode,
      department: department,
      duration: duration,
    };

    try {
      const response = await fetch('https://school-api-2wqk.onrender.com/api/courses/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        throw new Error('Failed to create course.');
      }

      // If the POST request is successful, clear the form inputs
      setCourseName('');
      setCourseCode('');
      setDepartment('');
      setDuration('');
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
              <h4>Register New Course Details</h4>

      <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text" placeholder="Course Name"   value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
      </Form.Group>
        <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text" placeholder="Course Code"   value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required />
      </Form.Group>
        <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text" placeholder="Department"   value={department} onChange={(e) => setDepartment(e.target.value)} required />
      </Form.Group>
        <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text" placeholder="Duration"   value={duration} onChange={(e) => setDuration(e.target.value)} required />
      </Form.Group>

      <button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '100%' }}>Create New Course</button>
    </form>
  );
};

export default CourseForm;