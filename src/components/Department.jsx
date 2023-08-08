import React, { useState, useEffect } from 'react';
import { Button, Form, Table } from 'react-bootstrap';


const API_URL = 'https://school-api-2wqk.onrender.com/api/departments/';

const Department = () => {
  const [departmentData, setDepartmentData] = useState(null);
  const [departmentTable, setdepartmentTable] = useState(true);
  const [updateDepartment, setupdateDepartment] = useState({id:'', department_name:'', staff:'', courses_in_deaprtment:'', head_of_department:'',});

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
        fetchDepartmentData(); // This function automatically refresh this component or (UI) and gets new data
        alert('Staff member deleted successfully');
     
    })
    .catch(error => {
      console.error(error);
      alert('An error occurred while deleting the Staff');
    });
  }


  //edit department
  const editDepartment = department =>{
    setdepartmentTable(false)
    setupdateDepartment(department)
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //set the set to the spread of the data available
    setupdateDepartment({
      ...updateDepartment,
      [name]: value,
    });
  };
  const handleEditDepartmentData = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://school-api-2wqk.onrender.com/api/departments/${updateDepartment.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateDepartment),
      });
  
      if (response.ok) {
        fetchDepartmentData()    // fetching the data from the server again to the UI or auto refresh
        setupdateDepartment(true)  // to automatically change the useState of showStudentTable to be true
        console.log('Student Updated successfully!');
        // You can perform any necessary actions here after successful PUT.
      } else {
        // else for server returned error response.
        const responseData = await response.json();
        console.error('Failed to Update Student data on the server:', responseData);
      }
    } catch (error) {
      // catch error during the API call.
      console.error('Error Updating Student data:', error);
    }
  };
  


  return (
    <>
    { departmentTable ?
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
             <Button variant='outline-primary' style={{marginRight:"5%", width:"30%"}} onClick={()=>editDepartment(department)}>EDIT</Button>
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
  :
  <Form onSubmit={handleEditDepartmentData}>
        <Form.Group style={{marginTop:'25px'}}> 
      <Form.Control type="text"  id="department_name" name="department_name" onChange={handleInputChange} value={updateDepartment.department_name}/>
    </Form.Group>
    <Form.Group style={{marginTop:'5px'}}> 
      <Form.Control type="text"  id="staff" name="staff" onChange={handleInputChange} value={updateDepartment.staff}/>
    </Form.Group>
    <Form.Group style={{marginTop:'5px'}}> 
      <Form.Control type="text"  id="head_of_department" name="head_of_department" onChange={handleInputChange} value={updateDepartment.head_of_department}/>
    </Form.Group>
    <Form.Group style={{marginTop:'5px'}}> 
      <Form.Control type="text"   id="courses_in_department" name="courses_in_department" onChange={handleInputChange} value={updateDepartment.courses_in_department}/>
    </Form.Group>

     
      <Button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '100%' }}> Register New Department </Button>
   
  </Form>
}
    </>
  );
};

export default Department;