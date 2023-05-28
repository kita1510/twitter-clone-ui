/** @format */

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";
import type { Variants } from "framer-motion";
import ReactTextareaAutosize from "react-textarea-autosize";
import TweetMetadata from "../TweetMetadata";
import BodyContent from "../BodyContent";
import TweetDetailsMetaData from "./TweetDetailsMetadata";
import { TweetMetrics } from "../TweetMetrics";
import TweetActions from "../TweetAction";
import Avatar from "@/components/Avatar";
import Button from "@/components/shared/Button";
import { TweetProps } from "@/types";

type Inputs = {
  body: string;
};
export const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function TweetDetails({
  reply,
  tweet,
}: {
  reply?: boolean;
  tweet: TweetProps;
}) {
  const { register, handleSubmit, watch, reset } = useForm<Inputs>();

  console.log(tweet)
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    reset();
  };
  return (
    <div className="fade-in flex flex-col px-4   transition-all  ease-in-out">
      <TweetDetailsMetaData tweet={tweet} reply={reply!} />
      <div className="ml-1 mt-1">
        <BodyContent {...tweet} />
      </div>

      <div className="my-2 flex  flex-col space-y-4  ">
        <TweetMetrics tweet={tweet} />
        <div className="main-border w-full border-y">
          <TweetActions {...tweet} />
        </div>

        <div className="main-border flex items-center gap-6 border-b pb-5 ">
          <div className="">
            <Avatar avatarImage={tweet?.User?.profileImage} />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-full justify-between "
          >
            <ReactTextareaAutosize
              maxRows={9}
              rows={4}
              {...register("body", { required: true })}
              placeholder="Tweet your reply"
              className="flex h-20 w-full resize-none items-center justify-center  bg-transparent
                            text-lg text-white placeholder-gray-400  focus:outline-none "
            />

            <Button>Reply</Button>
          </form>
        </div>
        <div className="flex flex-col ">
          {/* {tweetReplies.map((t) => (
            <TweetDetailsReply tweet={t} />
          ))} */}
        </div>
      </div>
    </div>
  );
}
