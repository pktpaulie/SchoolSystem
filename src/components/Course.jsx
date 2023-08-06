import React, { useState } from 'react';

const Course = () => {
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
      <div>
        <label>Course Name:</label>
        <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} required />
      </div>
      <div>
        <label>Course Code:</label>
        <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} required />
      </div>
      <div>
        <label>Department:</label>
        <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required />
      </div>
      <div>
        <label>Duration:</label>
        <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      </div>
      <button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '100%' }}>Create New Course</button>
    </form>
  );
};

export default Course;