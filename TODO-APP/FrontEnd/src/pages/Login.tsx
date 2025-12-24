
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { EyeOff } from 'lucide-react'
import {Eye} from  'lucide-react'
import Logo from "../assets/taskmanager-logo.png";
import { UseAuth } from "../context/AuthContext";
import G_logo from "../assets/google.png";


type user = {
  Email: string;
  password: string;
  showPass: boolean;
};
const Login = () => {
  const [Userinput, setUserinput] = useState<user>({
    Email: "",
    password: "",
    showPass: false,
  });
  const [Error, setError] = useState<string>();
  const [Message, setMessage] = useState<string>("");
  const [Loading, setloading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { Login } = UseAuth();

  // let valid = true;
  function validate() {
    if (Userinput.Email == "") {
      setError("require Email");
      return false;
    } else if (Userinput.password == "") {
      setError("require password");
      return false
    }
     setError(undefined)
    return true;
  }

  const Submit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    } else {
      setloading(true);
      const { showPass, ...LoginData } = Userinput;
      try {
        const respons = await Login(LoginData);
        if (respons.success) {
          setMessage(respons.message)
          setTimeout(() => {
            navigate("/Dashboard");
          }, 700);
        } else {
          setMessage(respons.message)
        }
        
      } catch(err:any) {
        setMessage(err)
      } finally {
        setloading(false);
      }
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("")

    }, 2000);
    return () => clearTimeout(timer)
  } , [Message])


  return (
    <div className=" sm:h-30 md:h-59 lg:min-h-screen ">
      <div
        className={`w-70 p-4 bg-white   right-3 rounded-md h-14 fixed    transform transition-all ${
          Message ? "-translate-x-5" : "translate-x-80 "
        } flex justify-center items-center shadow-lg  absolute   `}
      >
        <p className="text-center font-semibold font-sans "> {Message} </p>
      </div>
      <div className="flex flex-col justify-center items-center my-auto mx-auto p-4 bg-white w-xs h-180   sm:w-md shadow-lg pb-4">
        <div className="p-3  flex flex-col justify-center">
          <img src={Logo} alt="" className="w-20 rounded-4xl mx-auto" />
          <h1 className="font-bold text-2xl text-center">Task Manager</h1>
          <p className="text-center text-gray-500">Welcome back </p>
        </div>
        <div className="w-full   space-y-4">
          <div className="flex justify-center items-center cursor-pointer rounded-md bg-gray-100 space-x-4 border-2 w-full h-10">
            <img src={G_logo} className="w-6 h-6" alt="" />
            <p className="font-semibold">Continue with Google</p>
          </div>
          

          <div className="flex justify-center items-center space-x-7 w-full">
            <p className="text-gray-500 ">OR CONTINUE WITH EMAIL</p>
          </div>
        </div>
        <form
          onSubmit={Submit}
          className="w-full flex-col justify-center space-y-5  mt-4"
        >
          <div className="flex flex-col space-y-3">
            <label htmlFor="" className="font-semibold">
              Email
            </label>

            <input
              type="text"
              name="Email"
              placeholder="you@example.com"
              value={Userinput.Email}
              onChange={(e) =>
                setUserinput({ ...Userinput, Email: e.target.value })
              }
              className="h-9 rounded-md px-3  bg-gray-200 
              focus:outline-none  focus:ring-2 focus:ring-cyan-600 focus:ring-offset-1 "
            />

            {Error == "require password" ? "" : <p className="text-red-500 text-md font-semibold">{Error}</p>}
          </div>
          <div className="flex flex-col space-y-3 relative">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <input
              type={Userinput.showPass ? "text" : "password"}
              name="Password"
              placeholder="password"
              value={Userinput.password}
              onChange={(e) =>
                setUserinput({ ...Userinput, password: e.target.value })
              }
              className="h-9 border-2 px-3 rounded-md bg-gray-200 focus:outline-none 
              focus:ring-2 focus:ring-cyan-600 focus:ring-offset-1"
            />

            <div
              onClick={() =>
                setUserinput({ ...Userinput, showPass: !Userinput.showPass })
              }
              className="absolute right-4 top-12 cursor-pointer "
            >
              {Userinput.showPass ? (
                <Eye size={20} />
              ) : (
                <EyeOff size={20} />
              )}
            </div>

            {Error == "require Email"? "" :  <p className="text-red-500 text-md font-semibold">{Error}</p>}
            <Link to="/ForgetPass" className="ms-auto text-blue-600 font-semibold">
              Forget password?
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              
              type="submit"
              className="w-70 sm:w-sm bg-cyan-500 text-white text-lg "
            >
              {Loading ? "Loading..." :   "Submit"}
            </button>
            <br />
          </div>
          <p className="text-center mt-2  text-gray-500 font-medium pb-5">
            Don't have an account?{" "}
            <Link to="/Singup" className="text-cyan-600">
              Sing up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
