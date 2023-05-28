/** @format */

import React from "react";
// import cn from "clsx";
import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";

import { AnimatePresence, motion } from "framer-motion";

import type { Variants } from "framer-motion";
import TweetMetadata from "./TweetMetadata";
import BodyContent from "./BodyContent";
import Link from "next/link";
import NextLink from "@/components/NextLink";
import Avatar from "../Avatar";
import  TweetActions  from "./TweetAction";
import { TweetProps } from "@/types";

export const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};
export default function TweetReply({
  reply,
  tweet,
}: {
  reply?: boolean;
  tweet?: TweetProps;
}) {
  return (
    <div className="fade-in flex   cursor-pointer space-x-2 py-2 main-border  transition-all  ease-in-out">
      <div className=" flex min-h-full flex-col items-center ">
        <Avatar avatarImage={tweet?.User?.profileImage!} />
        {reply && (
          <div className="hover-animation  bg-line-reply dark:bg-dark-line-reply  h-[80%] w-0.5"></div>
        )}
      </div>
      <div className="flex w-full flex-col">
        <NextLink href={`/${tweet?.User?.username}`}>
          <TweetMetadata {...tweet} />
        </NextLink>
        <NextLink disabled={reply} href={`/tweet/${tweet?.id}`}>
          <BodyContent {...tweet} />
        </NextLink>
        <div className="mt-2 flex">
          {reply ? (
            <p className="text-secondary  cursor-text">
              Replying to
              <Link
                className="text-main-accent ml-1"
                href={`/${tweet?.User?.username}`}
              >
                @{tweet?.User?.username}
              </Link>
            </p>
          ) : (
            <div className="w-full">
              <TweetActions {...tweet} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
