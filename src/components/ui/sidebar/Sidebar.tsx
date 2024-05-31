import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoPerson,
  IoPersonOutline,
  IoRocketOutline,
  IoAppsOutline,
  IoPeopleOutline,
  IoNewspaperOutline,
  IoShirtOutline,
  IoGridOutline,
} from "react-icons/io5";

import { getServerSession } from "next-auth";
import { authOptions } from '@/auth.config';

import { SidebarItem } from "./SidebarItem";
import { LogoutButton } from "./LogoutButton";

const menuItems = [
  {
    icon: <IoAppsOutline size={30} />,
    title: "Activity",
    path: "/admin/activity",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "Deposit",
    path: "/admin/deposit",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "News",
    path: "/admin/news",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "Messages",
    path: "/admin/messages",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "Analytics",
    path: "/admin/analytics",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "Announcements",
    path: "/admin/announcements",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "Support",
    path: "",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "Settings",
    path: "/admin/settings",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "Help!",
    path: "/admin/help",
  },
  {
    icon: <IoAppsOutline size={30} />,
    title: "Chat",
    path: "/admin/chat",
  },
];

export const Sidebar = async () => {
  const session = await getServerSession(authOptions);

  const avatarUrl = session?.user?.image
    ? session.user.image
    : "/images/default_avatar_male.jpg";

  const userName = session?.user?.name ?? "No Name";
  const userRoles = session?.user?.roles ?? ["client"];

  return (
    <aside className="bg-dashboard-gradient ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div  className="flex-grow">
        <div className="-mx-6 px-6 py-4">
          <Link href="#" title="home">
            <Image
              src="/images/logo.png"
              className="w-32"
              alt="Lucro-app"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={avatarUrl}
            width={150}
            height={150}
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {userName}
          </h5>
          <span className="hidden text-gray-400 lg:block capitalize">
            {userRoles.join(",")}
          </span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8 overflow-y-auto h-[calc(100vh-500px)]">
          {menuItems.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <LogoutButton />
      </div>
    </aside>
  );
};
