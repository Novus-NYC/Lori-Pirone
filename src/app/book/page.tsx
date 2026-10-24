import type { Metadata } from "next";
import Image from "next/image";
import InteractiveCaterpillar from "@/lib/components/interactive-caterpillar";
import {
  BookFacts,
  ClosingInvitation,
  OrderButton,
  TextLink,
} from "@/lib/components/ui";
import { questions } from "@/lib/site";
export const metadata: Metadata = {
  title: "Cute Little Caterpillar",
  description:
    "Discover Lori Pirone’s 42-page rhyming picture book for ages 3–7. A joyful journey of growth, patience, and transformation.",
  alternates: { canonical: "/book" },
};
export default function BookPage() {
  return (
    <>
      <section className="book-page-hero container section-space">
        <div className="book-page-image">
          <Image
            src="/images/book-cover.webp"
            alt="The cover of Cute Little Caterpillar by Lori Pirone"
            width={600}
            height={597}
            priority
            sizes="(max-width: 700px) 80vw, 470px"
          />
        </div>
        <div>
          <h1>
            Cute Little
            <br />
            <span>Caterpillar</span>
          </h1>
          <p className="book-author">Written by Lori Pirone</p>
          <p>
            A tiny caterpillar has a very big wish: to fly. Come along for a
            colorful adventure full of playful rhymes, leafy discoveries, and
            the magic of becoming.
          </p>
          <BookFacts full />
          <OrderButton />
          <p className="retailer-note">
            Opens Amazon for current editions, pricing, and availability.
          </p>
        </div>
      </section>
      <section className="book-story section-space">
        <div className="container book-story-grid">
          <div data-reveal>
            <h2>
              From a tiny crawl
              <br />
              to a wonderful <span>what if?</span>
            </h2>
            <p>
              Our curious little caterpillar munches on green leaves, dances,
              and explores the world around him. But soon, a new wish begins to
              stir: to soar through the vast blue sky.
            </p>
            <p>
              With playful rhymes and whimsical repetition, the story follows
              him as he spins and spins into a magical chrysalis. Through
              patience, laughter, and a little rainbow-colored magic, his
              long-awaited transformation arrives.
            </p>
            <p>
              A gentle invitation to believe in your own journey, perfect for
              reading together at home or in the classroom.
            </p>
          </div>
          <InteractiveCaterpillar
            data-reveal
            src="/images/story-scene.webp"
            alt="The story’s curious caterpillar looking through his magnifying glass"
            width={1863}
            height={1694}
            sizes="(max-width: 700px) 85vw, 460px"
          />
        </div>
      </section>
      <section className="book-details container section-space" data-reveal>
        <div>
          <h2>
            One small story.
            <br />
            So much to discover.
          </h2>
          <TextLink href="/contact">Ask Lori about bulk orders</TextLink>
        </div>
        <div className="book-themes">
          <article>
            <h3>Rhythm to return to</h3>
            <p>
              Whimsical repetition makes the journey fun to hear, say, and
              share.
            </p>
          </article>
          <article>
            <h3>Nature’s remarkable changes</h3>
            <p>
              A colorful introduction to the caterpillar-to-butterfly
              transformation.
            </p>
          </article>
          <article>
            <h3>Room for big dreams</h3>
            <p>
              A reassuring message about patience, persistence, and believing in
              yourself.
            </p>
          </article>
        </div>
      </section>
      <section className="faq-section container section-space" id="questions">
        <div>
          <h2>
            A few little
            <br />
            questions.
          </h2>
          <p>
            For the grown-ups
            <br />
            choosing the next great read.
          </p>
        </div>
        <div className="faq-list">
          {questions.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <span aria-hidden="true">+</span>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <ClosingInvitation />
    </>
  );
}
