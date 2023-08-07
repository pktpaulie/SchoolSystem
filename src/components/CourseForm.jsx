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

      <div>
      <label>Course Name:</label>
      <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text"    value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
      </Form.Group>
       </div>
      <div>
        <label>Course Code:</label>
        <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text"    value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required />
      </Form.Group>
       </div>
      <div>
        <label>Department:</label>
        <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text"    value={department} onChange={(e) => setDepartment(e.target.value)} required />
      </Form.Group>
       </div>
      <div>
        <label>Duration:</label>
        <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text"    value={duration} onChange={(e) => setDuration(e.target.value)} required />
      </Form.Group>
       </div>
      <button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '100%' }}>Create New Course</button>
    </form>
  );
};

export default CourseForm;