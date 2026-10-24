import InteractiveCaterpillar from "@/lib/components/interactive-caterpillar";
import FlippableBook from "@/lib/components/flippable-book";
import ReaderStories from "@/lib/components/reader-stories";
import Image from "next/image";
import {
  BookFacts,
  ClosingInvitation,
  OrderButton,
  TextLink,
} from "@/lib/components/ui";
import { BookIcon, SunIcon } from "@/lib/components/icons";
export const metadata = { title: "Overview", alternates: { canonical: "/" } };
export default function HomePage() {
  return (
    <>
      <section id="overview" className="home-hero" aria-labelledby="hero-title">
        <div className="hero-landscape" aria-hidden="true" />
        <div className="hero-inner container">
          <div className="hero-copy">
            <h1 id="hero-title">
              Big dreams
              <br />
              can start
              <br />
              <span>very small.</span>
            </h1>
            <p>
              Follow a tiny caterpillar with a big wish as he munches, dances,
              and discovers that wonderful things take a little time.
            </p>
            <OrderButton />
            <TextLink href="/book">Explore the story</TextLink>
            <p className="hero-byline">A rhyming adventure by Lori Pirone</p>
          </div>
          <div className="hero-art">
            <FlippableBook />
            <InteractiveCaterpillar
              className="hero-caterpillar"
              src="/images/story-scene.webp"
              alt="The original orange and teal caterpillar from Cute Little Caterpillar, peering through a magnifying glass"
              width={1863}
              height={1694}
              priority
              sizes="(max-width: 600px) 160px, (max-width: 1000px) 230px, 340px"
            />
            <span className="art-note">
              A little curiosity.
              <br />A whole world of possibility.
            </span>
          </div>
        </div>
        <div className="hero-facts container">
          <BookFacts />
        </div>
      </section>
      <section className="story-intro section-space container" data-reveal>
        <div className="intro-heading">
          <h2>
            Every big change
            <br />
            begins with <span>a little wish.</span>
          </h2>
          <SunIcon />
        </div>
        <div className="intro-copy">
          <p>
            One wiggly little caterpillar loves his leafy world. But somewhere
            between munching and exploring, he begins to dream of something
            more: flying through the big blue sky.
          </p>
          <p>
            <em>Cute Little Caterpillar</em> is a colorful, rhyming reminder
            that growing takes patience, and that there is magic in becoming.
          </p>
          <TextLink href="/book">Meet your next story-time companion</TextLink>
        </div>
      </section>
      <section
        className="author-milestones container"
        aria-label="Lori’s story in numbers"
        data-reveal
      >
        <dl>
          <div>
            <dt>Books published</dt>
            <dd>25+</dd>
          </div>
          <div>
            <dt>Happy readers</dt>
            <dd>4K</dd>
          </div>
          <div>
            <dt>Awards</dt>
            <dd>12+</dd>
          </div>
          <div>
            <dt>Library events</dt>
            <dd>78+</dd>
          </div>
        </dl>
      </section>
      <section className="read-together">
        <div className="container together-grid">
          <div className="together-art" data-reveal>
            <InteractiveCaterpillar
              src="/images/caterpillar-resting.webp"
              alt="Lori’s cheerful orange and teal caterpillar dancing"
              width={500}
              height={404}
              sizes="(max-width: 700px) 80vw, 410px"
            />
          </div>
          <div className="together-copy" data-reveal>
            <h2>
              Little readers.
              <br />
              Big imaginations.
            </h2>
            <p>
              For the bedtime snugglers, the classroom question-askers, and the
              children who stop to look at every leaf.
            </p>
            <ul className="reading-reasons">
              <li>
                <BookIcon />
                <div>
                  <h3>Made to read aloud</h3>
                  <p>
                    Playful rhymes and repetition invite children to join in.
                  </p>
                </div>
              </li>
              <li>
                <SunIcon />
                <div>
                  <h3>Something lovely to grow with</h3>
                  <p>
                    A gentle story about patience, self-belief, and nature’s
                    possibilities.
                  </p>
                </div>
              </li>
            </ul>
            <TextLink href="/book#questions">A few things parents ask</TextLink>
          </div>
        </div>
      </section>
      <section className="author-preview container section-space" data-reveal>
        <div className="author-photo">
          <Image
            src="/images/lori.webp"
            alt="Lori Pirone in a pink fairy-inspired costume in a sunlit woodland"
            width={1080}
            height={1072}
            sizes="(max-width: 700px) 90vw, 420px"
          />
        </div>
        <div className="author-preview-copy">
          <h2>
            A little nature.
            <br />A little magic.
            <br />
            <span>A lot of heart.</span>
          </h2>
          <p>
            Meet Lori Pirone, the writer and spiritual guide whose stories grow
            from nature, dreams, and the wonder hiding in everyday life.
          </p>
          <TextLink href="/about">Step into Lori’s world</TextLink>
        </div>
      </section>
      <ReaderStories />
      <ClosingInvitation />
    </>
  );
}
