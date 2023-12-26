import React from 'react'

const ResetPassword = () => {
  return (
    <div className="w-3/5 h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-blue-600 m-5 text-4xl flex items-center justify-center">digiDairy</h1>
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
          Enter New Password
        </h1>
        <p>Your new password must be different from previously used password</p>
        <form className="space-y-4 md:space-y-6" action="">
          <div>
            <label
              for="password"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              New Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
              placeholder="••••••••"
              required=""
            />
          </div>

          <div>
            <label
              for="confirm_pass"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="confirm_pass"
              id="confirm_pass"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
              placeholder="••••••••"
              required=""
            />
          </div>
          
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Save
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
