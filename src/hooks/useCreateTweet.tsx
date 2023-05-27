/** @format */

import React from "react";
import { Tweet } from "@prisma/client";
import supabase from "@/libs/supabase";
import { v4 as uuidv4 } from "uuid";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/AuthContext";

const useCreateTweet = () => {
  const queryClient = new QueryClient();
    const user = useUser()

  const { mutate: createTweet } = useMutation({
    mutationFn: creTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
      toast("Đăng bài thành công", { autoClose: 3000 });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  async function creTweet(tweet: Tweet, userId: string) {
    await supabase
      .from("Tweet")
      .insert({ id: uuidv4(), userId: user?.id, body: tweet?.body });
    queryClient.invalidateQueries({ queryKey: ["tweet"] });
  }

  return { createTweet };
};

export default useCreateTweet;
