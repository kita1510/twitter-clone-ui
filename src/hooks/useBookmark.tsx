/** @format */

import supabase from "@/libs/supabase";
import { TweetProps } from "@/types";
import { Tweet, User } from "@prisma/client";
import { AuthUser } from "@supabase/supabase-js";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";

const useBookmark = () => {
  const queryClient = useQueryClient();

  const { mutate: addBookmark } = useMutation({
    mutationFn: add,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweetttt"] });
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
      toast.success("Đã thêm trang", { autoClose: 3000 });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  async function add(tweet: Tweet) {
    const state = await supabase.from("Bookmark").insert({
      // userId: user?.id,
      tweetId: tweet?.id,
    });
    //   const state = await client.post("/tweet", {
    //     userId: user?.id,
    //     body: tweet?.body,
    //   });

  }

  async function deleteBookmark(tweet: Tweet) {
    const state = await supabase
      .from("Bookmark")
      .delete()
      .eq("tweetId", tweet?.id);
    //   const state = await client.post("/tweet", {
    //     userId: user?.id,
    //     body: tweet?.body,
    //   });
  }

  const { mutate: deleteTweetInBookMark } = useMutation({
    mutationFn: deleteBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tweetttt"] });
      queryClient.invalidateQueries({ queryKey: ["tweet"] });
      toast.success("Đã bỏ thêm trang", { autoClose: 3000 });
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });

  //   async function getUser() {
  //     const { data } = supabase
  //       .from("Tweet")
  //       .select("*,User(*), Bookmark(*)")
  //       .eq("userId", user?.id)
  //       .single();
  //     return data;
  //   }

  function getTweetInBookmark(user: User | AuthUser) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { data: tweet, status } = useQuery<any, any, TweetProps[]>({
      queryKey: ["tweetttt"],
      queryFn: async () => {
        const { data } = await supabase
          .from("Tweet")
          .select("*,User(*),Like(*), Bookmark!inner(*)")
          .eq("Bookmark.userId", user?.id);
        //   .single();
        return data;
      },
    });
    return tweet;
  }

  return { addBookmark, getTweetInBookmark, deleteTweetInBookMark };
};

export default useBookmark;
