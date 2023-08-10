import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';

const API_URL = 'https://school-api-2wqk.onrender.com/api/clubs/';

const Club = () => {
  const [clubData, setClubData] = useState(null);

  useEffect(() => {
    fetchClubData();
  }, []);

  const fetchClubData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setClubData(data.results);
    } catch (error) {
      console.error('Error fetching club data:', error);
    }
  };
// club delete logic
const deleteclub = id => {
  fetch(`https://school-api-2wqk.onrender.com/api/clubs/${id}`, {
    method: 'DELETE'
  })
  .then(res => { 
      fetchClubData(); // This function automatically refresh this component or (UI) and gets new data
      alert('Club deleted successfully');
   
  })
  .catch(error => {
    console.error(error);
    alert('An error occurred while deleting the club');
  });
}

  return (
    <>
 <div>
        <h2>Registered School Clubs</h2>
  {clubData ? (
     <Table striped bordered hover style={{ width: '100%' }}>
       <thead>
        <tr>
          <th>ID</th>
          <th>Club Name</th>
          <th>Head of Club</th> 
          <th>ACTIONS</th> 
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clubData.map((club) => (
          <tr key={club.id}>
            <td>{club.id}</td>
            <td>{club.club_name}</td>
            <td>{club.head_of_club}</td> 
            <td style={{margin:"5%"}}> 
                <Button style={{marginRight:"5%", width:"30%"}} variant='outline-primary'>Edit</Button>
                <Button style={{marginRight:"5%", width:"30%"}}  
                variant='outline-danger' onClick={() => deleteclub(club.id)} >Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  ) : (
    <p>Loading Club Details from DB ...</p>
  )}
</div>
    </>
  );
};

export default Club;
