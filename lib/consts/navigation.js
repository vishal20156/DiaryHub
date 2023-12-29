import {
  HiOutlineCog,
  HiOutlineQuestionMarkCircle,
  HiOutlineCurrencyRupee,
  HiOutlineShoppingCart,
  HiOutlineViewGrid,
} from "react-icons/hi";

export const NAV_SIDEBAR_LINKS_OBJ = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiOutlineViewGrid size={20}/>,
  },
  {
    key: "order",
    label: "Order",
    path: "/order",
    icon: <HiOutlineShoppingCart size={20}/>,
  },
  {
    key: "report",
    label: "Report",
    path: "/report",
    icon: <HiOutlineCurrencyRupee size={20}/>,
  },
];

export const NAV_SIDEBAR_BOTTOM_LINKS_OBJ = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog size={20}/>,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle size={20}/>,
  },
];
