/** @format */

import classNames from "classnames";
import React from "react";

interface Icon {
  className?: string;
  size: number;
}

export interface BaseButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  RightIcon?: React.ComponentType<Icon>;
  LeftIcon?: React.ComponentType<Icon>;
  iconClass?: string;
}

const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const { className, children, LeftIcon, RightIcon, iconClass, ...rest } =
      props;
    return (
      <button className={classNames(className)} ref={ref} {...rest}>
        {LeftIcon && <LeftIcon className={iconClass} size={30} />}
        {children}
        {RightIcon && <RightIcon className={iconClass} size={30} />}
      </button>
    );
  }
);
BaseButton.displayName = "BaseButton";

export default BaseButton;