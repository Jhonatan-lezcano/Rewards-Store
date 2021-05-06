import React, { useState, useEffect } from "react";
import { getUser } from "../services/services";

export const UserContext = React.createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getUser().then((user) => {
      setUser(user);
      const { redeemHistory } = user;
      setHistory(redeemHistory);
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, history }}>
      {props.children}
    </UserContext.Provider>
  );
};
