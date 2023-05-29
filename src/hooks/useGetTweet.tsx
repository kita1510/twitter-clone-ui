/** @format */

import client from "@/libs/axios";
import { TweetProps } from "@/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const useGetTweet = (tweetId: string) => {
  const { data: tweet, status } = useQuery<any, any, TweetProps>({
    queryKey: ["twee"],
    queryFn: async () => {
      const { data } = await client.get("/tweet/" + tweetId);
      return data;
    },
  });
  return { tweet, status };
};

export default useGetTweet;
