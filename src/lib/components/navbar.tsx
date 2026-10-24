"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation, site } from "@/lib/site";
import { ArrowIcon } from "./icons";
import OverviewLink from "./overview-link";
export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const wideScreen = window.matchMedia("(min-width: 801px)");
    const closeOnDesktop = () => {
      if (wideScreen.matches) setOpen(false);
    };
    wideScreen.addEventListener("change", closeOnDesktop);
    return () => wideScreen.removeEventListener("change", closeOnDesktop);
  }, []);
  return (
    <header
      className={`site-header ${pathname === "/" ? "header-overview" : ""} ${open ? "menu-is-open" : ""} ${scrolled ? "is-scrolled" : ""}`}
    >
      <nav
        className="nav-inner"
        aria-label="Main navigation"
        onKeyDown={(event) => {
          if (event.key === "Escape" && open) {
            setOpen(false);
            toggle.current?.focus();
          }
        }}
      >
        <OverviewLink
          className="brand"
          aria-label="Lori Pirone home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/logo.webp"
            alt="Lori Pirone"
            width={400}
            height={126}
            sizes="(max-width: 600px) 140px, 164px"
            priority
          />
        </OverviewLink>
        <div className="desktop-links">
          {navigation.map((link) =>
            link.href === "/#overview" ? (
              <OverviewLink key={link.href}>{link.label}</OverviewLink>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname === link.href.split("#")[0] ? "page" : undefined
                }
              >
                {link.label}
              </Link>
            ),
          )}
        </div>
        <a
          href={site.orderUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-primary nav-order"
          aria-label="Order the book on Amazon (opens in a new tab)"
        >
          Order the book
          <ArrowIcon />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span
            className={`menu-lines ${open ? "is-open" : ""}`}
            aria-hidden="true"
          >
            <i />
            <i />
          </span>
        </button>
        <div
          hidden={!open}
          className="mobile-navigation"
          id="mobile-navigation"
        >
          {navigation.map((link) =>
            link.href === "/#overview" ? (
              <OverviewLink key={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </OverviewLink>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  pathname === link.href.split("#")[0] ? "page" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ),
          )}
          <a
            href={site.orderUrl}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Order on Amazon
            <ArrowIcon />
          </a>
        </div>
      </nav>
    </header>
  );
}
