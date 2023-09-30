import axios from "axios";
import { FormEvent, useContext, useState, useRef } from "react";
import { useVerifyUser } from "@hooks/useVerifyUser";
import { Auth } from "@components/Auth";
import { DialogModel } from "@components/ui/UserCreateModel";
import { UserCreateContext } from "context/UserCreateContext";
import { Loader } from "@components/Loader";
export function AddTeachers() {
  const [loader, setLoader] = useState<JSX.Element | string>("Submit");
  //! Refs
  const nameRef = useRef<HTMLInputElement>(null);
  const motherNameRef = useRef<HTMLInputElement>(null);
  const fatherNameRef = useRef<HTMLInputElement>(null);
  const qualificationRef = useRef<HTMLInputElement>(null);
  const dateOfBirthRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const SubjectProfileRef = useRef<HTMLInputElement>(null);
  const mobileNumberRef = useRef<HTMLInputElement>(null);
  // ! Ref End

  const modelContext = useContext(UserCreateContext); //! UserCreateContext is used to open the model
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

  // onSubmitHandler function is used to submit the form to the server
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoader(<Loader />);
    try {
      if (
        nameRef.current?.value === "" ||
        motherNameRef.current?.value === "" ||
        fatherNameRef.current?.value === "" ||
        qualificationRef.current?.value === "" ||
        dateOfBirthRef.current?.value === "" ||
        ageRef.current?.value === "" ||
        SubjectProfileRef.current?.value === "" ||
        mobileNumberRef.current?.value === ""
      ) {
        setOpenDialog({
          title: "Fill All The Fields",
          description: "Please fill all the fields",
          isOpen: modelContext?.value as boolean,
        });
        return;
      }
      const name = nameRef.current?.value;
      const motherName = motherNameRef.current?.value;
      const fatherName = fatherNameRef.current?.value;
      const qualification = qualificationRef.current?.value;
      const dateOfBirth = dateOfBirthRef.current?.value;
      const age = ageRef.current?.value;
      const SubjectProfile = SubjectProfileRef.current?.value;
      const mobileNumber = mobileNumberRef.current?.value;

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
    } finally {
      setLoader("Submit");
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
                ref={nameRef}
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Teacher name"
              />
            </div>
            <div className="flex flex-col">
              <label>Mother Name</label>
              <input
                type="text"
                name="motherName"
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Mother name"
                ref={motherNameRef}
              />
            </div>
            <div className="flex flex-col">
              <label>Father Name</label>
              <input
                type="text"
                name="fatherName"
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Father name"
                ref={fatherNameRef}
              />
            </div>
            <div className="flex flex-col">
              <label>Latest Qualification</label>
              <input
                type="text"
                name="qualification"
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Qualification"
                ref={qualificationRef}
              />
            </div>
            <div className="flex flex-col">
              <label>Date Of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                className="border-2 border-gray-400 rounded p-2 outline-none"
                ref={dateOfBirthRef}
              />
            </div>
            <div className="flex flex-col">
              <label>Age</label>
              <input
                type="number"
                name="age"
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Age"
                ref={ageRef}
              />
            </div>
            <div className="flex flex-col">
              <label>Subject Profile</label>
              <input
                type="text"
                name="SubjectProfile"
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Write subject name"
                ref={SubjectProfileRef}
              />
            </div>
            <div className="flex flex-col">
              <label>Mobile Number</label>
              <input
                type="number"
                name="mobileNumber"
                className="border-2 border-gray-400 rounded p-2 outline-none"
                placeholder="Enter mobile number"
                ref={mobileNumberRef}
              />
            </div>
            <button
              type="submit"
              className="flex justify-center items-center bg-white outline outline-2 text-center hover:text-white hover:bg-blue-500 w-64 py-2 rounded my-10 cursor-pointer"
            >
              {loader}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
