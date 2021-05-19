import React, { useState, useEffect } from "react";
import { getUser } from "../services/services";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
