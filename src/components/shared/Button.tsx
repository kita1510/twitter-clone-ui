/** @format */

import React from "react";
import BaseButton, { BaseButtonProps } from "./BaseButton";
import classnames from "classnames";

interface ButtonProps extends BaseButtonProps {}

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  const { className, children, ...rest } = props;
  return (
    <BaseButton
      className={classnames("w-20 h-10 font-semibold", className)}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};

export default React.memo(Button);