"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const basePath = process.env.NODE_ENV === "production" ? "/openprinting.github.io" : "";

const navItems = [
  { name: "About", href: "#about" },
  { name: "News", href: "#news" },
  { name: "All Blogs", href: "/news" },
  { name: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-gray-800 bg-black/90 shadow-[0_2px_18px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 rounded-md px-1.5 py-1">
            <Image
              src={`${basePath}/openprinting.png`}
              alt="OpenPrinting Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg font-semibold tracking-tight text-white">OpenPrinting</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className={cn("text-gray-200 hover:bg-white/10 hover:text-white md:hidden")}
            onClick={() => setIsOpen((open) => !open)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="border-t border-gray-800 bg-black/95 md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-2 py-2 text-sm text-gray-200 hover:bg-white/10 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
