/** @format */

import ProfileIcon from "@/icons/ProfileIcon";
import BlueVerified from "@/icons/verified/Blue";
import { navItems } from "@/utils/navItem";
import { useEffect, useState } from "react";
import NextLink from "../NextLink";
import { Logo } from "../shared/Logo";
import SidebarItem from "../shared/SidebarItem";
import { FiLogOut } from "react-icons/fi";
import { useUser } from "@/contexts/AuthContext";
import Button from "../shared/Button";
import { useSession } from "@supabase/auth-helpers-react";
import supabase from "@/libs/supabase";
import { replaceSpacing } from "@/utils/replaceText";
import client from "@/libs/axios";
import TweetModal from "@/components/modals/TweetModal";
import useRandomTweets from "@/hooks/useRandomTweets";

export default function SidebarLeft({ active }: { active?: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const user = useUser();
  const session = useSession();

  const {tweets} = useRandomTweets()

  // console.log(tweets)

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function toggleModal2() {
    setIsOpen2(!isOpen2);
  }

  // console.log(user);
  return (
    <>
      <TweetModal isOpen={isOpen} closeModal={toggleModal} />
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
              href={"/" + replaceSpacing(user?.user_metadata?.name)}
              text="Trang cá nhân"
              index={6}
              active={active}
            />
            {/* <div
              onClick={toggleModal2}
              className="duration-350 sidebar-hover flex cursor-pointer items-center 
                            justify-center rounded-full p-4  transition ease-in-out xl:justify-start"
            >
              <BlueVerified className="h-6 w-6" />
              <span className="text-md ml-4 hidden font-bold xl:block">
                Get Verified
              </span>
            </div> */}
            <a
              onClick={toggleModal}
              className="font-sm mx-auto mt-2 mb-10 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-blue-500 py-3 font-bold text-white transition-colors duration-150 dark:hover:bg-blue-400 xl:w-auto"
            >
              <span className="text-md hidden font-bold xl:block">Tweet</span>
            </a>
          </nav>
          {user ? (
            <User />
          ) : (
            <NextLink className="flex justify-center" href="/login">
              <Button className="w-40 h-10 bg-red-500 text-white rounded-lg">
                Login
              </Button>
            </NextLink>
          )}
        </div>
      </div>
    </>
  );
}

function User() {
  const user = useUser();
  async function logout() {
    await supabase.auth.signOut();
    window.location.reload();
  }
  // if (!user) return <></>;
  return (
    <div
      className="mx-auto mt-auto mb-5 flex w-14 cursor-pointer flex-row items-center 
            justify-between rounded-full p-3 transition duration-150 ease-in-out xl:w-full"
    >
      <NextLink href={"/"}>
        <div className="flex flex-row items-center">
          <img
            className="w-16 h-16 rounded-full object-cover"
            src={user?.user_metadata?.avatar_url}
          />
          <div className="ml-2 hidden xl:block">
            <h1 className="flex text-sm font-bold text-gray-800 dark:text-white">
              <span className="truncate text-ellipsis ">
                {user?.user_metadata?.name}
              </span>
              {/* <PickVerificationIcon color={"blue"} /> */}
            </h1>
            <p className="text-sm text-gray-400">@aaaaaaaaaa</p>
          </div>
        </div>
      </NextLink>
      <div>
        <div
          onClick={logout}
          className="flex items-center rounded-full p-3 text-gray-800 duration-150 hover:bg-gray-700 dark:text-white"
        >
          <FiLogOut className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}
