import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


const API_URL = 'https://school-api-2wqk.onrender.com/api/courses/';

const Course = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCourseData(data.results);
    } catch (error) {
      console.error('Error fetching Course data:', error);
    }
  };

  return (
    <>
 

    <div>
        <h2>Registered Course Details</h2>
  {courseData ? (
     <Table striped bordered hover style={{ width: '100%' }}>
       <thead>
        <tr>
          <th>ID</th>
          <th>Course Name</th>
          <th>Course Code</th>
          <th>Department</th>
          <th>Duration</th> 
        </tr>
      </thead>
      <tbody>
        {courseData.map((course) => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.course_name}</td>
            <td>{course.course_code}</td>
            <td>{course.department}</td>
            <td>{course.duration}</td> 
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <p>Loading Course Details from DB ...</p>
  )}
</div>
    </>
  );
};

export default Course;
