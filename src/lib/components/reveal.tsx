"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" },
    );
    const targets = new Set<Element>(
      document.querySelectorAll("[data-reveal]"),
    );
    document
      .querySelectorAll("main > section:not(.home-hero)")
      .forEach((section) => {
        if (section.hasAttribute("data-reveal")) return;
        const group = section.firstElementChild?.classList.contains("container")
          ? section.firstElementChild
          : section;
        Array.from(group.children).forEach((element, index) => {
          if (element.closest("[data-reveal]")) return;
          element.setAttribute("data-reveal", "");
          element.setAttribute(
            "data-reveal-direction",
            index % 2 ? "right" : "left",
          );
          targets.add(element);
        });
      });
    targets.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight)
        element.classList.add("reveal-pending");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);
  return null;
}
