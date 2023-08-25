import { Link } from "react-router-dom";

export function Auth() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80dvh]">
        <h1>You're Not Authorized, To Visit This Page!</h1>
        <div className="flex gap-5 my-5">
          <Link
            to="/"
            className="bg-white border transition-colors delay-75 py-2 px-6 rounded"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="bg-blue-500 text-white hover:bg-blue-600 transition-colors delay-75 py-2 px-6 rounded"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}
