/** @format */

import TweetBody from "@/components/TweetBody";
import { TweetProps } from "@/types";
import React from "react";

export function BodyContent(props: TweetProps) {
  return (
    <>
      <p className="text-tweet whitespace-pre-line mb-2 break-words">
        <TweetBody body={""} />
      </p>
      {/* {props.images[0] && ( */}
      <div className="my-3 mr-2 flex rounded-2xl ">
        <img
          className="max-h-[560px] rounded-2xl w-full "
          src={
            "https://i.pinimg.com/564x/61/33/f9/6133f9d829d6dae8186bcdc34507d037.jpg"
          }
          alt=""
        />
      </div>
      {/* )} */}
    </>
  );
}
