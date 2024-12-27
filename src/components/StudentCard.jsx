import React from "react";

function StudentCard(props) {
  const {
    studentName,
    studentRoll,
    studentEmail,
    studentDOB,
    studentContact,
    studentCourse,
  } = props;
  return (
    <div>
      <div className="bg-white shadow-lg  shadow-green-300  drop-shadow-xl  rounded-xl py-8 md:px-6 w-96  px-2 ">
        <h1 className=" text-green-900 text-center font-bold text-xl">
          {studentName}
        </h1>
        <ul className="flex flex-col gap-2 mt-4">
          <li className=" text-zinc-800">
            {" "}
            <span className="font-bold ">Roll No.:</span> {studentRoll}
          </li>
          <li className=" text-zinc-800">
            <span className="font-bold "> Email:</span> {studentEmail}
          </li>
          <li className=" text-zinc-800">
            {" "}
            <span className="font-bold "> DOB:</span> {studentDOB}
          </li>
          <li className=" text-zinc-800">
            {" "}
            <span className="font-bold "> Contact No.: </span>
            {studentContact}
          </li>
          <li className=" text-zinc-800">
            {" "}
            <span className="font-bold ">Course:</span> {studentCourse}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StudentCard;
