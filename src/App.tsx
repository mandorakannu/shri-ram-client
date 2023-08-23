import { Footer } from "@components/navigation/Footer.";
import { Navbar } from "@components/navigation/Navbar";
import { Login } from "@components/pages/Login";
import { FrontPage } from "@components/pages/main/FrontPage";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Result,
  TimeTable,
  Syllabus,
  StudentComplain,
  FeePortal,
  StudentEditDetails,
  Students,
} from "@components/pages/students/CommanExporter";
import {
  Teachers,
  AddStudent,
  StudentDetailsUpdate,
  Complain,
} from "@components/pages/shared/CommanExporter";
import { Admins } from "@components/pages/admins/Admins";
import { AddTeachers } from "@components/pages/admins/AddTeachers";
import { RemoveTeachers } from "@components/pages/admins/RemoveTeachers";

export function App() {
  AOS.init({ once: true });
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/students" element={<Students />} />
        <Route path="/result" element={<Result />} />
        <Route path="/timeTable" element={<TimeTable />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/complain" element={<StudentComplain />} />
        <Route path="/portal" element={<FeePortal />} />
        <Route path="/editDetails" element={<StudentEditDetails />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/addStudent" element={<AddStudent />} />
        <Route path="/editStudentDetails" element={<StudentDetailsUpdate />} />
        <Route path="/studentComplain" element={<Complain />} />
        <Route path="/admins" element={<Admins />} />
        <Route path="/addTeachers" element={<AddTeachers />} />
        <Route path="/removeTeachers" element={<RemoveTeachers />} />
      </Routes>
      <Footer />
    </>
  );
}
