/** @format */

import { SidebarItemProps } from "@/components/shared/SidebarItem";
import { AiTwotoneHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

export let navItems: SidebarItemProps[] = [
  {
    href: "/",
    text: "Trang chủ",
    Icon: <AiTwotoneHome size={26} />,
  },
  // {
  //   href: "/explore",
  //   text: "Khám phá",
  //   disabled: true,
  //   Icon: <MdOutlineExplore size={26} />,
  // },
  // {
  //   disabled: true,
  //   href: "/notifications",
  //   text: "Thông báo",
  //   Icon: <IoNotificationsOutline size={26} />,
  // },
  // {
  //   href: "/messages",
  //   text: "Messages",
  //   diabled: true,
  //   icon: "",
  // },
  {
    href: "/bookmarks",
    text: "Đã lưu",
    disabled: false,
    Icon: <BsBookmark size={26} />,
  },
  // {
  //   href: "/settings",
  //   text: "Settings",
  //   diabled: true,
  //   icon: "",
  // },
];
