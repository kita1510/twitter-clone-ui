/** @format */

import React from "react";
import classnames from "classnames";
import Image from "./Image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, className, ...props }) => {
  return (
    <div className={classnames("p-2  rounded-full", className)} {...props}>
      <Image imageClassName="w-full rounded-full" src={src} alt="avatar" />
    </div>
  );
};

export default React.memo(Avatar);