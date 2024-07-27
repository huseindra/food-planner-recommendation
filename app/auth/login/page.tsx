"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Login = () => {
   const router = useRouter();

   const pushToDashboard = () => {
    localStorage.setItem('isLogin', 'true')
    router.push('/home')
   }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <div className="flex flex-col space-y-4">
          <button onClick={()=> pushToDashboard()} className="flex items-center text-sm justify-center w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/></svg>
            Login with Google
          </button>
          <button className="flex text-sm items-center justify-center w-full py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            Login with Phone
          </button>
        </div>
        <div className="flex items-center justify-center">
          <span className="px-2 text-sm text-gray-400">OR</span>
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" name="email" id="email" placeholder="Enter your username or email" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-sm" />
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot password</a>
            <a href="#" className="text-sm text-blue-500 hover:underline">Forgot username</a>
          </div>
          <button type="submit" className="w-full py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
