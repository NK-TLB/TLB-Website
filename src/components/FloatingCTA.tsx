import { site } from "../data/site";
import Icon from "./Icon";

// Site-wide floating WhatsApp button, a low-friction contact path that follows
// the visitor on every page. Hidden in print.
export default function FloatingCTA() {
  const message = encodeURIComponent(
    "Hi The Laundry Bag, I'd like a commercial laundry / linen proposal.",
  );
  return (
    <a
      href={`https://wa.me/91${site.phoneRaw}?text=${message}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="btn-whatsapp group fixed bottom-5 right-5 z-40 py-3 pl-3 pr-3 shadow-lift transition hover:pr-5 focus-visible:ring-offset-2 print:hidden sm:bottom-6 sm:right-6"
    >
      <Icon name="whatsapp" className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}
