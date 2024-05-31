"use client";

import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  title: string;
}

const BackButton = ({ path, title }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={`
        px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
        hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
        ${path === pathName ? "text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""}
      `}
    >
      <IoArrowBack className="text-xl" />
      <span className="group-hover:text-white-700">{title}</span>
    </Link>
  );
};

export default BackButton;
