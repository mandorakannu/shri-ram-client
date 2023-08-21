import axios from "axios";
import { store } from "@store/store";
import { addUser } from "@store/slices/user";
interface IUser {
  name: string;
  password: string;
  uniqueId: string;
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

export function authUser(data: string, user: IUser) {
  const authStudent = async () => {
    try {
      const res = await axios.post("/auth/students", {
        user,
      });
      if (res.status === 200) {
        store.dispatch(addUser({ id: user.uniqueId, name: user.name }));
        window.location.href = "/students";
      }
      invalidCredentials(res.status);
    } catch (error: unknown) {
      invalidCredentials(500);
    }
  };
  const authTeacher = async () => {
    try {
      const res = await axios.post("/auth/teacher", {
        user,
      });
      if (res.status === 200) {
        store.dispatch(addUser({ id: user.uniqueId, name: user.name }));
        window.location.href = "/teachers";
      }
      invalidCredentials(res.status);
    } catch (error: unknown) {
      invalidCredentials(500);
    }
  };
  const authAdmin = async () => {
    try {
      const res = await axios.post("/auth/admin", { user });
      if (res.status === 200) {
        store.dispatch(addUser({ id: user.uniqueId, name: user.name }));
        window.location.href = "/admins";
      }
      invalidCredentials(res.status);
    } catch (error: unknown) {
      invalidCredentials(500);
    }
  };
  if (data === "student") {
    authStudent();
  } else if (data === "teacher") {
    authTeacher();
  } else if (data === "admin") {
    authAdmin();
  }
}
