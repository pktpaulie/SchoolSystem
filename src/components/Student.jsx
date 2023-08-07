import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const API_URL = 'https://school-api-2wqk.onrender.com/api/students/';

const Student = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    second_name: '',
    gender: null, 
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
        // The Student details was successfully created on the server.
        console.log('Student details created successfully!');
        // You can perform any necessary actions here after successful POST.
      } else {
        // The server returned an error response.
        const responseData = await response.json();
        console.error('Failed to create Student details on the server:', responseData);
      }
    } catch (error) {
      // An error occurred during the API call.
      console.error('Error creating Student details:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
        <h4>Register New Student</h4>
 
 {/* ...form fields */}  
 <Form.Group style={{marginTop:'25px'}}> 
   <Form.Control type="text"  id="first_name" name="first_name" placeholder="First Name"  value={formData.first_name} onChange={handleInputChange} />
 </Form.Group>
 <Form.Group style={{marginTop:'5px'}}> 
   <Form.Control type="text"  id="second_name" name="second_name" placeholder="Second Name"  value={formData.second_name} onChange={handleInputChange} />
 </Form.Group>
 <Form.Group style={{marginTop:'5px'}}> 
   <Form.Control type="text"  id="gender" name="gender" placeholder="Gender"  value={formData.gender || ''} onChange={handleInputChange} />
 </Form.Group>
 
 
 <Button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '100%' }}> Register New Student </Button>

</form>
    </>
  );
};

export default Student;
