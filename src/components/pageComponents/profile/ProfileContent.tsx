/** @format */

import { type NextPage } from "next";
import { PageHead } from "@/components/PageHead";
import { useRouter } from "next/router";
import { Url } from "./Url";
import { Joined } from "../../../icons/Joined";
import { FollowStats } from "./FollowStats";
import Avatar from "@/components/Avatar";
import MainTweet from "@/components/tweet/MainTweet";
// import { trpc } from "@utils/trpc";
import { useEffect, useState } from "react";
import EditProfileModal from "@/components/modals/EditProfileModal";
// import { Spinner } from "@components/Spinner";
import { SEO } from "@/components/SEO";
import Button from "@/components/shared/Button";
import { useUser } from "@/contexts/AuthContext";
import { EditProfileBtn } from "./EditProfileBtn";
import { User } from "@prisma/client";
import client from "@/libs/axios";
import { TweetProps } from "@/types";
// import { PickVerificationIcon } from "@components/PickVerificationIcon";

const ProfileContent: NextPage = () => {
  const router = useRouter();
  const user = useUser();
  // console.log(user);
  const [userInfo, setUserInfo] = useState<User | undefined>();
  const [tweets, setTweets] = useState<TweetProps[] | undefined>();

  async function getUserInfo() {
    if (user) {
      const data = await client.get(`/user/${user?.id}`);
      setUserInfo(data?.data);
    }
  }

  async function getTweetsInfo() {
    if (user) {
      const data = await client.get(`/tweetuser/${user?.id}`);
      setTweets(data?.data);
    }
  }

  // console.log(user?.id)

  useEffect(() => {
    if (user) {
      getUserInfo();
    }
  }, []);

  useEffect(() => {
    if (user) {
      getTweetsInfo();
    }
  }, []);

  let [isOpen, setIsOpen] = useState(false);
  function toggleModal() {
    setIsOpen(!isOpen);
  }

  // console.log(user?.id);
  // console.log(tweets);

  return (
    <>
      <section className="mcz">
        <PageHead backBtn profile username={userInfo?.username} />
        <SEO title={userInfo?.username} />
        {/* {user ? ( */}
        <>
          <div>
            <BgImg
              src={
                userInfo?.bgImage! ||
                "https://i.pinimg.com/564x/8d/50/3d/8d503d0257dbe5c044e13d4a9ddc46fa.jpg"
              }
            />
            <div className="p-4">
              <div className="relative flex w-full items-center justify-between">
                <div style={{ marginTop: "-5rem" }}>
                  <Avatar avatarImage={userInfo?.profileImage!} size={130} />
                </div>
                {user?.id === userInfo?.id ? (
                  <EditProfileBtn onClick={toggleModal} />
                ) : (
                  <Button
                  // onClick={follow}
                  // text={isFollowing ? "Unfollow" : "Follow"}
                  >
                    <></>
                    Follow
                  </Button>
                )}
              </div>
              <div className="mt-3 ml-3 w-full justify-center space-y-1">
                <div>
                  <div className="flex items-center">
                    <h2 className="flex items-center text-xl font-bold leading-6 text-black">
                      {userInfo?.username}
                    </h2>
                    {/* @ts-ignore */}
                    {/* <PickVerificationIcon color={user.badge!} /> */}
                  </div>
                  <p className="text-sm font-medium leading-5 text-gray-600">
                    @{userInfo?.username}
                  </p>
                </div>
                <div className="mt-3">
                  <p className="mb-2 max-w-full leading-tight text-black">
                    {userInfo?.bio}
                  </p>
                  <div className="flex text-gray-600">
                    <Url website={userInfo?.website!} />
                    <Joined date={userInfo?.createdAt!} />
                  </div>
                </div>
                <FollowStats
                  followers={userInfo?.followersCount!}
                  following={userInfo?.followingCount!}
                  // username={username}
                />
              </div>
            </div>
            <hr className="border-gray-800" />
          </div>
          <ul className="list-none">
            {tweets?.map((t) => (
              <div key={t?.id} className="">
                <MainTweet key={t?.id} tweet={t} />
              </div>
            ))}
          </ul>
          <EditProfileModal
            user={userInfo || null}
            isOpen={isOpen}
            closeModal={toggleModal}
            // onSave={editProfile}
          />
        </>
        {/* ) : ( */}
        <>{/* <Spinner /> */}</>
        {/* )} */}
      </section>
    </>
  );
};

export default ProfileContent;

function BgImg({ src }: { src: string }) {
  return (
    <img
      className="w-full  bg-cover object-cover"
      style={{ height: 200, visibility: src ? "visible" : "hidden" }}
      src={src}
    />
  );
}
