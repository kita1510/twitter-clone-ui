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
import supabase from "@/libs/supabase";
import useTweets from "@/hooks/useTweets";
// import { newTweet } from "../../../../server/src/router/routes/tweetRouter/newTweet";

export default function BookMarksContent() {
  //   let getTweets = trpc.tweet.getAllTweets.useMutation();
  // const [tweets, setTweets] = useState([]);
  //   const [hasMore, setHasMore] = useState(false);

  const { tweets } = useTweets();
  const session = useUser();

  console.log(session);

  console.log(tweets);

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
        <PageHead name="BookMarks" />
        {/* 
         <NewTweets /> */}
        {tweets
          // ?.sort((a, b) => moment(a?.createdAt.slice(0,10)).isBefore(moment(b?.createdAt.slice(0,10))))
          ?.map((t, i) => (
            <React.Fragment key={t?.id}>
              {/* {console.log( moment(t?.createdAt.slice(0,10)).millisecond())} */}
              {/* {console.log( t?.createdAt?.slice(0,10))} */}
              <MainTweet key={i} tweet={t} />
            </React.Fragment>
          ))}
        {/* <div ref={ref}>
          {hasMore && <Spinner />}
          {getTweets.isLoading && <Spinner />}
        </div> */}
      </div>
    </div>
  );
}
