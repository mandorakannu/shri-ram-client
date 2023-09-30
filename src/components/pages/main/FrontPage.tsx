import { Link } from "react-router-dom";
import { GiSecretBook, GiMaterialsScience } from "react-icons/gi";
import {
  AiOutlineSafetyCertificate,
  AiFillTrophy,
  AiFillHtml5,
} from "react-icons/ai";
import { SiGooglescholar, SiCoursera, SiReact } from "react-icons/si";
import { BsCalendar2Fill } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import testimonials from "@jsons/testimonials.json";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IKImage, IKContext } from "imagekitio-react";
import { useLinks } from "@hooks/useLinks";

export function FrontPage() {
  const { images, urlEndPoint } = useLinks();
  return (
    <>
      <main className="background__main flex flex-col h-[80dvh] justify-center items-center text-white lg:items-start">
        <h1
          data-aos="fade-up"
          className="light-cream mx-auto text-2xl max-lg:italic font-bold max-lg:underline underline-offset-2 yellowish"
        >
          Welcome To Shri Ram College
        </h1>
        <p data-aos="fade-up" className="my-5 px-3">
          Shri Ram College is an institution for higher education. It is
          affiliated to MGS University, Bikaner and approved by AICTE,
          Government of India. It is under the management of the Shri Ram Ji
          trust. It aims at offering quality education and value education.
          Besides providing highly efficient coaching, the institute
          concentrates on the development of each student.
        </p>
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center my-10 "
          id="link__main"
        >
          <Link
            to="Login"
            className="w-80 my-2 mx-3 py-4 text-center bg-red-500 hover:bg-red-600 transition-colors delay-75 text-white rounded after:content-['➡️']"
          >
            Go To Login Page
          </Link>
        </div>
      </main>
      <div className="flex flex-col">
        <div data-aos="fade-up">
          <h1 className="dm-sans text-3xl font-medium title-font text-gray-900 mb-12 text-center  my-10">
            Learn Anything
          </h1>
        </div>
        <div className="flex flex-row max-lg:flex-col justify-center items-start">
          <div
            className="flex flex-col justify-center items-center my-10"
            data-aos="fade-up"
          >
            <GiSecretBook className="text-5xl text-sky-400" />
            <h1 className="text-center text-2xl font-bold">Online Courses</h1>
            <span className="my-5 px-3 text-gray-400 opacity-70">
              Online classes and training is the fastest way to develop your
              skills and career. Take a look at an overview of our online
              courses.
            </span>
          </div>
          <div
            className="flex flex-col justify-center items-center my-10"
            data-aos="fade-up"
          >
            <AiOutlineSafetyCertificate className="text-5xl text-sky-400" />
            <h1 className="text-center text-2xl font-bold">
              Earn A Certificates
            </h1>
            <span className="my-5 px-3 text-gray-400 opacity-70">
              This certificate allows you to prove that you are proficient in
              this subject. It may a great way to obtain a formal education or
              training.
            </span>
          </div>
          <div
            className="flex flex-col justify-center items-center my-10"
            data-aos="fade-up"
          >
            <GiMaterialsScience className="text-5xl text-sky-400" />
            <h1 className="text-center text-2xl font-bold">
              Learn with Expert
            </h1>
            <span className="my-5 px-3 text-gray-400 opacity-70">
              Join us for an informative and fun experience. The expert will get
              to know each student's interests and then customize a course
              specifically for them.
            </span>
          </div>
        </div>
      </div>
      <div className="background__secondary grid place-items-center grid-flow-col max-sm:grid-flow-row">
        <div className="flex" data-aos="fade-up">
          <SiGooglescholar className="text-white text-3xl" />
          <span className="px-3 text-white  text-2xl">
            100+ Success Stories
          </span>
        </div>

        <div className="flex" data-aos="fade-up">
          <AiFillTrophy className="text-white text-3xl" />
          <span className="px-3 text-white  text-2xl">100+ Trusted Tutors</span>
        </div>

        <div className="flex" data-aos="fade-up">
          <BsCalendar2Fill className="text-white text-3xl" />
          <span className="px-3 text-white  text-2xl">100+ Schedules</span>
        </div>

        <div className="flex" data-aos="fade-up">
          <SiCoursera className="text-white text-3xl" />
          <span className="px-3 text-white  text-2xl">100+ Courses</span>
        </div>
      </div>
      <div className="overflow-hidden">
        <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center my-10">
          All Courses
        </h1>
        <div className="flex flex-row max-sm:flex-col justify-evenly items-center my-10 gap-3">
          <Link
            data-aos="fade-left"
            to="Courses"
            className="flex justify-center items-center p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md text-blue-500"
          >
            <AiFillHtml5 className="w-20 scale-[3] px-1 text-orange-500" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              HTML, CSS, and Javascript for Web Developers
            </h5>
          </Link>
          <Link
            data-aos="fade-up"
            to="Courses"
            className="flex justify-center items-center p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md text-blue-500"
          >
            <SiReact className="w-20 scale-[3] px-1 text-blue-700" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Learn React.Js for Web Developers
            </h5>
          </Link>
          <Link
            data-aos="fade-right"
            to="Courses"
            className="flex justify-center items-center p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md text-blue-500"
          >
            <HiOutlineCode className="w-20 scale-[3] px-1 text-black" />
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              Learn Coding with professionals
            </h5>
          </Link>
        </div>
      </div>
      <IKContext urlEndpoint={urlEndPoint}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {testimonials.map((item, index: number) => {
              return (
                <div className="p-4 md:w-1/2 w-full" key={index}>
                  <div
                    className="h-full bg-gray-100 p-8 rounded"
                    data-aos="fade-up"
                  >
                    <RiDoubleQuotesR className="text-4xl" />
                    <p className="leading-relaxed mb-6" data-aos="fade-up">
                      {item.paragraph}
                    </p>
                    <div className="flexRowCenter">
                      <IKImage
                        alt="User testimonial Image"
                        path={`${images}/${item.image}`}
                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        data-aos="fade-up"
                      />
                      <p className="flex-grow flex flex-col">
                        <span
                          className="title-font font-medium text-gray-900"
                          data-aos="fade-up"
                        >
                          {item.name}
                        </span>
                        <span
                          className="text-gray-500 text-sm"
                          data-aos="fade-up"
                        >
                          {item.profession}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </IKContext>
    </>
  );
}
