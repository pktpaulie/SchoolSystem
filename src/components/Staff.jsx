import React, { useState, useEffect } from 'react';
import { Form, Table, Button } from 'react-bootstrap';

const API_URL = 'https://school-api-2wqk.onrender.com/api/staff/';

const Staff = () => {
  const [staffData, setStaffData] = useState(null);
  // edit staff
  const [showStaffTable, setShowStaffTable] = useState(true);
  const [formData, setFormData] = useState({
    id: '',
    first_name: '',
    second_name: '',
    gender:null,
    age: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    fetchStaffData();
  }, []);

  // Fecthing data function from back-end API
  const fetchStaffData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStaffData(data.results);
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  // delete staff function
  const deleteStaff = id => {
    fetch(`https://school-api-2wqk.onrender.com/api/staff/${id}`, {
      method: 'DELETE'
    })
    .then(res => { 
        fetchStaffData(); // This function automatically refresh this component or (UI) and gets new data
        alert('Staff member deleted successfully');
     
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while deleting the Staff');
    });
  }


  // Edit staff function
  const editStaff =staff=>{
    setShowStaffTable(false)
    setFormData(staff)
  }
//
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // Handle Edit Staff
  const handleEditStaff = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://school-api-2wqk.onrender.com/api/staff/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        fetchStaffData()
        setShowStaffTable(true)
        // The staff data was successfully created on the server.
        console.log('Staff data Updated successfully!');
        // You can perform any necessary actions here after successful POST.
      } else {
        // The server returned an error response.
        const responseData = await response.json();
        console.error('Failed to Update staff data on the server:', responseData);
      }
    } catch (error) {
      // An error occurred during the API call.
      console.error('Error Updating staff data:', error);
    }
  };

return (
  <>
{showStaffTable?
  <div>
          <h2>Registered School Staff Team</h2>
    {staffData ? (
      <Table striped bordered hover style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Second Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {staffData.map((staff) => (
            <tr key={staff.id}>
              <td>{staff.id}</td>
              <td>{staff.first_name}</td>
              <td>{staff.second_name}</td>
              <td>{staff.gender}</td>
              <td>{staff.age}</td>
              <td>{staff.email}</td>
              <td>{staff.department}</td>
              <td style={{margin:"5%"}}> 
                <Button style={{marginRight:"5%", width:"30%"}} variant="outline-primary" onClick={()=> editStaff(staff)} >Edit</Button>
                <Button variant='outline-danger' onClick={() => deleteStaff(staff.id)} >Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    ) : (
      <p>Loading Staff Details from DB ...</p>
    )}
  </div>
: 
  <Form onSubmit={handleEditStaff}>
  {/* EditStaff form */}
  {/* ...form fields */} 
  <h4>Edit Selected Staff</h4>
  <Form.Group style={{marginTop:'25px'}}> 
    <Form.Control type="text"   name="first_name" value={formData.first_name} onChange={handleInputChange}  />
  </Form.Group>
  <Form.Group style={{marginTop:'5px'}}> 
    <Form.Control type="text" name="second_name" value={formData.second_name} onChange={handleInputChange} />
  </Form.Group>
  <Form.Group style={{marginTop:'5px'}}> 
    <Form.Control type="text"  name="gender" value={formData.gender} onChange={handleInputChange}  />
  </Form.Group>
  <Form.Group style={{marginTop:'5px'}}> 
    <Form.Control type="text"    name="age" value={formData.age}  onChange={handleInputChange} />
  </Form.Group>
  <Form.Group style={{marginTop:'5px'}}> 
    <Form.Control type="text"  name="email" value={formData.email} onChange={handleInputChange}  />
  </Form.Group>
  <Form.Group style={{marginTop:'5px'}}> 
    <Form.Control type="text"   name="department" value={formData.department} onChange={handleInputChange}  />
  </Form.Group>
  <Button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '50%' }}> Update Staff </Button>
  <Button  type="submit" variant="outline-danger" style={{marginTop:'15px', width: '50%' }} onClick={()=> setShowStaffTable(true)}> Cancel </Button>

  </Form> 
  }

  </>
  );
};

export default Staff;
