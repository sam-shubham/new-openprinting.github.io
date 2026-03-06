import Link from "next/link";
import { Button } from "@/components/ui/button";

const basePath =
  process.env.NODE_ENV === "production" ? "/openprinting.github.io" : "";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[60vh] border-b border-gray-800 bg-black pt-16"
      id="top"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${basePath}/rotation_pantone.jpg')` }}
        aria-label="OpenPrinting banner"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 lg:px-8 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            OpenPrinting
          </h1>
          <p className="mt-3 text-base text-gray-300 md:text-lg">
            We make printing just work.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="default">
              <Link href="#about">About OpenPrinting</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white/70 bg-black/20 text-white hover:border-white hover:bg-black/35"
            >
              <Link href="/news">All News Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
