/** @format */

import React, { useEffect, useRef, useState } from "react";

import { useInView } from "react-intersection-observer";
import MainTweet from "@/components/tweet/MainTweet";
import { PageHead } from "@/components/PageHead";
import { TweetInput } from "@/components/inputs/tweetInput/TweetInput";
import client from "@/libs/axios";
import supabase from "@/libs/supabase";
import { replaceSpacing } from "@/utils/replaceText";
import useTweets from "@/hooks/useTweets";
import useRandomTweets from "@/hooks/useRandomTweets";
import moment from "moment";

export default function HomeContent() {
  //   const [hasMore, setHasMore] = useState(false);

  const { tweets } = useTweets();
  const [user, setUser] = useState();

  async function getUser() {
    const user = await client.get("/user/");
    setUser(user?.data);
  }

  // console.log(session);

  // console.log(tweets);

  useEffect(() => {
    getUser();
  }, []);

  // console.log(user);
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  return (
    <div className="main-content ">
      <div className="main-border mcz border-b border-l border-r ">
        <PageHead name="Home" />
        <TweetInput onPost={""} />

        {/* 
         <NewTweets /> */}
        {tweets
          ?.sort((a, b) => {
            return moment(b?.createdAt).unix() - moment(a?.createdAt).unix();
          })
          ?.map((t, i) => (
            <React.Fragment key={t?.id}>
              {/* {console.log( moment(t?.createdAt).unix())} */}
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
