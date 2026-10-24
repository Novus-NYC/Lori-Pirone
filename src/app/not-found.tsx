import Link from "next/link";
export default function NotFound() {
  return (
    <section className="not-found container section-space">
      <h1>
        This little path
        <br />
        doesn’t lead anywhere.
      </h1>
      <p>The page may have moved. Let’s find your way back to the story.</p>
      <Link href="/" className="button button-primary">
        Back to the story
      </Link>
    </section>
  );
}
