import React from 'react'
import LogoWithName from '../../Assets/logo.png';
import { CiDeliveryTruck } from "react-icons/ci";
import { LuMilk } from "react-icons/lu";


const Index = () => {
  return (
    <div className="flex bg-gray-50">
        <div className="w-2/5 h-screen flex items-center justify-center">
            <img className="mr-2" src={LogoWithName} alt="logo" />
        </div>

        <div className="w-3/5 h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-2/5 p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-blue-600 m-5 text-4xl flex items-center justify-center">digiDairy</h1>
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
                    How do you want to use <br/>digiDairy?
                </h1>
                <p>We'll personalize your setup experience accordingly.</p>
                <div className="flex border-2 border-solid border-gray-600 rounded-md p-4 hover:border-blue-600 cursor-pointer my-5">
                    <div>
                        <CiDeliveryTruck size={40}/>
                    </div>
                    <div className='ml-5'>
                        <h1>I am here to be <b className='hover:text-blue-600'>Delivery Partner</b></h1>
                        <p className='text-sm'>To deliver Milk</p>
                    </div>
                </div>

                <div className="flex border-2 border-solid border-gray-600 rounded-md p-4 hover:border-blue-600 cursor-pointer">
                    <div>
                        <LuMilk size={40}/>
                    </div>
                    <div className='ml-5'>
                        <h1>I am here to be <b className='hover:text-blue-600'>Comsumer</b></h1>
                        <p className='text-sm'>To get fresh Milk</p>
                    </div>
                </div>
                <div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-5"
                    >
                        Create Account
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Index
