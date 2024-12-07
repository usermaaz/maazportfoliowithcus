"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="nav-link">
        Home
      </Link>
      <Link href="/about" className="nav-link">
        About
      </Link>
      <Link href="/contact" className="nav-link">
        Contact
      </Link>
    </nav>
  );
}
