/** @format */

import React, { useEffect, useRef, useState } from "react";

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
import useRandomTweets from "@/hooks/useRandomTweets";
import moment from "moment";

export default function HomeContent() {
  //   const [hasMore, setHasMore] = useState(false);

  const { tweets } = useTweets();
  const [user, setUser] = useState();
  const session = useUser();

  async function getUser() {
    const user = await client.get("/user/" + session?.id);
    setUser(user?.data);
  }

  // console.log(session);

  // console.log(tweets);

  async function addUser() {
    await supabase.from("User").insert({
      id: session?.id,
      username: replaceSpacing(session?.user_metadata?.name),
      email: session?.user_metadata?.email,
      provider: session?.app_metadata?.provider,
      profileImage: session?.user_metadata?.avatar_url,
    });
  }

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    addUser();
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
          ?.sort((a, b) => {return moment(b?.createdAt).unix() -  moment(a?.createdAt).unix()})
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
