import type { Metadata } from "next";
import Image from "next/image";
import InteractiveCaterpillar from "@/lib/components/interactive-caterpillar";
import { ClosingInvitation, TextLink } from "@/lib/components/ui";
export const metadata: Metadata = {
  title: "About Lori",
  description:
    "Meet Lori Pirone, a writer and spiritual guide creating children’s stories, poetry, and oracle decks inspired by nature, dreams, and transformation.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return (
    <>
      <section className="about-hero container section-space">
        <div>
          <h1>
            Wonder is
            <br />
            <span>all around us.</span>
          </h1>
          <p>
            For Lori Pirone, a story begins with noticing. A moment in nature. A
            message in a dream. A small reminder that life is always becoming
            something new.
          </p>
          <p className="signature">Hello, I’m Lori.</p>
        </div>
        <div className="about-portrait">
          <Image
            src="/images/lori.webp"
            alt="Lori Pirone surrounded by trees, wearing a whimsical pink fairy-inspired costume"
            width={1080}
            height={1072}
            priority
            sizes="(max-width: 700px) 90vw, 550px"
          />
        </div>
      </section>
      <section className="about-story section-space">
        <div className="container about-story-grid">
          <h2>
            Stories rooted
            <br />
            in nature,
            <br />
            <span>wonder, and soul.</span>
          </h2>
          <div>
            <p>
              Lori Pirone is a writer and spiritual guide whose creative world
              includes children’s books, oracle decks, and poetry inspired by
              mystical messages.
            </p>
            <p>
              Drawing from nature, dreams, and personal experiences, she creates
              work that invites readers to explore both the natural world and
              their own inner landscape. Her stories bring imagination and
              spiritual reflection into the same conversation.
            </p>
            <p>
              In <em>Cute Little Caterpillar</em>, that sense of wonder becomes
              a joyful story for young readers: a little creature’s journey of
              patience, self-belief, and transformation.
            </p>
            <TextLink href="/book">Discover Cute Little Caterpillar</TextLink>
          </div>
        </div>
      </section>
      <section className="beyond-pages container section-space" data-reveal>
        <InteractiveCaterpillar
          src="/images/caterpillar-branch.webp"
          alt="The book’s original orange and teal caterpillar, ready for his next adventure"
          width={500}
          height={429}
          sizes="(max-width: 700px) 65vw, 310px"
        />
        <div>
          <h2>Beyond the pages.</h2>
          <p>
            Lori’s poetry and oracle work explore the subtle connections between
            living things, the wisdom of everyday experiences, and the mysteries
            of the heart and soul.
          </p>
          <p>
            Her invitation is a simple one: pause, stay curious, and discover
            the magic in the ordinary.
          </p>
          <TextLink href="/contact">Start a conversation with Lori</TextLink>
        </div>
      </section>
      <ClosingInvitation />
    </>
  );
}
