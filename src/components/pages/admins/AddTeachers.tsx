import axios from "axios";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { useVerifyUser } from "@hooks/useVerifyUser";
import { Auth } from "@components/Auth";
import { ITeachers } from "@customTypes/IUser";
import { DialogModel } from "@components/ui/UserCreateModel";
import { UserCreateContext } from "context/UserCreateContext";

export function AddTeachers() {
  const modelContext = useContext(UserCreateContext);
  console.log("value", modelContext?.value);
  const [teacher, setTeacher] = useState<ITeachers>({
    name: "",
    motherName: "",
    fatherName: "",
    qualification: "",
    dateOfBirth: "",
    age: 0,
    SubjectProfile: "",
    mobileNumber: 0,
    role: "teacher",
  });
  const [openDialog, setOpenDialog] = useState({
    title: "",
    description: "",
    isOpen: false,
  });
  const [userData, setUserData] = useState({
    uniqueId: "",
    password: "",
  });
  if (!useVerifyUser()) return <Auth />;
  //   onChangeHandler function is used to set the value of the input field to the state
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setTeacher({ ...teacher, [event.target.name]: event.target.value });

  // onSubmitHandler function is used to submit the form to the server
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const {
        name,
        motherName,
        fatherName,
        qualification,
        dateOfBirth,
        age,
        SubjectProfile,
        mobileNumber,
      } = teacher;
      const res = await axios.post("/admin/addTeacher", {
        name,
        motherName,
        fatherName,
        qualification,
        dateOfBirth,
        age,
        SubjectProfile,
        mobileNumber,
      });
      modelContext?.isModelOpenFxn();
      if (res.status === 200 || res.status === 201) {
        setUserData({
          uniqueId: res.data.uniqueId,
          password: res.data.password,
        });
        setOpenDialog({
          title: "Teacher Added Successfully",
          description:
            "Please save this information, this will not be shown again or generated again!",
          isOpen: modelContext?.value as boolean,
        });
      } else {
        setOpenDialog({
          title: "HTTP CODE: 400",
          description: "Teacher Already Exist",
          isOpen: modelContext?.value as boolean,
        });
      }
    } catch (err) {
      setOpenDialog({
        title: "HTTP CODE: 500",
        description: "Server isn't responding, Kindly try again later",
        isOpen: modelContext?.value as boolean,
      });
    }
  };
  return (
    <>
      {modelContext?.value && (
        <DialogModel
          title={openDialog.title}
          description={openDialog.description}
          isOpen={!openDialog.isOpen}
          uniqueId={userData.uniqueId}
          password={userData.password}
        />
      )}
      <h1 className="text-center font-semibold text-2xl my-5">Add Teachers</h1>
      <div className="h-sceeen">
        <div className="flex flex-col  items-center justify-center h-full">
          <form
            method="post"
            className="grid grid-cols-2 max-sm:grid-cols-1 gap-10 my-5"
            onSubmit={onSubmitHandler}
          >
            <div className="flex flex-col">
              <label>Teacher Name</label>
              <input
                type="text"
                name="name"
                onChange={onChangeHandler}
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Teacher name"
              />
            </div>
            <div className="flex flex-col">
              <label>Mother Name</label>
              <input
                type="text"
                name="motherName"
                onChange={onChangeHandler}
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Mother name"
              />
            </div>
            <div className="flex flex-col">
              <label>Father Name</label>
              <input
                type="text"
                name="fatherName"
                onChange={onChangeHandler}
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Father name"
              />
            </div>
            <div className="flex flex-col">
              <label>Latest Qualification</label>
              <input
                type="text"
                name="qualification"
                onChange={onChangeHandler}
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Qualification"
              />
            </div>
            <div className="flex flex-col">
              <label>Date Of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                onChange={onChangeHandler}
                className="border-2 border-gray-400 rounded p-2 outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label>Age</label>
              <input
                type="number"
                name="age"
                onChange={onChangeHandler}
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Age"
              />
            </div>
            <div className="flex flex-col">
              <label>Subject Profile</label>
              <input
                type="text"
                name="SubjectProfile"
                onChange={onChangeHandler}
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Write subject name"
              />
            </div>
            <div className="flex flex-col">
              <label>Mobile Number</label>
              <input
                type="number"
                name="mobileNumber"
                onChange={onChangeHandler}
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Enter mobile number"
              />
            </div>
            <button
              type="submit"
              className="bg-white outline outline-2 text-center hover:text-white hover:bg-blue-500 w-64 py-2 rounded my-10 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
