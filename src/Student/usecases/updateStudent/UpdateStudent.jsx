import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import ViewStudent from '../viewStudents/ViewStudent';
// 



function UpdateDetails({ studentData, setShowStudentTable,setShowUpdateDetails }) {

  const [showStudentData, setShowStudentData] = useState({
    id:'',
    first_name:'',
    second_name:'',
    gender:'',
  });

  useEffect(() => {
    setShowStudentData(studentData);
  }, [studentData]);

const handleInputChange = (event) => {
  const { name, value } = event.target;
  setShowStudentData({
    ...showStudentData,
    [name]: value,
  });
};

 // Handle Edit Student
 const handleEditStudent = async (event) => {
  event.preventDefault();

  try {
    const response = await fetch(`https://school-api-2wqk.onrender.com/api/students/${showStudentData.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(showStudentData),
    });

    if (response.ok) {
     
      alert("Student Updated Successfully!");
        setShowStudentTable(true);
        setShowUpdateDetails(false); // Show ViewStudent component

      // The staff data was successfully created on the server.
      console.log('Student data Updated successfully!');
      // You can perform any necessary actions here after successful POST.
    } else {
      // The server returned an error response.
      const responseData = await response.json();
      console.error('Failed to Update Student data on the server:', responseData);
    }
  } catch (error) {
    // An error occurred during the API call.
    console.error('Error Updating Student data:', error);
  }
};

  return (
    <Form onSubmit={handleEditStudent}>
      <h4>Update Selected Student</h4>
      <Form.Group style={{ marginTop: '25px' }}>
        <Form.Control type="text" name="first_name" value={showStudentData.first_name} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group style={{ marginTop: '5px' }}>
        <Form.Control type="text" name="second_name" value={showStudentData.second_name} onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group style={{ marginTop: '5px' }}>
        <Form.Control type="text" name="gender" value={showStudentData.gender} onChange={handleInputChange} />
      </Form.Group>

      <Button type="submit" variant="outline-primary" style={{ marginTop: '15px', width: '50%' }} > Update Selected Student
      </Button>
      <Button type="submit" variant="outline-danger" style={{ marginTop: '15px', width: '50%' }} onClick={() => {
          setShowStudentTable(true);
        }}
      >
        Cancel
      </Button>
    </Form>
  );
} 

export default UpdateDetails;

 