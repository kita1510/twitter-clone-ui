/** @format */

import SidebarLeft from "@/components/partials/SidebarLeft";
import { SEO } from "@/components/SEO";
import { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <SEO title="Home" />
      <div className="mx-auto">
        <div className="flex flex-row justify-center">
          <SidebarLeft />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
