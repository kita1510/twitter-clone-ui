/** @format */

import { useFormattedDate } from "@/hooks/useFormattedDate";
import React from "react";
// import { VerifiedIcon } from "@/icons/tweet/VerifiedIcon";
import { TweetProps } from "@/types";
import NextLink from "@/components/NextLink";
import { ColorType, PickVerificationIcon } from "@/icons/PickVerificationIcon";

export default function TweetReplyMetadata({
  color,
  ...props
}: TweetProps & ColorType) {
  const formattedDate = useFormattedDate(props.createdAt);


  return (
    <>
      <div className="flex">
        <div className="flex flex-col">
          <p className="flex items-center text-base font-medium leading-6 text-gray-800 dark:text-white">
            {/* {user?.user_metadata?.name} */}
            <PickVerificationIcon color={color} />
            <span className="ml-1 text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
              {/* @{user?.user_metadata?.name} · {formattedDate} */}
            </span>
          </p>
          <span className="text-sm font-medium leading-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-300">
            Replying to{" "}
            <NextLink href="">
              <span className="text-main-accent ">
                @{props?.User?.username}{" "}
              </span>
            </NextLink>
          </span>
        </div>
      </div>
    </>
  );
}
