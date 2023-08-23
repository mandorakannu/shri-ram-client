import { Footer } from "@components/navigation/Footer.";
import { Navbar } from "@components/navigation/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  TeacherRoutes,
  StudentRoutes,
  AdminRoutes,
  CommanRoutes,
} from "@components/Router";

export function App() {
  AOS.init({ once: true });
  return (
    <>
      <Navbar />
        <CommanRoutes />
        <StudentRoutes />
        <TeacherRoutes />
        <AdminRoutes />
      <Footer />
    </>
  );
}
