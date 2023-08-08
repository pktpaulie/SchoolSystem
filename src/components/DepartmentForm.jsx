import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const API_URL = 'https://school-api-2wqk.onrender.com/api/departments/';

const DepartmentForm = () => {
    const [formData, setFormData] = useState({
        department_name: '',
        staff: '',
        head_of_department: '',
        courses_in_department: '',
      });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // The department data was successfully created on the server.
        console.log('Department data created successfully!');
        // You can perform any necessary actions here after successful POST.
      } else {
        // The server returned an error response.
        const responseData = await response.json();
        console.error('Failed to create department data on the server:', responseData);
      }
    } catch (error) {
      // An error occurred during the API call.
      console.error('Error creating department data:', error);
    }
  };

  return (
    <>
         <form onSubmit={handleSubmit}>
 
 
      {/* ...form fields */} 
      <h4>Register New Department</h4>
      <Form.Group style={{marginTop:'25px'}}> 
        <Form.Control type="text"  id="department_name" name="department_name" placeholder="Department Name"  value={formData.department_name} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group style={{marginTop:'5px'}}> 
        <Form.Control type="text"  id="staff" name="staff" placeholder="Staff Name"  value={formData.staff} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group style={{marginTop:'5px'}}> 
        <Form.Control type="text"  id="head_of_department" name="head_of_department" placeholder="Head of Department"  value={formData.head_of_department} onChange={handleInputChange} />
      </Form.Group>
      <Form.Group style={{marginTop:'5px'}}> 
        <Form.Control type="text"   id="courses_in_department" name="courses_in_department" placeholder="Courses in Department"  value={formData.courses_in_department} onChange={handleInputChange} />
      </Form.Group>
 
     
      <Button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '100%' }}> Register New Department </Button>
   
    </form>
      </>
    );
  }

export default DepartmentForm;