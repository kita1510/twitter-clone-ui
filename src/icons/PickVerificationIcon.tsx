/** @format */

import React from "react";
export type ColorType = { color?: "red" | "blue" | "gold" | "gray" | string };
import BlueVerified from //   GoldVerified,
//   GrayVerified,
//   RedVerified,
"./verified/Blue";

export function PickVerificationIcon({ color }: ColorType) {
  //   if (color === "gold") return <GoldVerified />;
  //   if (color === "gray") return <GrayVerified />;
  //   if (color === "red") return <RedVerified />;
  if (color === "blue") return <BlueVerified className="h-5 w-5" />;
  return <></>;
}
