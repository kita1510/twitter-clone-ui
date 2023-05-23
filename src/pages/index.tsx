/** @format */

import Image from "next/image";
import { Inter } from "next/font/google";
import React from "react";
import { SEO } from "@/components/SEO";
import SidebarLeft from "@/components/partials/SidebarLeft";
import SidebarRight from "@/components/partials/SidebarRight";
import MainTweet from "@/components/tweet/MainTweet";
import HomeContent from "@/components/pageComponents/home/HomeContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <div className="mx-auto">
        <div className="flex flex-row justify-center">
          <SidebarLeft />
          <HomeContent />
          <SidebarRight />
        </div>
      </div>
    </React.Fragment>
  );
}
