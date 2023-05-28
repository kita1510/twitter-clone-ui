/** @format */

import React, { useEffect, useRef, useState } from "react";
// import { Spinner } from "@/components/Spinner";
import { PageHead } from "@/components/PageHead";
import TweetDetails from "@/components/tweet/detail/TweetDetails";
import useGetTweet from "@/hooks/useGetTweet";

export default function TweetContent({ tweetId }: { tweetId: string }) {
  const { tweet } = useGetTweet(tweetId);

  console.log(tweet);

  //   console.log("tweeet", data);
  // let allTweets = trpc.tweet.getAllTweets.useQuery({ id: "anysddssdss" });
  // const [tweets, setTweets] = useState(allTweets.data?.tweets);
  // console.log("tweetssss", tweets, allTweets.data);
  // useEffect(() => {
  //   setTweets(allTweets.data?.tweets);
  // }, [allTweets.data]);
  //
  return (
    <div className="main-border mcz h-screen border-b border-l border-r">
      <PageHead backBtn name="Tweet" />
      <TweetDetails tweet={tweet!} />
    </div>
  );
}
