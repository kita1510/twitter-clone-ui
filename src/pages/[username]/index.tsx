import { SEO } from "@/components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@/components/partials/SidebarLeft";
import SidebarRight from "@/components/partials/SidebarRight";
import  ProfileContent  from "@/components/pageComponents/profile/ProfileContent";
// import { getUserSession } from "@hooks/getUserSession";
import { useRouter } from "next/router";
import { User } from "@prisma/client";
import { useState } from "react";

const ProfilePage: NextPage = () => {
  // let session = getUserSession();
  const router = useRouter();

  // const { username } = router.query as { username: string };
  return (
    <>
      <SEO title="Twitter" />
      <div className="mx-auto ">
        <div className="flex  flex-row justify-center">
          <SidebarLeft />
          <ProfileContent />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;