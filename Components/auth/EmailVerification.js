import React from "react";

const EmailVerification = () => {
  return (
    <div className="w-3/5 h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-blue-600 m-5 text-4xl flex items-center justify-center">
          digiDairy
        </h1>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Get Your Code
        </h1>
        <p>Please enter 4 digit code that send to your email address</p>
        <form className="space-y-4 md:space-y-6" action="">
          <div className="flex space-x-4 mb-4 m-10">
            <input
              type="text"
              maxLength="1"
              className="flex-1 p-2 border rounded-md w-10 text-4xl text-center bg-blue-400 text-white"
              required
            />
            <input
              type="text"
              maxLength="1"
              className="flex-1 p-2 border rounded-md w-10 text-4xl text-center bg-blue-400 text-white"
              required
            />
            <input
              type="text"
              maxLength="1"
              className="flex-1 p-2 border rounded-md w-10 text-4xl text-center bg-blue-400 text-white"
              required
            />
            <input
              type="text"
              maxLength="1"
              className="flex-1 p-2 border rounded-md w-10 text-4xl text-center bg-blue-400 text-white"
              required
            />
          </div>

          <p>
            If you don't recieve code!{" "}
            <a href="" className="font-medium text-blue-600 hover:underline">
              Resend
            </a>
          </p>

          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Verify and Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;
