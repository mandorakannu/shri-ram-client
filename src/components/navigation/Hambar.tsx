import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "./Logo";
import { useRef } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "@store/store";

export const Hambar = () => {
  const username = useSelector((state: RootState) => state.user.name);
  const dropDownMenu = useRef<HTMLDivElement>(null);
  const showDropDownMenu = () => {
    if (dropDownMenu?.current) dropDownMenu?.current.classList.toggle("hidden");
  };
  const hideDropDownMenu = () => {
    if (dropDownMenu?.current) dropDownMenu?.current!.classList.add("hidden");
  };

  return (
    <>
      <header className="lg:hidden flex justify-around items-center bg-blue-500 border-b-2 border-black h-16 z-50 sticky top-0">
        <Logo />
        <Link to="/">
          <h1 className="text-white font-semibold">Shri Ram College</h1>
        </Link>
        <RxHamburgerMenu
          className="flex flex-col scale-[2] bg-blue-200 rounded p-1"
          onClick={showDropDownMenu}
        />
      </header>

      <div
        className="hidden text-white bg-blue-300 sticky top-16 lg:hidden z-50"
        id="dropDownMenu"
        ref={dropDownMenu}
      >
        <ul
          onClick={hideDropDownMenu}
          className="flex flex-col items-end gap-6 p-5 fixed top-16 left-0 w-full bg-blue-500 z-50"
        >
          <li className="font-medium my-2 border-b border-black w-full text-right py-2">
            <NavLink className="py-1 px-3" to="/">
              Home
            </NavLink>
          </li>
          <li className="font-medium my-2 border-b border-black w-full text-right py-2">
            <NavLink className="py-1 px-3" to="/about">
              About
            </NavLink>
          </li>
          <li className="font-medium my-2 border-b border-black w-full text-right py-2">
            <NavLink className="py-1 px-3" to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li className="font-medium my-2 border-b border-black w-full text-right py-2">
            <NavLink className="py-1 px-3" to="/courses">
              All Courses
            </NavLink>
          </li>
          {username && (
            <li className="font-medium my-2 border-b border-black w-full text-right py-4">
              <NavLink className=" bg-white px-6 py-2 text-black rounded" to="/profile">
                Your Profile
              </NavLink>
            </li>
          )}
          <li className="font-medium my-2 bg-red-500 rounded px-6 py-2">
            <Link className="py-1 px-3" to="/login">
              Login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
