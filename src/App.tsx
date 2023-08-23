import { Footer } from "@components/navigation/Footer.";
import { Navbar } from "@components/navigation/Navbar";
import { Login } from "@components/pages/Login";
import { FrontPage } from "@components/pages/main/FrontPage";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Students } from "@components/pages/students/Students";
import { Result } from "@components/pages/students/Result";
import { TimeTable } from "@components/pages/students/TimeTable";
import { Syllabus } from "@components/pages/students/Syllabus";

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
      </Routes>
      <Footer />
    </>
  );
}
