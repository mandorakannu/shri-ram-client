import { fetchUserById } from "@reducers/userId";
import { store } from "@store/store";
import axios, { AxiosError } from "axios";
interface IUser {
  name: string;
  password: string;
  uniqueId: string;
}

interface UrlAuth {
  [index: string]: string;
  student: string;
  teacher: string;
  admin: string;
}

const invalidCredentials = (statusCode: number) => {
  if (statusCode === 200) return;
  const invalidTag = document.querySelector("#invalidTag") as HTMLElement;
  invalidTag.style.visibility = "visible";
  if (statusCode === 500) {
    invalidTag.innerHTML = "Internal Server Error";
  } else if (statusCode === 404) {
    invalidTag.innerHTML = "Invalid Credentials";
  } else {
    invalidTag.innerHTML = "Something went wrong";
  }
};

export async function authUser(data: string, user: IUser) {
  const urlAuth: UrlAuth = {
    student: "/auth/students",
    teacher: "/auth/teacher",
    admin: "/auth/admin",
  };
  try {
    const response = await axios.post(urlAuth[data], user);

    if (response.status === 200) {
      store.dispatch(fetchUserById(user.uniqueId));
      return { message: "user authenticated", role: data };
    } else {
      invalidCredentials(response.status);
      return { message: "user not authenticated" };
    }
  } catch (error: unknown) {
    const err = error as AxiosError;
    invalidCredentials(err.response?.status as number);
    return { message: "Internal Server Error!" };
  }
}
