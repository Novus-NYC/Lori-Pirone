const reviews = [
  {
    name: "Sarah J.",
    quote:
      "Such a sweet and magical story! My kids love following the caterpillar’s journey. The rhymes are fun to read aloud, and the transformation part always gets big smiles.",
  },
  {
    name: "Williams",
    quote:
      "Beautifully written and inspiring! This book makes nature fun and exciting for children. My daughter keeps asking me to read it every night before bed. Definitely a favorite in our house.",
  },
  {
    name: "Blare",
    quote:
      "The story is simple yet powerful. It teaches patience, growth, and believing in yourself. Perfect for young readers, with a lovely message about dreams coming true.",
  },
  {
    name: "Mark",
    quote:
      "A delightful book! The caterpillar’s adventure is engaging and fun. My son laughed at the spinning part and cheered when the butterfly finally appeared. Highly recommended for preschool and kindergarten kids.",
  },
  {
    name: "Jane Lyne",
    quote:
      "Charming and heartwarming. The rhythm of the words makes it easy to read with children, and the theme of transformation is both educational and magical. We truly enjoyed this book together.",
  },
];

export default function ReaderStories() {
  return (
    <section
      className="reader-stories section-space"
      aria-labelledby="reader-title"
    >
      <div className="container reader-grid">
        <div className="reader-heading" data-reveal>
          <h2 id="reader-title">
            A little story.
            <br />
            <span>A lasting smile.</span>
          </h2>
        </div>
        {reviews.map((review) => (
          <figure className="reader-note" key={review.name} data-reveal>
            <blockquote>
              <p>“{review.quote}”</p>
            </blockquote>
            <figcaption>{review.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
