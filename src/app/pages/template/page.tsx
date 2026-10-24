import { permanentRedirect } from "next/navigation";
export default function LegacyTemplate() {
  permanentRedirect("/book");
}
