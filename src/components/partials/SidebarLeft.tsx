/** @format */

import ProfileIcon from "@/icons/ProfileIcon";
import BlueVerified from "@/icons/verified/Blue";
import { navItems } from "@/utils/navItem";
import { useState } from "react";
import NextLink from "../NextLink";
import { Logo } from "../shared/Logo";
import SidebarItem from "../shared/SidebarItem";
import { FiLogOut } from "react-icons/fi";
import Avatar from "../shared/Avatar";

export default function SidebarLeft({ active }: { active?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleModal2() {
    setIsOpen2(!isOpen2);
  }
  return (
    <>
      {/* <TweetModal isOpen={isOpen} closeModal={toggleModal} /> */}
      {/* <VerifiedModal isOpen={isOpen2} closeModal={toggleModal2} /> */}
      <div className="h-screen xs:w-[88px] block xl:w-[275px]">
        <div className="fixed flex h-screen w-[68px] flex-col overflow-y-auto xs:w-[88px] xl:w-[275px]">
          <Logo />
          <nav className="mt-5 ">
            {navItems.map((item, index) => (
              <SidebarItem
                {...item}
                key={index}
                index={index}
                active={active}
              />
            ))}
            <SidebarItem
              Icon={<ProfileIcon />}
              href={"/"}
              text="Profile"
              index={6}
              active={active}
            />
            <div
              onClick={toggleModal2}
              className="duration-350 sidebar-hover flex cursor-pointer items-center 
                            justify-center rounded-full p-4  transition ease-in-out xl:justify-start"
            >
              <BlueVerified className="h-6 w-6" />
              <span className="text-md ml-4 hidden font-bold xl:block">
                Get Verified
              </span>
            </div>
            <a
              onClick={toggleModal}
              className="font-sm mx-auto mt-2 mb-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-blue-500 py-3 font-bold text-white transition-colors duration-150 dark:hover:bg-blue-400 xl:w-auto"
            >
              <span className="text-md hidden font-bold xl:block">Tweet</span>
            </a>
          </nav>
          <User />
        </div>
      </div>
    </>
  );
}

function User() {
  // let session = getUserSession();
  // const [user, setUser] = useState(session);
  // function logout() {
  //   signOut();
  // }
  // if (!user) return <></>;
  return (
    <div
      className="mx-auto mt-auto mb-5 flex w-14 cursor-pointer flex-row items-center 
            justify-between rounded-full p-3 transition duration-150 ease-in-out xl:w-full"
    >
      <NextLink href={"/"}>
        <div className="flex flex-row items-center">
          <img className="w-16 h-16 rounded-full object-cover" src="https://i.pinimg.com/564x/a2/20/de/a220de1effc62e0909b0af9f26bfa898.jpg" />
          <div className="ml-2 hidden xl:block">
            <h1 className="flex text-sm font-bold text-gray-800 dark:text-white">
              <span className="truncate text-ellipsis ">
                {/* {user.name || user.username} */}
                Luan Nguyen
              </span>
              {/* <PickVerificationIcon color={"blue"} /> */}
            </h1>
            <p className="text-sm text-gray-400">@aaaaaaaaaa</p>
          </div>
        </div>
      </NextLink>
      <div>
        <div
          // onClick={logout}
          className="flex items-center rounded-full p-3 text-gray-800 duration-150 hover:bg-gray-700 dark:text-white"
        >
          <FiLogOut className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
