import React, { useState } from "react";
import { SERVER_URL } from "../components/constant/severUrl";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'
import { UseAuthContext } from "../components/hook/UserAuthHook";

function Login() {
  const [schoolName, setSchoolName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = UseAuthContext ();
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-teal-700 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
         <div className="w-full max-w-xs">
            <form  onSubmit={authentication} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      
          
            <div className="mt-4">
               <select value={schoolName} onChange={(e) => setSchoolName(e.target.value)}
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white dark:focus:ring-t-500">
                  <option>school Name</option>
                  <option className='select-option'>mySchool</option>
                  <option>France</option>
                   <option>Germany</option>
                </select>
             </div>
              <div className="mt-4">
                <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <input 
                 value={username} onChange={(e) => setUsername(e.target.value)}
                  type="text" 
                  placeholder="Username" 
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                />
              </div>

              <div className="mt-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                <input 
                 value={password} onChange={(e) => setPassword(e.target.value)}
                  type="password" 
                  placeholder="Password" 
                  className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                />                   
              </div>

                <p className="mt-2 text-center text-sm text-gray-600 my-2">
                  <Link to="/ForgotPassword" className="font-medium text-blue-600 hover:text-blue-500">Forgot Password</Link>
                </p>
                <div className="flex justify-center mt-6">
                  <button 
                    type="submit" 
                    className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                  Login
                  </button>
                </div>
            </form>
         </div>
      </div>
  </div>
  )
}

export default Login