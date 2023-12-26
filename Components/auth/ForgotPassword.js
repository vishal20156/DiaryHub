import React from 'react'

const ForgotPassword = ({ onSignInClick }) => {
  return (
    <div className="w-3/5 h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-blue-600 m-5 text-4xl flex items-center justify-center">digiDairy</h1>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Mail Address Here
        </h1>
        <p>Enter email address assocciated with your account</p>
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
          
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Recover Password
          </button>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Oh! Remembered to {" "}
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                onSignInClick();
              }}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
