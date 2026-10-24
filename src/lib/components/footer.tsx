import Link from "next/link";
import InteractiveCaterpillar from "./interactive-caterpillar";
import { navigation, site } from "@/lib/site";
import { ArrowIcon } from "./icons";
import OverviewLink from "./overview-link";
import Image from "next/image";
import { OrderButton } from "./ui";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-invitation container" data-reveal>
        <div>
          <h2>Bring a little wonder home.</h2>
          <p>Open a book. Share a story. Watch a little dream grow.</p>
        </div>
        <OrderButton />
      </div>
      <div className="footer-main container">
        <div className="footer-identity">
          <OverviewLink className="footer-logo">
            <Image
              src="/images/logo.webp"
              alt="Lori Pirone home"
              width={400}
              height={126}
              sizes="180px"
            />
          </OverviewLink>
          <p>
            Stories rooted in nature,
            <br />
            wonder, and a little magic.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          {navigation.map((item) =>
            item.href === "/#overview" ? (
              <OverviewLink key={item.href}>{item.label}</OverviewLink>
            ) : (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <div className="footer-contact">
          <p>
            Every connection begins
            <br />
            with a little hello.
          </p>
          <a href={`mailto:${site.email}`}>
            {site.email}
            <ArrowIcon />
          </a>
        </div>
        <InteractiveCaterpillar
          className="footer-friend"
          src="/images/caterpillar-branch.webp"
          alt="The original orange and teal caterpillar smiling"
          width={500}
          height={429}
          sizes="110px"
        />
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Lori Pirone</span>
        <a href="https://novusnyc.org" target="_blank" rel="noreferrer">
          Made by Novus
        </a>
        <span>Let your imagination grow.</span>
      </div>
    </footer>
  );
}
