import Link from "next/link";
import InteractiveCaterpillar from "./interactive-caterpillar";
import { site } from "@/lib/site";
import { ArrowIcon, BookIcon, SunIcon } from "./icons";
export function OrderButton({
  className = "",
  label = "Order the book",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={site.orderUrl}
      target="_blank"
      rel="noreferrer"
      className={`button button-primary ${className}`}
      aria-label={`${label} on Amazon (opens in a new tab)`}
    >
      {label}
      <ArrowIcon />
    </a>
  );
}
export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-link">
      {children}
      <ArrowIcon />
    </Link>
  );
}
export function BookFacts({ full = false }: { full?: boolean }) {
  return (
    <dl className={`book-facts ${full ? "book-facts-full" : ""}`}>
      <div>
        <BookIcon />
        <dt>Print length</dt>
        <dd>42 pages</dd>
      </div>
      <div>
        <span className="fact-letters" aria-hidden="true">
          Aa
        </span>
        <dt>Language</dt>
        <dd>English</dd>
      </div>
      <div>
        <SunIcon />
        <dt>Made for</dt>
        <dd>{full ? "Ages 3–7" : "Story time"}</dd>
      </div>
    </dl>
  );
}
export function ClosingInvitation() {
  return (
    <section className="closing-invitation" data-reveal>
      <InteractiveCaterpillar
        src="/images/caterpillar-resting.webp"
        alt="The book’s cheerful orange and teal caterpillar"
        width={500}
        height={404}
        sizes="(max-width: 700px) 160px, 260px"
        className="closing-caterpillar"
      />
      <div>
        <h2>
          Make room for a<br />
          little wonder.
        </h2>
        <p>A story to share. A dream to grow.</p>
        <OrderButton />
      </div>
    </section>
  );
}
