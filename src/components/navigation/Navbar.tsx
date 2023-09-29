import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { useSelector } from "react-redux";
import { RootState } from "@store/store";
export const Navbar = () => {
  const username = useSelector((state: RootState) => state.user.name);
  console.log("navbar", username);
  return (
    <>
      <header className="max-lg:hidden flex flex-shrink sticky top-0 z-50 justify-between items-center px-10 text-white bg-blue-500 h-16 shadow-md">
        <nav className="flex items-center gap-5">
          <Logo />
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/team">Team</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/courses">All Courses</NavLink>
          {username && <NavLink to="/profile" className="bg-white px-6 py-2 text-black rounded">Your Profile</NavLink>}
        </nav>
        <Link className="bg-white px-3 py-1 rounded text-black" to="/login">
          Login
        </Link>
      </header>
    </>
  );
};
