import React, { useState } from 'react';

const ClubForm = () => {
  const [clubName, setClubName] = useState('');
  const [headOfClub, setHeadOfClub] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Create a data object with the form values
    const newClub = {
      club_name: clubName,
      head_of_club: headOfClub,
    };

    try {
      const response = await fetch('https://school-api-2wqk.onrender.com/api/clubs/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClub),
      });

      if (!response.ok) {
        throw new Error('Failed to create club.');
      }

      // If the POST request is successful, clear the form inputs
      setClubName('');
      setHeadOfClub('');
    } catch (error) {
      console.error('Error creating club:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Club Name:</label>
        <input type="text" value={clubName} onChange={(e) => setClubName(e.target.value)} required />
      </div>
      <div>
        <label>Head of Club:</label>
        <input type="text" value={headOfClub} onChange={(e) => setHeadOfClub(e.target.value)} required />
      </div>
      
      <button  type="submit" variant="outline-primary" style={{marginTop:'15px', width: '100%' }}>Create New Club</button>
    </form>
  );
};

export default ClubForm;