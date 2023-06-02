/** @format */

import type { Tweet, User, Like, Retweet, Reply, Bookmark } from "@prisma/client";
export type UserData = {};

export type TweetProps = Tweet & {
  User: User;
  Like: Like[];
  retweets: Retweet[];
  Reply: Reply[];
  Bookmark: Bookmark[]
};
