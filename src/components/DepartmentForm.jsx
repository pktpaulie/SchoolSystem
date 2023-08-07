import React, { useState } from 'react';

const API_URL = 'https://school-api-2wqk.onrender.com/api/department/';

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
    <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder="Department name" name="department_name"
              value={formData.department_name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Staff"
              name="staff"
              value={formData.staff}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Head of department"
              name="head_of_department"
              value={formData.head_of_department}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Courses in department"
              name="courses_in_department"
              value={formData.courses_in_department}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
<<<<<<< HEAD
  

=======

export default DepartmentForm;
>>>>>>> 26e99580578d27a4413251f9f3922a49e089d131
