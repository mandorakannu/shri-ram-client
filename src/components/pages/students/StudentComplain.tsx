import axios from "axios";
import { FormEvent, useRef } from "react";
import { RootState } from "@store/store";
import { useSelector } from "react-redux";

export function StudentComplain() {
  const user = useSelector((state: RootState) => state.user);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = messageRef.current?.value;
    try {
      if (message === "") {
        return alert("please fill all fields");
      }
      const response = await axios.post("/complain", {
        message,
        name: user.name,
        className: user.className,
      });
      const { result } = response.data;
      if (result === "success") {
        alert("Complain sent successfully");
        messageRef.current!.value = "";
      } else {
        alert(
          "Something went wrong, please try again later. Status Code: " +
            response.status
        );
      }
    } catch (error) {
      alert("Internal Server Error, please try again later.");
    }
  };
  return (
    <>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Student Complain Section
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Tell your problem, We will try to solve it as soon as possible. Let
            us know.
          </p>
          <form className="space-y-8" onSubmit={onSubmitHandler}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="username"
                value={user.name}
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg block w-full p-2.5"
                placeholder="username"
                required
                disabled
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                id="message"
                ref={messageRef}
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white bg-blue-500 sm:w-fit"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
