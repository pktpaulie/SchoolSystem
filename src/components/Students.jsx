import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';


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

  
  const deleteStudent = id => {
    fetch(`https://school-api-2wqk.onrender.com/api/students/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        fetchStudentDetails(); // This function automatically refresh this component or (UI) and gets new data
        alert('Student Deleted Successfully');
      } else {
        throw new Error('Failed to delete student');
      }
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while deleting the student');
    });
  }



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
          <th colSpan={2}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {studentData.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.first_name}</td>
            <td>{student.second_name}</td>
            <td>{student.gender}</td>
            <td style={{margin:"5%"}}> 
              <Button style={{marginRight:"5%", width:"30%"}} className='btn btn-info'>Edit</Button>
              <Button style={{marginRight:"5%", width:"30%"}}  
              className='btn btn-danger' onClick={() => deleteStudent(student.id)} >Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : ( <p>Loading Student Details from DB ...</p>
    //  <div class="alert alert-sucess" role="alert">
    //    <img src="https://gifdb.com/images/high/buffering-animated-text-icon-loading-u1h739who8u5mtw3.gif" width={'10%'} height={'10%'} /> 
    //   <h4>Student Details from DB ...</h4>
    // </div>
  )}
</div>

    </>
  );
};

export default Students;
