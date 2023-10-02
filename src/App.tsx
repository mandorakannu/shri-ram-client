import axios from "axios";
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
import { Hambar } from "@components/navigation/Hambar";
import { Analytics } from "@vercel/analytics/react";

export function App() {
  AOS.init({ once: true });
  axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
  return (
    <>
      <Hambar />
      <Navbar />
      <CommanRoutes />
      <StudentRoutes />
      <TeacherRoutes />
      <AdminRoutes />
      <Analytics />
      <Footer />
    </>
  );
}
