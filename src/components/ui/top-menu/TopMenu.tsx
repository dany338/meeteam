'use server';

import { cookies } from "next/headers";
import Link from "next/link";
import {
  CiSearch,
  CiMenuBurger,
  CiChat1,
  CiShoppingBasket,
} from "react-icons/ci";
import { IoNotificationsSharp } from 'react-icons/io5';
import TimeFilter from '../time-filter/TimeFilter';

export const TopMenu = () => {
  const totalItems = 8;

  return (
    <div className="bg-dashboard-gradient sticky z-10 top-0 h-16 border-b bg-gray-900 lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 hidden className="text-2xl text-gray-300 font-medium lg:block">
          Dashboard Overview
        </h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
          <CiMenuBurger size={30} />
        </button>
        <div className="flex-1 flex justify-center">
          <TimeFilter /> {/* Center the TimeFilter component */}
        </div>
        <div className="flex space-x-2">
          <div hidden className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
            <CiSearch />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <IoNotificationsSharp size={25} />
          </button>

          <Link
            href={"/admin/activity"}
            className="p-2 flex items-center justify-center h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
          >
            {totalItems > 0 && (
              <span className="text-sm mr-2 text-blue-800 font-bold">
                {totalItems}
              </span>
            )}
            <span className="text-gray-600">Carlos M.</span>
            <CiShoppingBasket size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
};
