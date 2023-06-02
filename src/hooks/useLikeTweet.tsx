/** @format */

import React from "react";
import { Tweet } from "@prisma/client";
import supabase from "@/libs/supabase";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/AuthContext";

const useLikeTweet = () => {
  const queryClient = useQueryClient();
  const user = useUser();

  const { mutate: likeTweet } = useMutation({
    mutationFn: like,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
      queryClient.invalidateQueries({ queryKey: ["twee"] });
      queryClient.invalidateQueries({ queryKey: ["tweetttt"] });
      toast.success("Đã thích bài viết", { autoClose: 3000 });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  async function like(tweet: Tweet) {
    const state = await supabase.from("Like").insert({
      userId: user?.id,
      tweetId: tweet?.id,
    });
    if (state?.status === 201) {
      const state = await supabase.rpc("like_a_tweet", { tweetId: tweet?.id });
    }
  }

  const { mutate: unlikeTweet } = useMutation({
    mutationFn: unlike,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
      queryClient.invalidateQueries({ queryKey: ["twee"] });
      queryClient.invalidateQueries({ queryKey: ["tweetttt"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
  async function unlike(tweet: Tweet) {
    const state = await supabase.from("Like").delete().eq("tweetId", tweet?.id);
    console.log(state);

    console.log(tweet);
    if (state?.status === 204) {
      const state = await supabase.rpc("unlike_a_tweet", {
        tweetId: tweet?.id,
      });
      console.log(state);
      toast.success("Đã bỏ thích bài viết");
    }
  }

  return { likeTweet, unlikeTweet };
};

export default useLikeTweet;
