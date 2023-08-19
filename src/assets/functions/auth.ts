import axios, { AxiosError } from "axios";

interface IUser {
  name: string;
  password: string;
  uniqueId: string;
}

export function authUser(data: string, user: IUser) {
  const catchError = (error: unknown) => {
    const err = error as AxiosError;
    if (err.response?.status === 400) {
      window.location.href = "/login";
    }
  };
  const authStudent = async () => {
    try {
      const res = await axios.post("/auth/students", {
        user,
      });
      if (res.status === 200) {
        window.location.href = "/students";
      }
    } catch (error: unknown) {
      catchError(error);
    }
  };
  const authTeacher = async () => {
    try {
      const res = await axios.post("/auth/teacher", {
        user,
      });
      if (res.status === 200) {
        window.location.href = "/teachers";
      }
    } catch (error: unknown) {
      catchError(error);
    }
  };
  const authAdmin = async () => {
    try {
      const res = await axios.post("/auth/admin", { user });
      if (res.status === 200) {
        window.location.href = "/admins";
      }
    } catch (error: unknown) {
      catchError(error);
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
