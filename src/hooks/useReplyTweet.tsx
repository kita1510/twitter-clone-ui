/** @format */

import React from "react";
import { Tweet } from "@prisma/client";
import supabase from "@/libs/supabase";
import { v4 as uuidv4 } from "uuid";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/AuthContext";
import moment from "moment-timezone";

const useReplyTweet = () => {
  const queryClient = useQueryClient();
  const user = useUser();

  const { mutate: replyTweet } = useMutation({
    mutationFn: reply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
      queryClient.invalidateQueries({ queryKey: ["twee"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  async function reply(tweet: Tweet) {
    const state = await supabase.from("Reply").insert({
      id: uuidv4(),
      userId: user?.id,
      tweetId: tweet?.id,
      body: tweet?.body,
      createdAt: moment.tz(Date.now(), "Asia/Bangkok").format(),
    });
    if (state?.status === 201) {
      const state = await supabase.rpc("reply_a_tweet", { tweetId: tweet?.id });
      toast("Đã trả lời bài viết", { autoClose: 3000 });
    }
  }

  return { replyTweet };
};

export default useReplyTweet;
