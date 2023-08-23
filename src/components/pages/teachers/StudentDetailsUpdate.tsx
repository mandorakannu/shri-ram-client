import { useState, useEffect } from "react";
import "@styles/table.css";
import { IUpdateRecordStudents } from "@customTypes/IUser";
import axios from "axios";

export function StudentDetailsUpdate() {
  const fetchAllStudentsDetails = async () => {
    const res = await axios.get("/api/studentsUpdateRecord");
    setStudentData(res.data);
  };
  const [studentData, setStudentData] = useState<IUpdateRecordStudents[]>([]);

  useEffect(() => {
    fetchAllStudentsDetails();
    return () => {
      setStudentData([]);
    };
  }, []);

  const onSubmitHandler = async (uniqueId: string) => {
    const findStudent = studentData.find(
      (student) => student.uniqueId === uniqueId
    );
    const updatedUser = {
      id: findStudent?.id,
      uniqueId: findStudent?.uniqueId,
      name: findStudent?.name,
      fatherName: findStudent?.fatherName,
      motherName: findStudent?.motherName,
      className: findStudent?.className,
      dateOfBirth: findStudent?.dateOfBirth,
      age: findStudent?.age,
    };
    try {
      const res = await axios.post("/api/studentsUpdateRecord", updatedUser);
      if (res.status === 200) {
        alert("Student Details Updated Successfully");
      } else {
        alert("Student Details Not Updated Successfully");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      {studentData &&
        studentData.map((student) => (
          <section>
            <table
              className="dcf-table dcf-table-responsive dcf-table-bordered dcf-table-striped dcf-w-100%"
              key={student.uniqueId}
            >
              <thead>
                <tr>
                  <th scope="col">User Data</th>
                  <th scope="col">Old</th>
                  <th scope="col">New</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Id</th>
                  <td data-label="Old">{student.uniqueId}</td>
                  <td data-label="New">{student.uniqueId}</td>
                </tr>
                <tr>
                  <th scope="row">Name</th>
                  <td data-label="Old">{student.name}</td>
                  <td data-label="New">{student.name}</td>
                </tr>
                <tr>
                  <th scope="row">Father Name</th>
                  <td data-label="Old">{student.fatherName}</td>
                  <td data-label="New">{student.fatherName}</td>
                </tr>
                <tr>
                  <th scope="row">Mother Name</th>
                  <td data-label="Old">{student.motherName}</td>
                  <td data-label="New">{student.motherName}</td>
                </tr>
                <tr>
                  <th scope="row">Class</th>
                  <td data-label="Old">{student.className}</td>
                  <td data-label="New">{student.className}</td>
                </tr>
                <tr>
                  <th scope="row">Date Of Birth</th>
                  <td data-label="Old">{student.dateOfBirth}</td>
                  <td data-label="New">{student.dateOfBirth}</td>
                </tr>
                <tr>
                  <th scope="row">Age</th>
                  <td data-label="Old">{student.age}</td>
                  <td data-label="New">{student.age}</td>
                </tr>
              </tbody>
            </table>
            <button
              className="bg-blue-500 text-white py-2 px-6 m-4 rounded-sm"
              onClick={() => onSubmitHandler(student.uniqueId as string)}
            >
              Submit
            </button>
          </section>
        ))}
    </>
  );
}
