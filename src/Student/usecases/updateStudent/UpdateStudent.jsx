import React, { useState, useEffect } from 'react';
import { Form, Table, Button } from 'react-bootstrap';

const API_URL = 'https://school-api-2wqk.onrender.com/api/students/';

const Students = () => {
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

  

  return (
    <>
      {showStudentTable ? (
        <div>
          <h2>Registered School Students</h2>
          {studentData ? (
            <Table striped bordered hover style={{ width: '100%' }}>
              {/* Table headers and rows */}
            </Table>
          ) : (
            <p>Loading Student Details from DB ...</p>
          )}
        </div>
      ) : (
        <Form onSubmit={handleEditStudentData}>
          {/* Update form inputs and buttons */}
          
        </Form>
      )}
    </>
  );
};

export default Students;
