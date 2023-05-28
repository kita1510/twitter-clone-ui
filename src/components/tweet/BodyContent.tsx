/** @format */

import React from "react";
import { TweetProps } from "@/types";

export default function BodyContent(props?: TweetProps) {
  return (
    <>
      <p className="text-tweet whitespace-pre-line break-words">
        {props?.body}
      </p>
    </>
  );
}
