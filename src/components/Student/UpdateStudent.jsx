import React, { Component } from 'react'

const UpdateStudent =()=> {


const [showStudentTable, setShowStudentTable] = useState(true);

  // edit student
  const editStudentData =student=>{
    setShowStudentTable(false)
    setShowStudentData(student);
  }

 
    return (
      <div>UpdateStudent</div>
    );
  };
 

export default UpdateStudent;
