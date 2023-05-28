import { SEO } from "@/components/SEO";
import { type NextPage } from "next";
import SidebarLeft from "@/components/partials/SidebarLeft";
import SidebarRight from "@/components/partials/SidebarRight";
import  ProfileContent  from "@/components/pageComponents/profile/ProfileContent";

const ProfilePage: NextPage = () => {
  
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