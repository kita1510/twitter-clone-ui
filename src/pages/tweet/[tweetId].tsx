/** @format */

import { type NextPage } from "next";
// import  from "next/link";
import { useRouter } from "next/router";
import { SEO } from "@/components/SEO";
import SidebarLeft from "@/components/partials/SidebarLeft";
import SidebarRight from "@/components/partials/SidebarRight";
import TweetContent from "@/components/pageComponents/tweet/TweetContent";

const Tweet: NextPage = () => {
  const router = useRouter();
  //   const params = u
  const { tweetId } = router.query as { tweetId: string };

  return (
    <>
      <SEO title="Tweet" />
      <div className="mx-auto ">
        <div className="bg-r flex  flex-row justify-center">
          <SidebarLeft />
          <TweetContent tweetId={tweetId} />
          <SidebarRight />
        </div>
      </div>
    </>
  );
};

export default Tweet;
