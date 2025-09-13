"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

import { IconType } from "react-icons";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

type NavigationItemProps = {
  title: string;
  path: string;
  Icon: IconType;
};

const NavigationItem = ({
  title,
  path,
  Icon,
}: NavigationItemProps) => {
  const pathname = usePathname();

  const isModuleActive = useMemo(() => pathname === path && pathname !== '/', [pathname, path]);

  return (
    <Link href={path}>
      <div
        className={`
          w-full px-4 py-3 flex items-center justify-between
          ${isModuleActive && 'bg-[#EDF5F2]'}
          ${!isModuleActive && 'hover:bg-gray-100 ease-in duration-150'}
        `}
      >
        <div
          className="flex items-center"
        >
          <Icon
            size={24}
            className="mr-2"
            color={isModuleActive ? '#3B8668' : '#272727'}
          />
          <h1
            className={`
              font-medium text-sm
              ${isModuleActive ? 'text-[#3B8668]' : 'text-[#272727]'}
            `}
          >
            {title}
          </h1>
        </div>
        <div>
          <MdOutlineKeyboardArrowRight
            size={24}
            color={isModuleActive ? '#3B8668' : '#272727'}
          />
        </div>
      </div>
    </Link>
  );
};

export default NavigationItem;