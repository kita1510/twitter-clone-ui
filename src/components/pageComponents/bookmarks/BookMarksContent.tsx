/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import MainTweet from "@/components/tweet/MainTweet";
import { PageHead } from "@/components/PageHead";
import { useUser } from "@/contexts/AuthContext";
import useBookmark from "@/hooks/useBookmark";
import { useQueryClient } from "@tanstack/react-query";

export default function BookMarksContent({ tweetId }: { tweetId?: string }) {

  const { getTweetInBookmark } = useBookmark();
  const session = useUser();
  const tweets = getTweetInBookmark(session);
  const queryClient = useQueryClient()

  useEffect(()=>{
    queryClient.invalidateQueries({queryKey: ['tweetttt']})
  },[])

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
              {/* {console.log( moment(t?.createdAt.slice(0,10)).millisecond())}
              {console.log( t?.createdAt?.slice(0,10))} */}
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
