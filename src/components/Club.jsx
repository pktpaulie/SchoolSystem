import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

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
        </tr>
      </thead>
      <tbody>
        {clubData.map((club) => (
          <tr key={club.id}>
            <td>{club.id}</td>
            <td>{club.club_name}</td>
            <td>{club.head_of_club}</td> 
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
