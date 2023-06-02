/** @format */

import { SEO } from "@/components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@/components/partials/SidebarLeft";
import SidebarRight from "@/components/partials/SidebarRight";
import ProfileContent from "@/components/pageComponents/profile/ProfileContent";
import { useRouter } from "next/router";


const ProfilePage: NextPage = () => {
  const router = useRouter();
  const { tweetId } = router.query ;
  console.log(tweetId)

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
