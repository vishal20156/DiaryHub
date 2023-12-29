import React from "react";
import Logo from "../../../Assets/logo_only.png";
import {
  NAV_SIDEBAR_LINKS_OBJ,
  NAV_SIDEBAR_BOTTOM_LINKS_OBJ,
} from "../../../lib/consts/navigation.js";
import { Link, useLocation } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {
  const LinkClassName =
    "flex item-center gap-2 px-3 py-2 hover:bg-blue-700 hover:no-underine active:bg-blue-500 rounded-sm text-base";

  const SidebarLink = ({ obj }) => {
    const { pathname } = useLocation();
    return (
      <Link
        to={obj.path}
        className={
          obj.path === pathname
            ? LinkClassName + " bg-blue-700 font-bold"
            : LinkClassName
        }
      >
        <span className="flex items-center">{obj.icon}</span>
        <span>{obj.label}</span>
      </Link>
    );
  };

  return (
    <div className="bg-blue-600 w-60 p-3 flex flex-col text-white">
      <div className="flex items-center justify-center cursor-pointer">
        <div>
          <img className="w-7 h-15 my-8" src={Logo} alt="logo" />
        </div>
        <div className="ml-2">
          <span className="text-2xl">digiDairy</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-0.5">
        {NAV_SIDEBAR_LINKS_OBJ.map((obj) => (
          <SidebarLink key={obj.key} obj={obj} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t">
        {NAV_SIDEBAR_BOTTOM_LINKS_OBJ.map((obj) => (
          <SidebarLink key={obj.key} obj={obj} />
        ))}
        <div className={'text-red-500 cursor-pointer ' + LinkClassName}>
          <span className="flex items-center"><HiOutlineLogout size={20}/></span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
