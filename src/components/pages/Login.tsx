import { authUser } from "@functions/auth";
import { FormEvent, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "@components/Loader";

export function Login() {
  const commanClass =
    "m-3 px-5 py-2 rounded bg-white outline outline-2 linkedin hover:text-white hover:bg-blue-500 w-64"; //? Common class for 3 buttons (Student, Teacher, Admin)
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const uniqueIdRef = useRef<HTMLInputElement>(null);
  const invalidTagRef = useRef<HTMLHeadingElement>(null);
  const [login, setLogin] = useState<"STUDENT" | "TEACHER" | "ADMIN">(
    "STUDENT"
  );
  const [loader, setLoader] = useState<JSX.Element | "Login">("Login"); //? Loader for login button
  const navigate = useNavigate();

  //! Login Handler function
  const onSubmitHandler = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void | never> => {
    event.preventDefault();
    const name = usernameRef.current?.value as string;
    const password = passwordRef.current?.value as string;
    const uniqueId = uniqueIdRef.current?.value as string;

    if (name === "" || password === "" || uniqueId === "") {
      if (invalidTagRef.current) {
        invalidTagRef.current.style.visibility = "visible";
        invalidTagRef.current.innerText = "Fill All Fields";
      }
      return;
    } else {
      setLoader(<Loader barColor="blue" wrapperStyle={{ scale: "2.0" }} />);
      const isAuth = await authUser(login.toLowerCase(), {
        name,
        password,
        uniqueId,
      });
      if (isAuth.message === "user authenticated") {
        if (isAuth.role === "student") return navigate("/students");
        else if (isAuth.role === "teacher") return navigate("/teachers");
        else if (isAuth.role === "admin") return navigate("/admins");
        else {
          if (invalidTagRef.current) {
            invalidTagRef.current.style.visibility = "visible";
            invalidTagRef.current.innerText = "Something went wrong!";
          }
        }
      }
      setLoader("Login");
    }
  };
  return (
    <>
      <section className="flex justify-center items-center lg:my-6">
        <button onClick={() => setLogin("STUDENT")} className={commanClass}>
          Students
        </button>
        <button onClick={() => setLogin("TEACHER")} className={commanClass}>
          Teachers
        </button>
        <button onClick={() => setLogin("ADMIN")} className={commanClass}>
          Admins
        </button>
      </section>

      <form
        method="POST"
        onSubmit={onSubmitHandler}
        className="flex flex-col justify-center items-center my-24"
      >
        <h1 className="font-bold text-xl">{login} LOGIN</h1>
        <h2
          className="bg-red-100 w-64 text-center py-1 my-1 rounded invisible"
          id="invalidTag"
          ref={invalidTagRef}
        >
          Invalid Credentials
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-gray-200 px-3 py-2 rounded my-3 w-64"
          ref={usernameRef}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="bg-gray-200 px-3 py-2 rounded my-3 w-64"
          ref={passwordRef}
        />
        <input
          type="password"
          name="uniqueId"
          placeholder="Unique Id"
          className="bg-gray-200 px-3 py-2 rounded my-3 w-64"
          ref={uniqueIdRef}
        />

        <button
          type="submit"
          className="bg-white outline outline-2 text-center hover:shadow-md shadow hover:outline-1 w-64 py-2 rounded my-4 cursor-pointer flex justify-center items-center transition-all delay-75 ease-in-out"
        >
          {loader}
        </button>
      </form>
    </>
  );
}
