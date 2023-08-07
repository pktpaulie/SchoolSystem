import React, {useState} from 'react'


async function sendFormDataToBackend(formData) {
 
    const response = await fetch('https://school-api-2wqk.onrender.com/api/departments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    console.log('Student Data to Save:', responseData);

}




export default function DepartmentForm() {
    const [formData, setFormData] = useState({
      department_name: '',
      staff: '',
      head_of_department: '',
      courses_in_department: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Send the form data to the backend
      sendFormDataToBackend(formData);
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Department name"
              name="department_name"
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
  

