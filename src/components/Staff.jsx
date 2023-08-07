import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

const API_URL = 'https://school-api-2wqk.onrender.com/api/staff/';

const Staff = () => {
  const [staffData, setStaffData] = useState(null);

  useEffect(() => {
    fetchStaffData();
  }, []);

  const fetchStaffData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setStaffData(data.results);
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  return (
    <>
 
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
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <p>Loading Staff Details from DB ...</p>
  )}
</div>
    </>
  );
};

export default Staff;
