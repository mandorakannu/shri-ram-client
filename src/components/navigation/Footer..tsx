import { MdFacebook } from "react-icons/md";
import { RxInstagramLogo } from "react-icons/rx";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t-2 border-blue-500">
        <div className="grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Shri Ram College
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/" className=" hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Courses
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Team
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Help center
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Twitter
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  WhatsApp
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Legal
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Download
            </h2>
            <ul className="text-gray-500 dark:text-gray-400">
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  iOS
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Android
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  Windows
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/" className="hover:underline">
                  MacOS
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            {currentYear}
            <span>{" "}Shri Ram College</span>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <Link
              to="/"
              className="text-gray-400 hover:text-[color:var(--facebook)] dark:hover:text-white"
            >
              <MdFacebook className="scale-125" />
            </Link>
            <Link
              to="/"
              className="text-gray-400 hover:text-[color:var(--instagram)] dark:hover:text-white"
            >
              <RxInstagramLogo className="scale-125" />
            </Link>
            <Link
              to="/"
              className="text-gray-400 hover:text-[color:var(--twitter)] dark:hover:text-white"
            >
              <BsTwitter className="scale-125" />
            </Link>
            <Link
              to="/"
              className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <AiFillGithub className="scale-125" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
