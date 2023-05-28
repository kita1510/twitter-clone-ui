/** @format */

import React from "react";
import { Tweet } from "@prisma/client";
import supabase from "@/libs/supabase";
import { v4 as uuidv4 } from "uuid";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useUser } from "@/contexts/AuthContext";

const useDeleteTweet = () => {
  const queryClient = useQueryClient();
  const user = useUser();

  const { mutate: deleteTweet, isLoading } = useMutation({
    mutationFn: delTweet,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  async function delTweet(id: string) {
    const status = await supabase.from("Like").delete().eq("tweetId", id);
    if (status?.status === 204) {
      const state = await supabase.from("Tweet").delete().eq("id", id);
      console.log(state);
      if (state?.status === 204) {
        toast("Xóa bài thành công", { autoClose: 3000 });
      } else {
        toast.error(state?.error?.message);
      }
    }
  }

  return { deleteTweet, isLoading };
};

export default useDeleteTweet;
