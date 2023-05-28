/** @format */

import { SEO } from "@/components/SEO";
import Button from "@/components/shared/Button";
import supabase from "@/libs/supabase";
import { Provider } from "@supabase/gotrue-js";
import { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { FaDiscord, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SiSpotify } from "react-icons/si";
import { BsDiscord, BsGithub } from "react-icons/bs";

const LoginPage: NextPage = () => {
  const handleSignIn = (provider: Provider) => () => {
    supabase.auth.signInWithOAuth({ provider });
  };

  return (
    <React.Fragment>
      <SEO title="Login" />
      <div className="w-full h-[768px] font-semibold flex rounded-full relative">
        <div className="w-[40%] h-full">
          <img
            className="w-full h-full object-cover"
            src={
              "https://rare-gallery.com/uploads/posts/501656-original-4k.jpg"
            }
            alt=""
          />
        </div>
        <div className="w-[70%] flex items-center justify-center flex-col gap-6 bg-stone-800 ">
          <div>
            <div className="text-[40px] font-bold text-white">ĐĂNG NHẬP</div>
          </div>
          {/* <Button
            className="bg-green-600 w-[17rem] rounded-sm text-white flex justify-center items-center gap-4 hover:bg-green-800"
            onClick={handleSignIn("spotify")}
          >
            <SiSpotify className="text-2xl " />
            <span>Login with Spotify</span>
          </Button> */}
          <Button
            className="bg-white w-[17rem] text-black rounded-sm flex justify-center items-center gap-4 hover:bg-slate-300"
            onClick={handleSignIn("github")}
          >
            <BsGithub className="text-2xl" />
            <span>Đăng nhập với GitHub</span>
          </Button>
          <Button
            className="bg-purple-700 w-[17rem] rounded-sm text-white flex justify-center items-center gap-4 hover:bg-purple-900"
            onClick={handleSignIn("discord")}
          >
            <BsDiscord className="text-2xl"/>
            <span>Đăng nhập với Discord </span>
          </Button>
        </div>
      </div>
      );
    </React.Fragment>
  );
};

export default LoginPage;
