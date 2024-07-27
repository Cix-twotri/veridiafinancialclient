import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL, // Fixed typo here
  });

  const login = async (inputs) => {
    try {
      const res = await axiosInstance.post("/api/auth/login", inputs, {
        withCredentials: true, // Ensure credentials are sent with the request
      });
      setCurrentUser(res.data);
    } catch (err) {
      console.error("Login failed:", err); // Add error handling
      throw err; // Rethrow the error so it can be caught in the component
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
