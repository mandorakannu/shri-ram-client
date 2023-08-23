import { Route, Routes } from "react-router-dom";
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

import {
  Admins,
  AddTeachers,
  RemoveTeachers,
} from "@components/pages/admins/CommanExporter";
import { FrontPage } from "./pages/main/FrontPage";
import { Login } from "./pages/Login";

export function StudentRoutes() {
  return (
    <Routes>
      <Route path="/students" element={<Students />} />
      <Route path="/result" element={<Result />} />
      <Route path="/timeTable" element={<TimeTable />} />
      <Route path="/syllabus" element={<Syllabus />} />
      <Route path="/complain" element={<StudentComplain />} />
      <Route path="/portal" element={<FeePortal />} />
      <Route path="/editDetails" element={<StudentEditDetails />} />
    </Routes>
  );
}

export function TeacherRoutes() {
  return (
    <Routes>
      <Route path="/teachers" element={<Teachers />} />
      <Route path="/addStudent" element={<AddStudent />} />
      <Route path="/editStudentDetails" element={<StudentDetailsUpdate />} />
      <Route path="/studentComplain" element={<Complain />} />
    </Routes>
  );
}

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admins" element={<Admins />} />
      <Route path="/addTeachers" element={<AddTeachers />} />
      <Route path="/removeTeachers" element={<RemoveTeachers />} />
    </Routes>
  );
}

export function CommanRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<FrontPage />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
