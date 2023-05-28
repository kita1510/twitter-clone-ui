/** @format */

import type { Tweet, User, Like, Retweet, Reply } from "@prisma/client";
export type UserData = {};

export type TweetProps = Tweet & {
  User: User;
  Like: Like[];
  retweets: Retweet[];
  Reply: Reply[];
};
