import React from 'react'
import LogoWithName from '../Assets/logo.png';

const SignIn = () => {
  return (
    <div className="flex bg-gray-50">
      <div className="w-2/5 h-screen flex items-center justify-center">
        <img className="mr-2" src={LogoWithName} alt="logo" />
      </div>
      <div className="w-3/5 h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-blue-600 m-5 text-4xl flex items-center justify-center">digiDairy</h1>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Welcome <span className='text-blue-600'>Vikram</span>
            <p className="text-base text-gray-600 font-semibold">Please provide address details.</p>
          </h1>
          <form className="space-y-4 md:space-y-6" action="">
            <div>
              <label
                for="flat_no"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Flat No.
              </label>
              <input
                type="text"
                name="flat_no"
                id="flat_no"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                placeholder="1/101"
                required=""
              />
            </div>
            <div>
              <label
                for="street"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Street
              </label>
              <input
                type="text"
                name="street"
                id="street"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                placeholder="VN Purav Marg"
                required=""
              />
            </div>
            <div>
              <label
                for="society_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Society Name
              </label>
              <input
                type="text"
                name="society_name"
                id="society_name"
                placeholder="XYZ Society"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                required=""
              />
            </div>

            <div>
              <label
                for="state"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                State
              </label>
              <input
                type="text"
                name="state"
                id="state"
                placeholder="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                required=""
              />
            </div>
            <div>
              <label
                for="city"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="Mumbai"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                required=""
              />
            </div>

            <div>
              <label
                for="pin_code"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                City
              </label>
              <input
                type="text"
                name="pin_code"
                id="pin_code"
                placeholder="40 0022"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                required=""
              />
            </div>

            <div className="flex items-center justify-center space-x-10">

              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save {" "}
              </button>

              <button
                type="submit"
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Cancel
              </button>

            </div>
            
            
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
