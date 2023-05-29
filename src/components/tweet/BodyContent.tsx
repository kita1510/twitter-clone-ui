/** @format */

import React from "react";
import { TweetProps } from "@/types";

export default function BodyContent(props?: TweetProps) {
  return (
    <>
      <p className="text-tweet whitespace-pre-line break-words py-2">
        {props?.body}
      </p>
    </>
  );
}
