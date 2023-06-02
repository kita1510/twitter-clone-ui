/** @format */

import React from "react";
import { TweetProps } from "@/types";

export default function BodyContent(props?: TweetProps) {
  return (
    <>
      <p className="text-tweet whitespace-pre-line break-words py-2">
        {props?.body}
      </p>
      {props?.images && (
        <div className="my-3 mr-2 flex rounded-2xl ">
          <img
            className="max-h-[460px] rounded-2xl w-full object-cover "
            src={props.images}
            alt=""
          />
        </div>
      )}
    </>
  );
}
