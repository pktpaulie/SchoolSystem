import React, { useState, useEffect } from 'react';

const API_URL = 'https://school-api-2wqk.onrender.com/api/courses/';

const Course = () => {
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    fetchCourseData();
  }, []);

  const fetchCourseData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setCourseData(data.results);
    } catch (error) {
      console.error('Error fetching staff data:', error);
    }
  };

  return (
    <div>
      {courseData ? (
        <ul>
          {courseData.map((course) => (
            <li key={course.id}>
              {course.course_name} {course.course_code} - {course.department} {course.duration}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading course data...</p>
      )}
    </div>
  );
};

export default Course;
