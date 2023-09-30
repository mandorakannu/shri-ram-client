import axios from "axios";
import { FormEvent, useState, useRef, useContext } from "react";
import { useVerifyUser } from "@hooks/useVerifyUser";
import { Auth } from "@components/Auth";
import { Loader } from "@components/Loader";
import { DialogModel } from "@components/ui/UserCreateModel";
import { UserCreateContext } from "context/UserCreateContext";
export default function AddStudent() {
  const modelContext = useContext(UserCreateContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const motherNameRef = useRef<HTMLInputElement>(null);
  const fatherNameRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const mobileNumberRef = useRef<HTMLInputElement>(null);
  const classRef = useRef<HTMLSelectElement>(null);

  const [loader, setLoader] = useState<JSX.Element | string>("Submit");
  const [dialog, setDialog] = useState({
    title: "",
    description: "",
    isOpen: false,
  });

  const [modelPass, setModelPass] = useState({
    uniqueId: "",
    password: "",
  });

  if (!useVerifyUser()) return <Auth />;
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

  const submitNewStudent = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoader(<Loader />);
    if (
      !nameRef.current ||
      !motherNameRef.current ||
      !fatherNameRef.current ||
      !dateOfBirthRef.current ||
      !ageRef.current ||
      !mobileNumberRef.current ||
      !classRef.current
    )
      return alert("Please fill all the fields");
    const name = nameRef.current.value;
    const motherName = motherNameRef.current.value;
    const fatherName = fatherNameRef.current.value;
    const dateOfBirth = dateOfBirthRef.current.value;
    const age = ageRef.current.value;
    const mobileNumber = mobileNumberRef.current.value;
    const className = classRef.current.value;
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
        const studentDetails = {
          name,
          motherName,
          fatherName,
          dateOfBirth,
          age,
          mobileNumber,
          className,
        };
        const res = await axios.post("/api/addStudent", studentDetails);
        modelContext?.isModelOpenFxn();
        if (res.status === 400) {
          setDialog({
            title: "Student Already Exist",
            description: "Please try again with different details",
            isOpen: modelContext?.value as boolean,
          });
        } else {
          setDialog({
            title: "Add Student Successfully!",
            description:
              "Kindly share this password and uniqueId to the respective student. This will not generate again!",
            isOpen: modelContext?.value as boolean,
          });
          setModelPass({
            uniqueId: res.data.uniqueId,
            password: res.data.password,
          });
        }
      } catch (err: unknown) {
        setDialog({
          title: "HTTP CODE: 500",
          description:
            "Internal Server Error. Please try again later. If problem persists, kindly contact the developer",
          isOpen: modelContext?.value as boolean,
        });
      } finally {
        setLoader("Submit");
        nameRef.current.value = "";
        motherNameRef.current.value = "";
        fatherNameRef.current.value = "";
        dateOfBirthRef.current.value = "";
        ageRef.current.value = "";
        mobileNumberRef.current.value = "";
        classRef.current.value = "";
      }
    }
  };
  return (
    <>
      {modelContext?.value && (
        <DialogModel
          title={dialog.title}
          description={dialog.description}
          isOpen={modelContext?.value as boolean}
          password={modelPass.password}
          uniqueId={modelPass.uniqueId}
        />
      )}
      <div className="bg-gray-100 flex flex-col items-center h-max pb-5">
        <h1 className="text-center py-5 font-semibold text-2xl">
          Add Students
        </h1>
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
                ref={nameRef}
                placeholder="Student name"
                className="shadow border-2 rounded border-black px-2 outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Mother name</label>
              <input
                type="text"
                name="motherName"
                ref={motherNameRef}
                placeholder="Mother name"
                className="shadow border-2 rounded border-black px-2 outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Father name</label>
              <input
                type="text"
                name="fatherName"
                ref={fatherNameRef}
                placeholder="Father name"
                className="shadow border-2 rounded border-black px-2 outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Date Of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                ref={dateOfBirthRef}
                className="shadow border-2 rounded border-black px-2 outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Age</label>
              <input
                type="number"
                name="age"
                ref={ageRef}
                placeholder="Age"
                className="shadow border-2 rounded border-black px-2 outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Mobile Number</label>
              <input
                type="number"
                name="mobileNumber"
                ref={mobileNumberRef}
                placeholder="Mobile no."
                className="shadow border-2 rounded border-black px-2 outline-none py-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Class</label>
              <select
                name="className"
                ref={classRef}
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
              className="flex justify-center items-center mx-auto border-2 my-6 border-blue-500 bg-blue-500 text-white px-1 py-2 rounded w-20 text-center"
              id="submitButton"
            >
              {loader}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
