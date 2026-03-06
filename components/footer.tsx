import Link from "next/link";
import { Github, Rss, Send, Mail } from "lucide-react";

const links = [
  { name: "GitHub", href: "https://github.com/OpenPrinting", icon: Github },
  { name: "Mastodon", href: "https://ubuntu.social/tags/OpenPrinting", icon: Send },
  { name: "Mailing Lists", href: "https://lore.kernel.org/printing-users/", icon: Mail },
  { name: "RSS", href: "/feed", icon: Rss },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-white">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("/") ? undefined : "_blank"}
                rel={item.href.startsWith("/") ? undefined : "noopener noreferrer"}
                className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </a>
            );
          })}
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">
          <p>(c) {new Date().getFullYear()} OpenPrinting</p>
          <p className="mt-1">
            <Link href="/news" className="hover:text-gray-300">
              Browse all news posts
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
