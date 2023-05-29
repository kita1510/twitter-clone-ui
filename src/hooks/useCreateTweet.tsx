/** @format */

import React from "react";
import { Tweet } from "@prisma/client";
import supabase from "@/libs/supabase";
import { v4 as uuidv4 } from "uuid";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/AuthContext";
import moment from "moment-timezone";

const useCreateTweet = () => {
  const queryClient = useQueryClient();
  const user = useUser();

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
      id: uuidv4(),
      userId: user?.id,
      body: tweet?.body,
      createdAt: moment.tz(Date.now(), "Asia/Bangkok").format(),
    });
    if (state) {
      toast("Đăng bài thành công", { autoClose: 3000 });
    }
  }

  return { createTweet };
};

export default useCreateTweet;