import { useState, ChangeEvent, UIEvent } from "react";
import axios from "axios";

export const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const onChangeHandler = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  const submitDetails = async (e: UIEvent) => {
    e.preventDefault();
    const { name, email, message } = userData;
    const form = await axios.post("/api/contact", {
      name,
      email,
      message,
    });
    if (form.status === 201) {
      alert("Details Submitted Successfully");
      setUserData({
        name: "",
        email: "",
        message: "",
      });
      return;
    }
    alert("Details wasn't Submitted");
  };
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div
            data-aos="fade-up"
            className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative"
          >
            <iframe
              className="absolute inset-0"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d770.2140523529973!2d73.87567555860274!3d29.91774794985163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1674042791337!5m2!1sen!2sin"
              width="100%"
              height="100%"
            />
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  Vrindavan colony, Sri Ganganagar, Rajasthan 335001
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a
                  className="text-indigo-500 leading-relaxed"
                  href="emailto:sdcollege@xyz.com"
                >
                  sdcollege@xyz.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2
              className="text-gray-900 text-lg mb-1 font-medium title-font"
              data-aos="fade-up"
            >
              Enquiry Now!
            </h2>
            <p
              className="leading-relaxed mb-5 text-gray-600"
              data-aos="fade-up"
            >
              Enter your details and we will contact us.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-600"
                data-aos="fade-up"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={onChangeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                data-aos="fade-up"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
                data-aos="fade-up"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={onChangeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                data-aos="fade-up"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
                data-aos="fade-up"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={userData.message}
                onChange={onChangeHandler}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                data-aos="fade-up"
              />
            </div>
            <button
              onClick={submitDetails}
              className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              data-aos="fade-up"
            >
              Submit
            </button>
            <p className="text-xs text-gray-500 mt-3" data-aos="fade-up">
              We will contact us soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
