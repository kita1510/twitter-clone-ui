import client from '@/libs/axios';
import supabase from '@/libs/supabase';
import { TweetProps } from '@/types';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const useRandomTweets = () => {
    const { data: tweets, status } = useQuery<any, any, TweetProps>({
        queryKey: ["tweetRandom"],
        queryFn: async () => {
          const { data } = await supabase.rpc('get_random_tweet');
          return data;
        },
      }); 
      return { tweets, status };
}

export default useRandomTweets
