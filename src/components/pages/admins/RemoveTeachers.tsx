import axios from "axios";
import { useState, ChangeEvent } from "react";

export function RemoveTeachers() {
  const [teacher, setTeacher] = useState({
    name: "",
    uniqueId: "",
  });
  const [getTeacher, setGetTeacher] = useState({
    mobileNumber: "",
    SubjectProfile: "",
  });
  const [loading, setLoading] = useState(true);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setTeacher({ ...teacher, [e.target.name]: e.target.value });

  const findTeacherDetails = async () => {
    try {
      const res = await axios.get(
        `/admin/findTeacher/${teacher.uniqueId}-${teacher.name}`
      );
      if (res.status === 200) {
        setGetTeacher(res.data);
        setLoading(false);
      } else {
        alert("Teacher not found");
      }
    } catch (error) {
      alert("Internal server error");
    }
  };

  const deleteTeacher = async () => {
    try {
      const res = await axios.delete(
        `/admin/deleteTeacher/${teacher.uniqueId}`
      );
      if (res.status === 200) {
        alert("Teacher deleted successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error: unknown) {
      alert("Internal server error");
    }
  };
  return (
    <>
      <h1 className="text-center font-semibold text-2xl my-5">
        Remove Teachers
      </h1>
      {loading && (
        <div className="flex flex-col justify-center items-center py-20">
          <div className="flex flex-col gap-2">
            <span>Enter teacher name</span>
            <input
              type="text"
              name="name"
              id="teacherName"
              value={teacher.name}
              onChange={onChangeHandler}
              placeholder="Teacher name"
              className="bg-gray-200 border-2 outline-none p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <span>Enter teacher uniqueId</span>
            <input
              type="search"
              name="uniqueId"
              id="uniqueId"
              value={teacher.uniqueId}
              onChange={onChangeHandler}
              placeholder="UniqueId"
              className="bg-gray-200 border-2 outline-none p-2 rounded"
            />
          </div>
          <button
            onClick={findTeacherDetails}
            type="submit"
            className="bg-blue-400 outline-blue-200 hover:outline-none px-6 py-2 mx-5 text-white"
          >
            Submit
          </button>
        </div>
      )}
      {!loading && (
        <>
          <div className="dcf-overflow-x-auto py-20" tabIndex={0}>
            <table className="dcf-table dcf-table-bordered dcf-table-striped dcf-w-100%">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">{teacher.name}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Unique Id</th>
                  <td>{teacher.uniqueId}</td>
                </tr>
                <tr>
                  <th scope="row">Mobile Number</th>
                  <td>{getTeacher.mobileNumber}</td>
                </tr>
                <tr>
                  <th scope="row">Subject Expertise</th>
                  <td>{getTeacher.SubjectProfile}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            type="submit"
            onClick={deleteTeacher}
            className="bg-red-400 outline-red-200 hover:outline-none px-6 py-2 m-5 text-white"
          >
            Delete Teacher
          </button>
        </>
      )}
    </>
  );
}
