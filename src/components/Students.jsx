import React, { useState, useEffect } from 'react';
import { Form, Table, Button } from 'react-bootstrap';


const API_URL = 'https://school-api-2wqk.onrender.com/api/students/';

const Students = () => {
  const [studentData, setStudentDetails] = useState(null);
  // 
  const [showStudentTable, setShowStudentTable] = useState(true);
  // we create a state object of the student data
  const [showStudentData, setShowStudentData] = useState({
    id:'',
    first_name:'',
    second_name:'',
    gender:'',
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

  // delete student
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

  // edit student
  const editStudentData =student=>{
    setShowStudentTable(false)
    setShowStudentData(student);
  }
// 
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setShowStudentData({
    ...showStudentData,
    [name]: value,
  });
};
// Handle Edit Staff
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
      fetchStudentDetails()    // fetching the data from the server again to the UI or auto refresh
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

return (
  <>
  {/* using the ternary operator to show and hide table on click of edit button*/}
  { showStudentTable ?
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
            <th>Actions</th>
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
    :
<Form onSubmit={handleEditStudentData}>
        <h4>Update Selected Student</h4>
 <Form.Group style={{marginTop:'25px'}}> 
   <Form.Control type="text"  name="first_name" value={showStudentData.first_name} onChange={handleInputChange} />
 </Form.Group>
 <Form.Group style={{marginTop:'5px'}}> 
   <Form.Control type="text"   name="second_name"  value={showStudentData.second_name} onChange={handleInputChange}  />
 </Form.Group>
 <Form.Group style={{marginTop:'5px'}}> 
   <Form.Control type="text"   name="gender" value={showStudentData.gender} onChange={handleInputChange}   />
 </Form.Group>

 <Button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '50%' }}> Update Selected Student </Button>
 <Button  type="submit" variant="outline-danger" style={{marginTop:'15px', width: '50%' }} onClick={()=>{setShowStudentTable(true)}}> Cancel </Button>

</Form>
  }
  </>
  );
};

export default Students;
