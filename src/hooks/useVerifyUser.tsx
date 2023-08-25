import { RootState } from "@store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function useVerifyUser() {
  const user = useSelector((state: RootState) => state.user);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    !user.name ? setIsUser(false) : setIsUser(true);
  }, [user]);
  return isUser;
}
