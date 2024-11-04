/** @format */

import React from "react";
import { Tweet } from "@prisma/client";
import supabase from "@/libs/supabase";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

const useReplyTweet = () => {
  const queryClient = useQueryClient();

  const { mutate: replyTweet } = useMutation({
    mutationFn: reply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
      queryClient.invalidateQueries({ queryKey: ["twee"] });
      queryClient.invalidateQueries({ queryKey: ["tweetttt"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
 
  async function reply(tweet: Tweet) {
    const state = await supabase.from("Reply").insert({
      tweetId: tweet?.id,
      body: tweet?.body,
    });
    if (state?.status === 201) {
      const state = await supabase.rpc("reply_a_tweet", { tweetId: tweet?.id });
      toast.success("Đã trả lời bài viết");
    }
  }

  return { replyTweet };
};

export default useReplyTweet;
