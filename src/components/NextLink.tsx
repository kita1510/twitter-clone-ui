/** @format */

import Link from "next/link";
import React from "react";

type NextLinkProps = {
  href?: string;
  disabled?: boolean;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function NextLink({
  href,
  disabled,
  children,
  ...props
}: NextLinkProps) {
  if (disabled) return <a href="#">{children}</a>;

  return (
    <Link {...props} href={href || ""}>
      {children}
    </Link>
  );
}
