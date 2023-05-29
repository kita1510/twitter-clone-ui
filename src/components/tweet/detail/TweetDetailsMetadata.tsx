/** @format */

import React from "react";
import NextLink from "@/components/NextLink";
import { TweetProps } from "@/types";
import TweetMetadata from "../TweetMetadata";
import Avatar from "@/components/Avatar";
import  TweetReplyMetadata  from "../reply/TweetReplyMetadata";

export default function TweetDetailsMetaData({
  tweet,
  reply,
}: {
  tweet?: TweetProps;
  reply?: boolean;
}) {
  console.log(tweet);
  return (
    <div className="flex   space-x-2   ">
      <div className=" flex min-h-full flex-col items-center ">
        <Avatar avatarImage={tweet?.User?.profileImage!} />
        {reply && (
          <div className="hover-animation  bg-line-reply dark:bg-dark-line-reply  h-[80%] w-0.5"></div>
        )}
      </div>
      <div className="flex w-full flex-col">
        <NextLink href={`/${tweet?.User?.username}`}>
          <TweetReplyMetadata color={tweet?.User?.badge!} {...tweet} />
        </NextLink>
      </div>
    </div>
  );
}
