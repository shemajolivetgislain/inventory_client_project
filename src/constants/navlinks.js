import { RxDashboard } from "react-icons/rx";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaTruckMoving } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { TbReportAnalytics } from "react-icons/tb";
import { AiTwotoneBank } from "react-icons/ai";

export const navLinks = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: RxDashboard,
  },
  {
    name: "Inventory",
    path: "/inventory",
    icon: MdOutlineInventory2,
  },
  {
    name: "Users",
    path: "/users",
    icon: FaUsers,
  },
  {
    name: "Distributions",
    path: "/distributions",
    icon: FaTruckMoving,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: TbReportAnalytics,
  },
  {
    name: "Accounting",
    path: "/accounting",
    icon: AiTwotoneBank,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: IoIosSettings,
  },
];
