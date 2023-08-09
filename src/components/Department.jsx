import React, { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';


const API_URL = 'https://school-api-2wqk.onrender.com/api/departments/';

const Department = () => {
  const [departmentData, setDepartmentData] = useState(null);

  useEffect(() => {
    fetchDepartmentData();
  }, []);

  const fetchDepartmentData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setDepartmentData(data.results);
    } catch (error) {
      console.error('Error fetching department data:', error);
    }
  };

  // Department delete logic
 
  const deleteDepartment = id => {
    fetch(`https://school-api-2wqk.onrender.com/api/departments/${id}`, {
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

  return (
    <>
    <div>
        <h2>Registered School Departments</h2>
  {departmentData ? (
     <Table striped bordered hover style={{ width: '100%' }}>
       <thead>
        <tr>
          <th>ID</th>
          <th>Department Name</th>
          <th>Staff Name</th>
          <th>Head Of Department</th>
          <th>Courses in Department</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {departmentData.map((department) => (
          <tr key={department.id}>
            <td>{department.id}</td>
            <td>{department.department_name}</td>
            <td>{department.staff}</td>
            <td>{department.head_of_department}</td>
            <td>{department.courses_in_department}</td>
            <td style={{margin:"5%"}}> 
             <Button variant='outline-primary' style={{marginRight:"5%", width:"30%"}}>EDIT</Button>
             <Button variant='outline-danger' onClick={() => deleteDepartment(department.id)}>DELETE</Button>
             
            </td>
           </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <p>Loading Departments Details from DB ...</p>
  )}
</div>
    </>
  );
};

export default Department;