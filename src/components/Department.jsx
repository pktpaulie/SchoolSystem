import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


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