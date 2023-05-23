/** @format */

import React from "react";
import NextLink from "../NextLink";

interface Icon {
  className?: string;
  size: number;
}

export type SidebarItemProps = {
  href?: string;
  text: string;
  disabled?: boolean;
  Icon?: React.ReactNode;
  active?: number;
  index?: number;
};

export default function SidebarItem({
  href,
  text,
  Icon,
  active,
  index,
  disabled,
}: SidebarItemProps) {
  if (disabled)
    return (
      <div
        className={`duration-350 sidebar-hover flex cursor-not-allowed items-center  justify-center rounded-full p-4 ${
          active === index ? "text-blue-400 " : "text-gray-800 dark:text-white"
        } transition ease-in-out xl:justify-start`}
      >
        {Icon}
        <span className="text-md ml-4 hidden font-bold xl:block">{text}</span>
      </div>
    );

  return (
    <NextLink
      href={href}
      className={`duration-350 sidebar-hover flex items-center   justify-center rounded-full p-4 ${
        active === index ? "text-blue-400 " : "text-gray-800 dark:text-white"
      } transition ease-in-out xl:justify-start`}
    >
      {Icon}
      <span className="text-md ml-4 hidden font-bold xl:block">{text}</span>
    </NextLink>
  );
}
