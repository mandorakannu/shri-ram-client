import { createContext, ReactNode } from "react";
import { useState } from "react";

type ContextProps = {
  value: boolean;
  isModelOpenFxn: () => void;
};
export const UserCreateContext = createContext<ContextProps | null>(null);

function UserCreateProvider({ children }: { children: ReactNode }) {
  const [value, setValue] = useState<boolean>(false);
  const currentState = {
    value: value,
    isModelOpenFxn: () => setValue(!value),
  };
  return (
    <UserCreateContext.Provider value={currentState}>
      {children}
    </UserCreateContext.Provider>
  );
}

export default UserCreateProvider;
