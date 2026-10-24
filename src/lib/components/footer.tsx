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
      </div>
    </footer>
  );
}
