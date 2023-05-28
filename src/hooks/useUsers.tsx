/** @format */

import { QueryClient, useQuery } from "@tanstack/react-query";
import supabase from "@/libs/supabase";
import { TweetProps } from "@/types/index";
import client from "@/libs/axios";

const useUser = () => {
  const { data: user, status } = useQuery<any, any, TweetProps>({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await client.get("/user/" );
      return data;
    },
  });
  return { user, status };
};

export default useUser;
