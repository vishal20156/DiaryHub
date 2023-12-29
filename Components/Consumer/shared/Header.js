import React from 'react'
import { HiChevronDown } from "react-icons/hi";


const Header = () => {

  const closePopUp = () =>{
    let profile_dd_dom = document.getElementById("dropdownAvatarName");
    if(profile_dd_dom.classList.contains("hidden")){
      profile_dd_dom.classList.remove("hidden");
    }else{
      profile_dd_dom.classList.add("hidden");
    }
  }

  return (
    <div className='h-16 p-4 bg-gray-100'>
      <div className='flex justify-end relative'>
        <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600" type="button" onClick={closePopUp}>
          <img className="w-8 h-8 me-2 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo"/>
          <HiChevronDown size={20}/>
        </button>
        <div id="dropdownAvatarName" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 hidden">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div className="truncate">Bonnie Green</div>
          </div>
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            </li>
          </ul>
          <div className="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
