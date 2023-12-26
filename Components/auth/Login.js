import React from "react";
import { useState } from "react";
import ForgotPassword from "./ForgotPassword";

const Login = ({ onSignUpClick , onForgotClick }) => {
  
  return (
      
    <div className="w-3/5 h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-blue-600 m-5 text-4xl flex items-center justify-center">digiDairy</h1>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" action="">
          <div>
            <label
              for="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
              placeholder="youremail@gmail.com"
              required=""
            />
          </div>
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
              required=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50"
                  required=""
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  for="remember"
                  className="text-gray-500"
                >
                  Remember me
                </label>
              </div>
            </div>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                onForgotClick();
              }}
              className="text-sm font-medium text-blue-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Sign In
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Don't have an account yet?{" "}
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                onSignUpClick();
              }}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
    
  );
};

export default Login;
