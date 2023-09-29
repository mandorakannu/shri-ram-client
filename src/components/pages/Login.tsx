import { authUser } from "@functions/auth";
import { FormEvent, useState, ChangeEvent, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "@components/Loader";
export function Login() {
  const commanClass =
    "m-3 px-5 py-2 rounded bg-white outline outline-2 linkedin hover:text-white hover:bg-blue-500 w-64";
  const [user, setUser] = useState({
    name: "",
    password: "",
    uniqueId: "",
  });
  const invalidTagRef = useRef<HTMLHeadingElement>(null);
  const [login, setLogin] = useState("STUDENT");
  const [loader, setLoader] = useState<JSX.Element | "Login">("Login");
  const navigate = useNavigate();
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const invalidTag = document.querySelector("#invalidTag") as HTMLElement;
    if (invalidTag) {
      invalidTag.style.visibility = "hidden";
      setUser({ ...user, [e.target.name]: e.target.value });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const onSubmitHandler = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void | never> => {
    event.preventDefault();
    if (user.name === "" || user.password === "" || user.uniqueId === "") {
      if (invalidTagRef.current) {
        invalidTagRef.current.style.visibility = "visible";
        invalidTagRef.current.innerText = "Fill All Fields";
      }
      return;
    } else {
      setLoader(<Loader barColor="blue" wrapperStyle={{ scale: "2.0" }} />);
      const isAuth = await authUser(login.toLowerCase(), user);
      if (isAuth.message === "user authenticated") {
        if (isAuth.role === "student") return navigate("/students");
        else if (isAuth.role === "teacher") return navigate("/teachers");
        else if (isAuth.role === "admin") return navigate("/admins");
        else {
          if (invalidTagRef.current) {
            invalidTagRef.current.style.visibility = "visible";
            invalidTagRef.current.innerText = "Fill All Fields";
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
          className="red bg-red-100 w-64 text-center py-1 my-1 rounded invisible"
          id="invalidTag"
          ref={invalidTagRef}
        >
          Invalid Credentials
        </h2>
        <input
          type="text"
          name="name"
          value={user.name}
          placeholder="Name"
          className="bg-gray-200 px-3 py-2 rounded my-3 w-64"
          onChange={onChangeHandler}
        />
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Password"
          className="bg-gray-200 px-3 py-2 rounded my-3 w-64"
          onChange={onChangeHandler}
        />
        <input
          type="password"
          name="uniqueId"
          value={user.uniqueId}
          placeholder="Unique Id"
          className="bg-gray-200 px-3 py-2 rounded my-3 w-64"
          onChange={onChangeHandler}
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
