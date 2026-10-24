"use client";

import Image from "next/image";
import { useId, useState } from "react";

export default function FlippableBook() {
  const [flipped, setFlipped] = useState(false);
  const backDescriptionId = useId();
  return (
    <div className={`hero-book ${flipped ? "is-flipped" : ""}`}>
      <button
        type="button"
        className="book-flip-button"
        aria-label={
          flipped
            ? "Show the front cover"
            : "Flip the book to read the back cover"
        }
        aria-pressed={flipped}
        aria-describedby={flipped ? backDescriptionId : undefined}
        onClick={() => setFlipped(!flipped)}
      >
        <span className="book-turn">
          <span className="book-face book-front" aria-hidden={flipped}>
            <Image
              src="/images/book-cover.webp"
              alt="Cute Little Caterpillar by Lori Pirone, front cover"
              width={600}
              height={597}
              priority
              sizes="(max-width: 600px) 62vw, (max-width: 1000px) 42vw, 420px"
            />
          </span>
          <span className="book-face book-back" aria-hidden={!flipped}>
            <Image
              src="/images/book-back-cover.webp"
              alt="Back cover of Cute Little Caterpillar: From tiny crawl to sky high dreams. A curious little caterpillar’s journey of growing, changing, and believing in what’s possible."
              width={1032}
              height={988}
              sizes="(max-width: 600px) 62vw, (max-width: 1000px) 42vw, 420px"
            />
          </span>
        </span>
        <span className="book-pages" aria-hidden="true" />
        <span className="book-flip-hint">
          {flipped
            ? "Back cover · click to turn back"
            : "Click to flip the book"}
        </span>
      </button>
      <p id={backDescriptionId} className="sr-only">
        Back cover: From tiny crawl to sky high dreams. Meet a curious little
        caterpillar with a big dream! He wiggles, he munches, he explores, and
        all the while he imagines what it must feel like to flutter high above
        the treetops. But when nature works its magic, his wish to fly unfolds
        in the most extraordinary way. Join the cute little wiggly caterpillar
        on a colorful adventure filled with wonder, laughter, and gentle lessons
        as he discovers the joy of growing, changing, and believing in what’s
        possible. Perfect for story time, this heartwarming tale guides children
        through the magical journey of becoming a butterfly. With interactive
        storytelling woven throughout, little readers are invited to imagine
        themselves as tiny caterpillars, wiggling, munching, growing, and
        finally transforming into bright, beautiful butterflies as the story
        comes to life.
      </p>
    </div>
  );
}
