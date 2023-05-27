import client from '@/libs/axios';
import { TweetProps } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const useTweets = () => {
    const { data: tweets, status } = useQuery<any, any, TweetProps>({
        queryKey: ["tweet"],
        queryFn: async () => {
          const { data } = await client.get("/tweet/");
          return data;
        },
      }); 
      return { tweets, status };
}

export default useTweets
