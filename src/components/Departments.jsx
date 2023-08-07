import React, { useEffect, useState } from 'react';

function Departments() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  async function fetchDataFromBackend() {
    try {
      const response = await fetch('https://school-api-2wqk.onrender.com/api/departments/');
      const responseData = await response.json();
      console.log('Data from API:', responseData);
      setData(responseData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>All Departments:</h2>
      <table>
        <thead>
          <tr>
            <th>Department Name</th>
            <th>Staff</th>
            <th>Head of Department</th>
            <th>Courses in Department</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.department_name}</td>
              <td>{item.staff}</td>
              <td>{item.head_of_department}</td>
              <td>{item.courses_in_department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Departments;
