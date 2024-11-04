/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import MainTweet from "@/components/tweet/MainTweet";
import { PageHead } from "@/components/PageHead";
import useBookmark from "@/hooks/useBookmark";
import { useQueryClient } from "@tanstack/react-query";

export default function BookMarksContent({ tweetId }: { tweetId?: string }) {

  const { getTweetInBookmark } = useBookmark();
  // const tweets = getTweetInBookmark();
  const queryClient = useQueryClient()

  useEffect(()=>{
    queryClient.invalidateQueries({queryKey: ['tweetttt']})
  },[])

  return (
    <div className="main-content ">
      <div className="main-border mcz border-b border-l border-r ">

      </div>
    </div>
  );
}
