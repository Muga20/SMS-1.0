import React, { useState } from "react";
import { SERVER_URL } from "../components/constant/severUrl";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { UseAuthContext } from "../components/hook/UserAuthHook";
import { FiEye, FiEyeOff } from 'react-icons/fi'; 


function Login() {
  const [schoolName, setSchoolName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = UseAuthContext ();
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };


  const  authentication = async (e) => {
    e.preventDefault();  
    try {
        await axios.post(`${SERVER_URL}/auth/login`, {
          schoolName: schoolName,
          username: username,
          password: password,
        }).then((response) => {
          const user = response.data.user;

          localStorage.setItem("user", JSON.stringify(user));
          dispatch({ type: "LOGIN", payload: user });
          const userRole = user.role;
          navigate(`/${userRole}`);
        });    
     
    } catch (error) {
      if (error.response?.status === 400) {
        return toast.error("Username or password is missing");
      } else if (error.response?.status === 401) {
        return toast.error("Invalid login credentials");
      }
    }
  };


  return (
    <section class="flex flex-wrap items-center justify-center h-screen font-poppins">
        <div class="max-w-6xl mx-auto ">
            <div class=" lg:py-7">
                <div class="max-w-xl lg:p-12 shadow-md rounded-md p-6 mx-auto text-center bg-gray-100">
                    <h2 class="mb-4 text-4xl font-bold text-gray-700 lg:mb-7 lg:text-3xl dark:text-gray-300">Login your account</h2>
                    <form onSubmit={authentication}>
                    <div class="mb-4 lg:mb-7">
                        <select value={schoolName} onChange={(e) => setSchoolName(e.target.value)}
                          className="text-gray-900 text-sm border border-gray-300 outline-none rounded-lg block w-full p-2.5 text-black dark:focus:ring-t-500">
                            <option>school Name</option>
                            <option className='select-option'>mySchool</option>
                            <option>France</option>
                            <option>Germany</option>
                          </select>
                      </div>
                      <div class="mb-4 lg:mb-7">
                            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} class="w-full text-md px-4 py-2 outline-none bg-white rounded-lg border border-gray-300 text-black" placeholder="Enter your username"/>
                      </div>
                      <div class="mb-4 lg:mb-7">
                            <div class="relative flex items-center">
                                <input type={passwordVisible ? 'text' : 'password'}  value={password} onChange={(e) => setPassword(e.target.value)} class="w-full px-4 py-2 bg-white outline-none border border-gray-300 rounded-lg text-black" placeholder="Enter password"/>
                                <div className="absolute top-6 right-0 mr-3 transform -translate-y-1/2 cursor-pointer" onClick={togglePasswordVisibility}>
                                     {passwordVisible ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                               </div>
                            </div>
         
                      </div>
                       <div class="flex items-center justify-between mb-4 lg:mb-7">
                        <Link to="/ForgotPassword" class="text-sm font-semibold text-blue-400 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500">forgot password?</Link>
                       </div>
                        <button  class="w-full px-2 py-3 text-sm font-bold text-gray-300 uppercase bg-blue-600 rounded-md lg:text-md dark:text-gray-300 dark:bg-blue-800 hover:bg-blue-700 dark:hover:bg-blue-900" type="submit">LOGIN</button>

                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Login