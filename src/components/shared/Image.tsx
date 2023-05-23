/** @format */

import React from "react";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { motion } from "framer-motion";
import classnames from "classnames";

interface ImageProps extends NextImageProps {
  isCircle?: boolean;
  imageClassName?: string;
}

const Image: React.FC<ImageProps> = ({
  onLoadingComplete,
  className,
  imageClassName,
  ...props
}) => {
  return (
    <motion.div className={classnames(className)}>
      <NextImage
        className={imageClassName}
        width={20}
        height={20}
        unoptimized
        {...props}
      />
    </motion.div>
  );
};

export default React.memo(Image);
