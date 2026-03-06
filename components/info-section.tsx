import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NODE_ENV === "production" ? "/openprinting.github.io" : "";

const items = [
  {
    title: "About Us",
    description: "Learn more about OpenPrinting, the people behind it, and the projects we maintain.",
    image: `${basePath}/OpenPrintingBox.png`,
    href: "#about",
  },
  {
    title: "Contribute",
    description: "Join the community and help improve printing for users across Linux and Unix systems.",
    image: `${basePath}/contribute.png`,
    href: "https://github.com/OpenPrinting",
  },
  {
    title: "CUPS",
    description: "CUPS is the standards-based open source printing system used by Linux and other platforms.",
    image: `${basePath}/cups.png`,
    href: "https://github.com/OpenPrinting/cups",
  },
];

export default function InfoSection() {
  return (
    <section className="bg-black py-16 text-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight">About</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="rounded-md border border-gray-800 bg-gray-950 p-5">
              <div className="mb-4 rounded border border-gray-800 bg-white p-2">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={180}
                  className="h-32 w-full object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-300">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-block text-sm text-blue-300 hover:text-blue-200"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
