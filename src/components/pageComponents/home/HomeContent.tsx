/** @format */

import React, { useEffect, useRef, useState } from "react";
// import { TweetInput } from "@components/inputs/TweetInput";
// import { trpc } from "@utils/trpc";
// import { Spinner } from "@components/Spinner";
// import { NewTweets } from "@components/NewTweets";
// import { PageHead } from "@components/PageHead";
import { useInView } from "react-intersection-observer";
import MainTweet from "@/components/tweet/MainTweet";
import { PageHead } from "@/components/PageHead";
import { TweetInput } from "@/components/inputs/tweetInput/TweetInput";
import client from "@/libs/axios";
import { useUser } from "@/contexts/AuthContext";
import { GoTrueClient } from "@supabase/gotrue-js";
import supabase from "@/libs/supabase";
import { replaceSpacing } from "@/utils/replaceText";
import useTweets from "@/hooks/useTweets";
// import { newTweet } from "../../../../server/src/router/routes/tweetRouter/newTweet";

export default function HomeContent() {
  //   let getTweets = trpc.tweet.getAllTweets.useMutation();
  // const [tweets, setTweets] = useState([]);
  //   const [hasMore, setHasMore] = useState(false);

  const {tweets} = useTweets()
  const [user, setUser] = useState();
  const session = useUser();

  async function getUser() {
    const user = await client.get("/user/" + session?.id);
    setUser(user?.data);
  }

  console.log(session);

  console.log(tweets)

  async function addUser() {
    await supabase.from("User").insert({
      id: session?.id,
      username: replaceSpacing(session?.user_metadata?.name),
      email: session?.user_metadata?.email,
      provider: session?.app_metadata?.provider,
    });   
     await supabase.from("User").upsert({
      id: session?.id,
      username: replaceSpacing(session?.user_metadata?.name),
      email: session?.user_metadata?.email,
      profileImage: session?.user_metadata?.avatar_url,
      provider: session?.app_metadata?.provider,
    }).eq("id", session?.id);
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    addUser();
  }, [session]);

  console.log(user);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  //   async function fetchTweets() {
  //     const skip = tweets?.length || 0;
  //     const newTweets = await getTweets.mutateAsync({ skip });
  //     const uniqueTweets = removeDuplicates([
  //       ...(tweets || []),
  //       ...(newTweets?.tweets || []),
  //     ]);
  //     setTweets(uniqueTweets);
  //     setHasMore(newTweets.hasMore);
  //   }

  //   function removeDuplicates(tweets:any) {
  //     const tweetSet = new Set();
  //     return tweets.filter((tweet) => {
  //       if (tweetSet.has(tweet.id)) {
  //         return false;
  //       } else {
  //         tweetSet.add(tweet.id);
  //         return true;
  //       }
  //     });
  //   }

    // useEffect(() => {
    //   fetchTweets();
    // }, []);

  //   // Refetch tweets when inView and not loading
  //   useEffect(() => {
  //     if (inView && !getTweets.isLoading && hasMore) {
  //       fetchTweets();
  //     }
  //   }, [getTweets.isLoading, inView, tweets, hasMore]);

  //   function onPost(data: any) {
  //     //@ts-ignore
  //     data && setTweets([data, ...tweets]);
  //   }
  return (
    <div className="main-content ">
      <div className="main-border mcz border-b border-l border-r ">
        <PageHead name="Home" />
        <TweetInput onPost={""} />

        {/* 
         <NewTweets /> */}
        {tweets?.map((t, i) => (
          <MainTweet key={i} tweet={t} />
        ))}
        {/* <div ref={ref}>
          {hasMore && <Spinner />}
          {getTweets.isLoading && <Spinner />}
        </div> */}
      </div>
    </div>
  );
}
