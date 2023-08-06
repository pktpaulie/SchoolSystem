import React, { useState, useEffect } from 'react';

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
    <div>
      {departmentData ? (
        <ul>
          {departmentData.map((department) => (
            <li key={department.id}>
              {department.department_name} {department.staff} - {department.head_of_department} - {department.courses_in_department} 
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading department data...</p>
      )}
    </div>
  );
};

export default Department;
