import type { Metadata } from "next";
import InteractiveCaterpillar from "@/lib/components/interactive-caterpillar";
import { ArrowIcon } from "@/lib/components/icons";
import { OrderButton, TextLink } from "@/lib/components/ui";
import { site } from "@/lib/site";
import ContactForm from "@/lib/components/contact-form";
export const metadata: Metadata = {
  title: "Contact Lori",
  description:
    "Contact Lori Pirone for book questions, bulk orders, events, and conversations about her creative work.",
  alternates: { canonical: "/contact" },
};
const topics = [
  {
    title: "A question about the book",
    text: "Ask about Cute Little Caterpillar and Lori’s stories.",
    subject: "A question about Cute Little Caterpillar",
  },
  {
    title: "Bulk orders & events",
    text: "Share your organization, quantity, dates, and what you have in mind.",
    subject: "Bulk order or event inquiry",
  },
  {
    title: "A little creative connection",
    text: "Get in touch about Lori’s writing, poetry, or oracle work.",
    subject: "A creative connection",
  },
];
export default function ContactPage() {
  return (
    <>
      <section className="contact-hero container section-space">
        <div>
          <h1>
            Every connection
            <br />
            starts with
            <br />
            <span>a little hello.</span>
          </h1>
          <p>
            Have a question, an idea, or a story to share? Lori would love to
            hear from you.
          </p>
        </div>
        <InteractiveCaterpillar
          src="/images/story-scene.webp"
          alt="Lori’s curious caterpillar looking through his magnifying glass"
          width={1863}
          height={1694}
          priority
          sizes="(max-width: 700px) 75vw, 430px"
        />
      </section>
      <section className="contact-form-section section-space" data-reveal>
        <div className="container">
          <ContactForm />
        </div>
      </section>
      <section className="contact-topics container section-space" data-reveal>
        <h2>What brings you here?</h2>
        <div>
          {topics.map((topic) => (
            <a
              className="contact-topic"
              key={topic.title}
              href={`mailto:${site.email}?subject=${encodeURIComponent(topic.subject)}`}
            >
              <div>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </section>
      <section className="contact-order container section-space" data-reveal>
        <div>
          <h2>Ready for story time?</h2>
          <p>Your next little adventure is waiting.</p>
        </div>
        <div>
          <OrderButton />
          <TextLink href="/book">Take a closer look at the book</TextLink>
        </div>
      </section>
    </>
  );
}
