/** @format */

import React from "react";
import { Tweet } from "@prisma/client";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import client from "@/libs/axios";
import supabase from "@/libs/supabase";

const useCreateTweet = () => {
  const queryClient = useQueryClient();

  const { mutate: createTweet } = useMutation({
    mutationFn: creTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  async function creTweet(tweet: Tweet) {
    const state = await supabase.from("Tweet").insert({
      body: tweet.body,
      images: tweet.images,
    });
    // const state = await client.post("/tweet", {
    //   userId: user?.id,
    //   body: tweet?.body,
    // });
    if (state) {
      toast.success("Đăng bài thành công", { autoClose: 3000 });
    }
  }

  return { createTweet };
};

export default useCreateTweet;
