/** @format */

import React from "react";
import { Tweet } from "@prisma/client";
import supabase from "@/libs/supabase";
import { v4 as uuidv4 } from "uuid";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/AuthContext";
import moment from "moment-timezone";

const useLikeTweet = () => {
  const queryClient = useQueryClient();
  const user = useUser();

  const { mutate: likeTweet } = useMutation({
    mutationFn: like,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  async function like(tweet: Tweet) {
    const state = await supabase.from("Like").insert({
      id: uuidv4(),
      userId: user?.id,
      tweetId: tweet?.id,
      createdAt: moment.tz(Date.now(), "Asia/Bangkok").format(),
    });
    if (state?.status === 201) {
      const state = await supabase.rpc("like_a_tweet", { tweetId: tweet?.id });
      toast("Đã thích bài viết", { autoClose: 3000 });
    }
  }

  const { mutate: unlikeTweet } = useMutation({
    mutationFn: unlike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  async function unlike(tweet: Tweet) {
    const state = await supabase
      .from("Like")
      .delete()
      .eq("tweetId", tweet?.id);
      console.log(state)

    if (state?.status === 204) {
      const state = await supabase.rpc("unlike_a_tweet", {
        tweetId: tweet?.id,
      });

      console.log(state);
      toast("Đã bỏ thích bài viết");
    }
  }

  return { likeTweet, unlikeTweet };
};

export default useLikeTweet;
