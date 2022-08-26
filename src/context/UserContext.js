import { createContext, useState } from "react";

const Context = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(() => window.sessionStorage.getItem("user"));

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export default Context;
