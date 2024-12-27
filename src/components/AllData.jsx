import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import StudentCard from "./StudentCard";
function AllData() {
  const [studentData, setStudentData] = useState([]);
  useEffect(() => {
    axios
      .get("https://sabkadetails-backend.onrender.com/api/users")
      .then((resp) => setStudentData(resp.data))
        .catch((err) => console.log(err));  
  });


  return (
    <>
      <div className="">
        <div className="flex justify-center">
          <h1 className=" font-extrabold text-4xl text-green-800 mt-5 underline underline-offset-4 decoration-double	">
            All Students Data{" "}
          </h1>
        </div>
      </div>
<div className="flex flex-wrap justify-center gap-20 mt-16 px-24 h-max w-full ">
    {studentData.map((student) => (
        <div key={student._id}>
        <StudentCard 
        studentName={student.name}
        studentRoll={student.rollNo}
        studentEmail={student.email}
        studentDOB={student.dob}
        studentContact={student.phoneNo}
        studentCourse={student.course}
        /></div>
    ))
    
    }

</div>
      
      
    </>
  );
}

export default AllData;
