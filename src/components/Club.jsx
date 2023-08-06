import React, { useState, useEffect } from 'react';

const API_URL = 'https://school-api-2wqk.onrender.com/api/clubs/';

const Club = () => {
  const [club, setClub] = useState(null);

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
    <div>
      {club ? (
        <ul>
          {clubData.map((club) => (
            <li key={club.id}>
              {club.club_name} - {club.head_of_club}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading club data...</p>
      )}
    </div>
  );
};

export default Club;
