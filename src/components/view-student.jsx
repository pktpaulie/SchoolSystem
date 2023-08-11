// View-Studnet.jsx
import React, { useState, useEffect } from 'react';
import { Form, Table, Button } from 'react-bootstrap';

const API_URL = 'https://school-api-2wqk.onrender.com/api/students/';

const ViewStudent = () => {
  const [studentData, setStudentDetails] = useState(null);
  const [showStudentTable, setShowStudentTable] = useState(true);
  const [showStudentData, setShowStudentData] = useState({
    id: '',
    first_name: '',
    second_name: '',
    gender: '',
  });

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

 
  const editStudentData = (student) => {
    setShowStudentTable(false);
    setShowStudentData(student);
  };

  const handleInputChange = (event) => {
    // ... (same as before)
  };

  const handleEditStudentData = async (event) => {
    // ... (same as before)
  };

  return (
    <>
      {showStudentTable ? (
        <div>
          <h2>Registered School Students</h2>
          {studentData ? (
            <Table striped bordered hover style={{ width: '100%' }}>
              {/* Table headers and rows */}
              <h1>Table Students Data</h1>
              <td>
              <Button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '50%' }}> Update Selected Student </Button>
 <Button  type="submit" variant="outline-danger" style={{marginTop:'15px', width: '50%' }} > Cancel </Button>

                </td>
            </Table>
          ) : (
            <p>Loading Student Details from DB ...</p>
            
          )}
        </div>
      ) : (
        <UpdateStudent
        showStudentData={showStudentData}
        handleInputChange={handleInputChange}
        handleEditStudentData={handleEditStudentData}
        setShowStudentTable={setShowStudentTable}
      />
    )}
  </>
);
};

const UpdateStudent = ({showStudentData, handleInputChange,handleEditStudentData,setShowStudentTable,}) => (
<Form onSubmit={handleEditStudentData}>
  <h4>Update Selected Student</h4>
  <Form.Group style={{ marginTop: '25px' }}>
    {/* First name input */}
  </Form.Group>
  <Form.Group style={{ marginTop: '5px' }}>
    {/* Last name input */}
  </Form.Group>
  <Form.Group style={{ marginTop: '5px' }}>
    {/* Gender input */}
  </Form.Group>

  <Button
    type="submit"
    variant="outline-primary"
    style={{ marginTop: '15px', width: '50%' }}
  >
    Update Selected Student
  </Button>
  <Button
    type="button"
    variant="outline-danger"
    style={{ marginTop: '15px', width: '50%' }}
    onClick={() => {
      setShowStudentTable(true);
    }}
  >
    Cancel
  </Button>
</Form>
);


export default ViewStudent;
