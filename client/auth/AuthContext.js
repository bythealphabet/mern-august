import React, { useState, useEffect, createContext } from "react";
import authFile from "./auth-helper";

const { isAuthenticated, updateAuthUser, authenticate, signout } = authFile;

export const AuthContext = createContext("");
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(isAuthenticated);
  const [categoryName, setCategoryName] = useState("");

  {
    let value;
    value = {
      updateUser,
      auth,
      signInHandler,
      signOutHandler,
      categoryName,
      setCategoryName,
    };

    return <Provider value={value}>{children}</Provider>;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  async function updateUser(data) {
    const { _id, photo, name, email, seller } = data;
    const userUpdateData = { _id, photo, name, email, seller };

    await updateAuthUser(userUpdateData);
    await setAuth((prev) => {
      prev.user = userUpdateData;
      return prev;
    });

    return;
  }

  async function signInHandler(data) {
    await setAuth(data);
    await authenticate(data);
  }

  async function signOutHandler() {
    await signout();
    setAuth(false);
  }
};

export default AuthProvider;
