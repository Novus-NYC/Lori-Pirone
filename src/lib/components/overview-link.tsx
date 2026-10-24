"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

export default function OverviewLink({
  children,
  onClick,
  ...props
}: Omit<ComponentProps<typeof Link>, "href">) {
  const pathname = usePathname();
  return (
    <Link
      {...props}
      href="/#overview"
      aria-current={pathname === "/" ? "page" : undefined}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.metaKey ||
          event.ctrlKey ||
          event.shiftKey ||
          event.altKey ||
          event.button !== 0
        )
          return;
        if (pathname === "/") {
          event.preventDefault();
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "auto"
              : "smooth",
          });
        }
      }}
    >
      {children}
    </Link>
  );
}
