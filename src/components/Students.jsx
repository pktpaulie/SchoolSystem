import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


const API_URL = 'https://school-api-2wqk.onrender.com/api/students/';

const Students = () => {
  const [studentData, setStudentDetails] = useState(null);

  useEffect(() => {
    fetchStudentDetails();
  }, []);

  const fetchStudentDetails = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStudentDetails(data.results);
    } catch (error) {
      console.error('Error fetching Student Details:', error);
    }
  };

  return (
    <>
    <div>
        <h2>Registered School Students</h2>
  {studentData ? (
     <Table striped bordered hover style={{ width: '100%' }}>
       <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.first_name}</td>
            <td>{student.second_name}</td>
            <td>{student.gender}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <p>Loading Student Details from DB ...</p>
  )}
</div>

    </>
  );
};

export default Students;
