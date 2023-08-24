import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";
import {
  showAge,
  showDateOfBirth,
  showFatherName,
  showMotherName,
  showStudentName,
} from "@functions/showStudentEditFields";

export function StudentEditDetails() {
  const user = useSelector((state: RootState) => state.user);
  const [submit, setSubmitBtn] = useState("Submit");
  const [studentDetails, setStudentDetails] = useState({
    name: "",
    motherName: "",
    fatherName: "",
    age: "",
    dateOfBirth: "",
  });
  const { name, motherName, fatherName, age, dateOfBirth } = studentDetails;
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudentDetails({ ...studentDetails, [name]: value });
  };
  let studentNameCheck,
    motherNameCheck,
    fatherNameCheck,
    ageCheck,
    dobCheck,
    submitButton;
  const showSubmitButton = () => {
    studentNameCheck = document.getElementById(
      "studentNameCheck"
    ) as HTMLInputElement;
    motherNameCheck = document.getElementById(
      "motherNameCheck"
    ) as HTMLInputElement;
    fatherNameCheck = document.getElementById(
      "fatherNameCheck"
    ) as HTMLInputElement;
    ageCheck = document.getElementById("ageCheck") as HTMLInputElement;
    dobCheck = document.getElementById("dobCheck") as HTMLInputElement;
    submitButton = document.getElementById("submitButton") as HTMLButtonElement;
    if (
      !studentNameCheck ||
      !motherNameCheck ||
      !fatherNameCheck ||
      !ageCheck ||
      !dobCheck ||
      !submitButton
    )
      return new Error("Element is not found");
    if (
      studentNameCheck.checked ||
      motherNameCheck.checked ||
      fatherNameCheck.checked ||
      ageCheck.checked ||
      dobCheck.checked
    ) {
      submitButton.classList.remove("hidden");
    } else {
      submitButton.classList.add("hidden");
    }
  };
  const submitRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, motherName, fatherName, age, dateOfBirth } = studentDetails;
    try {
      if (name || motherName || fatherName || age || dateOfBirth) {
        const res = await axios.post("/api/studentUpdateDetails", {
          uniqueId: "root",
          name,
          motherName,
          fatherName,
          age,
          dateOfBirth,
          oldName: user.name,
          oldMotherName: user.motherName,
          oldFatherName: user.fatherName,
          oldAge: user.age,
          oldDateOfBirth: user.dateOfBirth,
        });
        if (!res || res.status !== 200) {
          alert("Something went wrong!");
          setSubmitBtn("Submit");
        } else {
          alert("Details will be verified by teachers.");
          setSubmitBtn("Submit");
        }
      } else {
        alert("Enter some data first!");
        setSubmitBtn("Submit");
      }
    } catch (error) {
      alert("Something went wrong");
      setSubmitBtn("Submit");
    }
  };
  return (
    <>
      <h1 className="text-center font-bold uppercase text-2xl my-10">
        Detail Update Portal
      </h1>
      <div className="bg-blue-100 m-10 border-2 border-blue-400 rounded">
        <h1 className="text-center font-sans my-5">
          Select the field you wants to updates.
        </h1>
        <form method="post" onSubmit={submitRequest}>
          <div className="max-sm:grid max-sm:place-content-center flex justify-evenly">
            <div>
              <input
                type="checkbox"
                name="studentName"
                id="studentNameCheck"
                className="accent-green-300"
                onClick={() => {
                  showStudentName();
                  showSubmitButton();
                }}
              />
              <span className="mx-1">Name</span>
            </div>
            <div className="">
              <input
                type="checkbox"
                name="studentName"
                id="motherNameCheck"
                className="accent-green-300"
                onClick={() => {
                  showMotherName();
                  showSubmitButton();
                }}
              />
              <span className="mx-1 ">Mother name</span>
            </div>
            <div className="">
              <input
                type="checkbox"
                name="studentName"
                id="fatherNameCheck"
                className="accent-green-300"
                onClick={() => {
                  showFatherName();
                  showSubmitButton();
                }}
              />
              <span className="mx-1 ">Father name</span>
            </div>
            <div className="">
              <input
                type="checkbox"
                name="studentName"
                id="ageCheck"
                className="accent-green-300"
                onClick={() => {
                  showAge();
                  showSubmitButton();
                }}
              />
              <span className="mx-1 ">Age</span>
            </div>
            <div className="">
              <input
                type="checkbox"
                name="studentName"
                id="dobCheck"
                className="accent-green-300"
                onClick={() => {
                  showDateOfBirth();
                  showSubmitButton();
                }}
              />
              <span className="mx-1">Date Of Birth</span>
            </div>
          </div>
          <div className="flex justify-center flex-col max-sm:justify-center items-center lg:mt-6 gap-6 my-6">
            <input
              type="text"
              name="name"
              id="studentNameUpdate"
              placeholder="Enter your name"
              className="hidden px-3 py-2"
              value={name}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="motherName"
              id="motherNameUpdate"
              placeholder="Enter your mother name"
              className="hidden px-3 py-2"
              value={motherName}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="fatherName"
              id="fatherNameUpdate"
              placeholder="Enter your father name"
              className="hidden px-3 py-2"
              value={fatherName}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="age"
              id="ageUpdate"
              placeholder="Enter your age"
              className="hidden px-3 py-2"
              value={age}
              onChange={onChangeHandler}
            />
            <input
              type="text"
              name="dateOfBirth"
              id="dobUpdate"
              placeholder="Enter your date of birth"
              className="hidden px-3 py-2"
              value={dateOfBirth}
              onChange={onChangeHandler}
            />
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              type="submit"
              className="hidden border-2 my-3 border-blue-500 bg-blue-400 text-white px-1 py-2 rounded w-20"
              id="submitButton"
            >
              {submit}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
