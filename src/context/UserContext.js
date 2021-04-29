import React, { useState, useEffect } from "react";
import getUser from "../services/getUser";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {props.children}
    </UserContext.Provider>
  );
};
