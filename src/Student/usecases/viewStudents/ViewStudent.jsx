import React from 'react'
import { useState, useEffect } from 'react';
import { Form, Table, Button } from 'react-bootstrap';
// 
import UpdateDetails from '../updateStudent/UpdateStudent';

const ViewStudent = () => {
const API_URL = 'https://school-api-2wqk.onrender.com/api/students/';

// Edit studnet
const [showStudentTable, setShowStudentTable] = useState(true);
const [studentData, setShowStudentData] = useState(null);

const [showUpdateDetails, setShowUpdateDetails] = useState(true);
 
const [showUpdateForm, setShowUpdateForm] = useState(false); // State to control the visibility of the update form
const [updateStudentData, setUpdateStudentData] = useState({
  id: '',
  first_name: '',
  second_name: '',
  gender: '',
});

// Function to handle input change in the update form
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setShowStudentData({
    ...showStudentData,
    [name]: value,
  });
};


// Function to handle editing student data
const handleEditStudentData = async (event) => {
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
      viewStudentDetails()    // fetching the data from the server again to the UI or auto refresh
      setShowStudentTable(true)  // to automatically change the useState of showStudentTable to be true
      console.log('Student Updated successfully!');
      // You can perform any necessary actions here after successful PUT.
    } else {
      // else for server returned error response.
      const responseData = await response.json();
      console.error('Failed to Update Student data on the server:', responseData);
    }
  } catch (error) {
    // catch error during the API call.
    console.error('Error Updating Student data:', error);
  }
}; 

// Function to toggle the visibility of the update form
const editStudentData =student=>{
  setShowStudentTable(false)
  setUpdateStudentData(student);
}



// Viewing
const [studentDetails, setStudentDetails] = useState(null);

// Fetch Students Details
useEffect(() => {
  viewStudentDetails();
}, []);

const viewStudentDetails = async() =>{
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setStudentDetails(data.results);
    } catch (error) {
        console.error("Error fetching data from server:",error);
    }
}


  // delete student
  const deleteStudent = id => {
    fetch(`https://school-api-2wqk.onrender.com/api/students/${id}`, {
      method: 'DELETE'
    })
    .then(res => {
      if (res.ok) {
        viewStudentDetails(); // This function automatically refresh this component or (UI) and gets new data
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
  {showStudentTable ? (
    <div>
      <h2>Registered School Students</h2>
      <div>
     {studentDetails ? (
      <Table striped bordered hover style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studentDetails.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.first_name}</td>
              <td>{student.second_name}</td>
              <td>{student.gender}</td>
              <td style={{margin:"5%"}}> 
                <Button style={{marginRight:"5%", width:"30%"}} variant='outline-primary' onClick={()=> editStudentData(student)} >Edit</Button>
                <Button style={{marginRight:"5%", width:"30%"}}  
                variant='outline-danger' onClick={() => deleteStudent(student.id)} >Delete</Button>
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
    </div>
  ) : (
    <UpdateDetails
      studentData={updateStudentData}
      handleInputChange={handleInputChange}
      handleEditStudentData={handleEditStudentData}
      setShowStudentTable={setShowStudentTable}
      setShowUpdateDetails={setShowUpdateDetails}
     />
  )}
</>

  
  );
};
export default ViewStudent;