import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import type { User } from "../UserType";
import axios from "axios";
type singupResponse = {
  success: boolean;
  message: string;
  userId?: number;
};
type AuthType = {
  // User: User;
  Login: (User: User) => Promise<singupResponse>;
  SingUp: (newUser: User) => Promise<singupResponse>;
  // Logout: () => void,
};

export const AuthContext = createContext<AuthType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const SingUp = async (newUser: User) => {
    try {
      const respons = await axios.post(
        "http://localhost:3000/Auth/Singup",
        newUser
      );

      return {
        success: respons.data.success,
        message: respons.data.message,
        userId: respons.data.userId,
      };
    } catch (error: any) {
      return {
        success: false,
        message: error.response?.data?.message || "Something went wrong",
      };
    }
  };
  const Login = async (newUser: User) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/Auth/Login",
        newUser
      );
      localStorage.setItem("token", response.data.token);
      return {
      success: response.data.success,
      message: response.data.message,
      }
    } catch (error: any) {
      return {
        success: false,
      message: error.response?.data?.message || "Login failed",
   
      }
    }
  };
  //   // const Logout = ()  => {

  //   //     setUser({Name : "" , Email : "" , password : ""})

  // }

// const AuthProvider = async () => {
//     const token = localStorage.getItem("token");

//     const data = await axios.get("http://localhost:3000/api/protected", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     console.log(data);
//   };
  return (
    <AuthContext.Provider value={{ SingUp, Login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UseAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Something went in Context or authentification");
  }

  return context;
};