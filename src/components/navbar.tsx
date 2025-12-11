"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-rose-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="logo"
              height={80}
              width={80}
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-lg font-medium transition-colors ${
                isActive("/")
                  ? "text-red-600"
                  : "text-rose-900 hover:text-red-600"
              }`}
            >
              Home
            </Link>

            <Link
              href="/contact"
              className={`text-lg font-medium transition-colors ${
                isActive("/contact")
                  ? "text-red-600"
                  : "text-rose-900 hover:text-red-600"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
