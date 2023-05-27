/** @format */

import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";
export type UserData = {};

export type TweetProps = Tweet[] & {
  user: User;
  likes: Like[];
  retweets: Retweet[];
  replies: Reply[];
};
