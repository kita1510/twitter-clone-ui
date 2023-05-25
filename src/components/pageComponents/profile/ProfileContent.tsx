/** @format */

import { type NextPage } from "next";
import { PageHead } from "@/components/PageHead";
import { useRouter } from "next/router";
import { Url } from "./Url";
import { Joined } from "./Joined";
// import { FollowStats } from "./FollowStats";
import Avatar from "@/components/Avatar";
import MainTweet from "@/components/tweet/MainTweet";
// import { trpc } from "@utils/trpc";
import { useEffect, useState } from "react";
// import { EditProfileBtn } from "./EditProfileBtn";
// import EditProfileModal from "@components/modals/EditProfileModal";
// import { Spinner } from "@components/Spinner";
import { SEO } from "@/components/SEO";
// import { getUserSession } from "@hooks/getUserSession";
import Button from "@/components/shared/Button";
import { useUser } from "@/contexts/AuthContext";
// import { User } from "@prisma/client";
// import { PickVerificationIcon } from "@components/PickVerificationIcon";

export const ProfileContent: NextPage = () => {
  const router = useRouter();
  const user = useUser();
  console.log(user);
  //   const { username } = router.query as { username: string };
  //   let getUser = trpc.user.getUser.useQuery({ username });
  //   let followUser = trpc.user.followUser.useMutation();
    // const user, setUser] = useState(getUser.data?.user);
  //   let session = getUserSession();
  //   const [isFollowing, setIsFollowing] = useState(
  //     user?.followers.some((f) => f.followingId === session.id)
  //   );
  //   useEffect(() => {
  //     setUser(getUser.data?.user);
  //     setIsFollowing(user?.followers.some((f) => f.followingId === session.id));
  //   }, [getUser.data, user]);
  let [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }
  //   function editProfile(data) {
  //  @ts-ignore
  // setUser({ ...user, ...data });
  //   }
  //   async function follow() {
  //     setIsFollowing(!isFollowing);
  //     let res = await followUser.mutateAsync({ id: user?.id! });
  //     console.log("tressss", res);
  //   }

  const dummyName = "Luan";
  return (
    <>
      <section className="mcz">
        <PageHead backBtn profile username={dummyName} name={dummyName} />
        <SEO title={dummyName} />
        {/* {user ? ( */}
        <>
          <div>
            <BgImg
              src={
                user?.bgImage! ||
                "https://i.pinimg.com/564x/8d/50/3d/8d503d0257dbe5c044e13d4a9ddc46fa.jpg"
              }
            />
            <div className="p-4">
              <div className="relative flex w-full items-center justify-between">
                <div style={{ marginTop: "-5rem" }}>
                  <Avatar
                    avatarImage={
                      "https://i.pinimg.com/564x/61/33/f9/6133f9d829d6dae8186bcdc34507d037.jpg"
                    }
                    size={130}
                  />
                </div>
                {user.id ? (
                  <EditProfileBtn onClick={toggleModal} />
                ) : (
                  // <MainButton
                  //   onClick={follow}
                  //   text={isFollowing ? "Unfollow" : "Follow"}
                  // />
                  <></>
                )}
              </div>
              <div className="mt-3 ml-3 w-full justify-center space-y-1">
                <div>
                  <div className="flex items-center">
                    <h2 className="flex items-center text-xl font-bold leading-6 text-white">
                      {dummyName}
                    </h2>
                    {/* @ts-ignore */}
                    {/* <PickVerificationIcon color={user.badge!} /> */}
                  </div>
                  <p className="text-sm font-medium leading-5 text-gray-600">
                    @{dummyName}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="mb-2 max-w-full leading-tight text-white">
                    {/* {user?.bio} */}
                  </p>
                  <div className="flex text-gray-600">
                    {/* <Url website={user?.website!} />
                      <Joined date={user?.createdAt!} /> */}
                  </div>
                </div>
                {/* <FollowStats
                // followers={user?.followersCount!}
                // following={user?.followingCount!}
                // username={username}
                /> */}
              </div>
            </div>
            <hr className="border-gray-800" />
          </div>
          <ul className="list-none">
            {/* {user?.tweets?.map((t) => (
                <div key className="">
                  <MainTweet key={t.id} tweet={t} />
                </div>
              ))} */}
          </ul>
          {/* <EditProfileModal
            //   user={user}
            isOpen={isOpen}
            closeModal={toggleModal}
            onSave={editProfile}
          /> */}
        </>
        {/* ) : ( */}
        <>{/* <Spinner /> */}</>
        {/* )} */}
      </section>
    </>
  );
};

function BgImg({ src }: { src: string }) {
  return (
    <img
      className="w-full  bg-cover object-cover"
      style={{ height: 200, visibility: src ? "visible" : "hidden" }}
      src={src}
    />
  );
}
