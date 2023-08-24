import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";

export default function AddStudent() {
  const [userData, setUserData] = useState({
    name: "",
    motherName: "",
    fatherName: "",
    dateOfBirth: "",
    age: "",
    mobileNumber: "",
    className: "",
  });
  const classes = [
    "1st",
    "2nd",
    "3rd",
    "4th",
    "5th",
    "6th",
    "7th",
    "8th",
    "9th",
    "10th",
  ];
  const onOptionChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setUserData({ ...userData, className: e.target.value });
  };
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitNewStudent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {
      name,
      motherName,
      fatherName,
      dateOfBirth,
      age,
      mobileNumber,
      className,
    } = userData;
    if (
      !name ||
      !motherName ||
      !fatherName ||
      !dateOfBirth ||
      !age ||
      !mobileNumber ||
      !className
    ) {
      alert("Please fill all the fields");
      return;
    } else {
      try {
        const res = await axios.post("/api/addStudent", userData);
        if (res.status === 400) {
          window.alert("Invalid Registration, Student Already Exists!");
        } else {
          console.log(res.data);
          alert(
            `Kindly share this password and uniqueId to the respective student. This will not generate again! \n\n Password: ${res.data.password}\n UniqueId: ${res.data.uniqueId}`
          );
        }
      } catch (err: unknown) {
        alert("Interval Server Error");
      }
    }
  };
  return (
    <div className="bg-gray-100 flex flex-col items-center h-max pb-5">
      <h1 className="text-center py-5 font-semibold text-2xl">Add Students</h1>
      <div className="flex flex-col items-center">
        <form
          method="post"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 py-20"
          onSubmit={submitNewStudent}
        >
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={userData.name}
              onChange={onChangeHandler}
              placeholder="Student name"
              className="shadow border-2 rounded border-black px-2 outline-none py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Mother name</label>
            <input
              type="text"
              name="motherName"
              value={userData.motherName}
              onChange={onChangeHandler}
              placeholder="Mother name"
              className="shadow border-2 rounded border-black px-2 outline-none py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Father name</label>
            <input
              type="text"
              name="fatherName"
              value={userData.fatherName}
              onChange={onChangeHandler}
              placeholder="Father name"
              className="shadow border-2 rounded border-black px-2 outline-none py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Date Of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={userData.dateOfBirth}
              onChange={onChangeHandler}
              className="shadow border-2 rounded border-black px-2 outline-none py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={userData.age}
              onChange={onChangeHandler}
              placeholder="Age"
              className="shadow border-2 rounded border-black px-2 outline-none py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Mobile Number</label>
            <input
              type="number"
              name="mobileNumber"
              value={userData.mobileNumber}
              onChange={onChangeHandler}
              placeholder="Mobile no."
              className="shadow border-2 rounded border-black px-2 outline-none py-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Class</label>
            <select
              name="className"
              value={userData.className}
              onChange={onOptionChangeHandler}
              className="shadow border-2 rounded border-black px-2 outline-none py-2"
            >
              <option>Select Class</option>
              {classes.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="mx-auto border-2 my-6 border-blue-500 bg-blue-500 text-white px-1 py-2 rounded w-20 text-center"
            id="submitButton"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
