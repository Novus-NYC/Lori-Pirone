"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type CaterpillarProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes: string;
  className?: string;
  priority?: boolean;
  "data-reveal"?: boolean;
};

export default function InteractiveCaterpillar({
  src,
  alt,
  width,
  height,
  sizes,
  className = "",
  priority = false,
  "data-reveal": reveal,
}: CaterpillarProps) {
  const [reacting, setReacting] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const reactionSrc = src.includes("caterpillar-resting")
    ? "/images/caterpillar-branch.webp"
    : "/images/caterpillar-resting.webp";

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  function react() {
    if (timer.current) clearTimeout(timer.current);
    setReacting(true);
    timer.current = setTimeout(() => setReacting(false), 1800);
  }

  return (
    <button
      type="button"
      className={`caterpillar-friend ${className} ${reacting ? "is-reacting" : ""}`}
      aria-label="Make the caterpillar smile"
      onClick={react}
      data-reveal={reveal}
    >
      <span
        className="caterpillar-motion"
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={`caterpillar-pose ${reacting ? "pose-hidden" : ""}`}
        />
        <Image
          src={reactionSrc}
          alt=""
          fill
          sizes={sizes}
          className={`caterpillar-pose reaction-pose ${reacting ? "" : "pose-hidden"}`}
        />
      </span>
      <span className="caterpillar-reply" aria-live="polite">
        {reacting ? "You made me smile!" : ""}
      </span>
    </button>
  );
}
