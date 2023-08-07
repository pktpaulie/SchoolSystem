import React, { useState } from 'react';

const API_URL = 'https://school-api-2wqk.onrender.com/api/staff/';

const StaffForm = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    second_name: '',
    gender: null,
    age: '',
    email: '',
    department: '',
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
        // The staff data was successfully created on the server.
        console.log('Staff data created successfully!');
        // You can perform any necessary actions here after successful POST.
      } else {
        // The server returned an error response.
        const responseData = await response.json();
        console.error('Failed to create staff data on the server:', responseData);
      }
    } catch (error) {
      // An error occurred during the API call.
      console.error('Error creating staff data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{margin: "22px 35px"}}>
        <label htmlFor="first_name">First Name</label><br />
        <input style={{height: "28px", width: "250px", border: "2px solid rgba(255, 255, 255", margin: "10px 0px", borderRadius: "5px"}}
          type="text"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleInputChange}
        />
      </div>
      <div style={{margin: "22px 35px"}}>
        <label htmlFor="second_name">Second Name</label><br />
        <input style={{height: "28px", width: "250px", border: "1.5px solid rgba(255, 255, 255", margin: "10px 0px", borderRadius: "5px"}}
          type="text"
          id="second_name"
          name="second_name"
          value={formData.second_name}
          onChange={handleInputChange}
        />
      </div>
      <div style={{margin: "22px 35px"}}>
        <label htmlFor="gender">Gender</label><br />
        <input style={{height: "28px", width: "250px", border: "1.5px solid rgba(255, 255, 255", margin: "10px 0px", borderRadius: "5px"}}
          type="text"
          id="gender"
          name="gender"
          value={formData.gender || ''}
          onChange={handleInputChange}
        />
      </div>
      <div style={{margin: "22px 35px"}}>
        <label htmlFor="age">Age</label><br />
        <input style={{height: "28px", width: "250px", border: "1.5px solid rgba(255, 255, 255", margin: "10px 0px", borderRadius: "5px"}}
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>
      <div style={{margin: "22px 35px"}}>
        <label htmlFor="email">Email</label><br />
        <input style={{height: "28px", width: "250px", border: "1.5px solid rgba(255, 255, 255", margin: "10px 0px", borderRadius: "5px"}}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div style={{margin: "22px 35px"}}>
        <label htmlFor="department">Department</label><br />
        <input style={{height: "28px", width: "250px", border: "1.5px solid rgba(255, 255, 255", margin: "10px 0px", borderRadius: "5px"}}
          type="text"
          id="department"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
        />
      </div>
      <button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '100%' }}>Creat New Staff Member</button>
    </form>
  );
};

export default StaffForm;
