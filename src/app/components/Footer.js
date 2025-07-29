"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react"; // You can add more if needed

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3 text-center md:text-left">
        {/* Logo/Brand */}
        <div>
          <h2 className="text-2xl font-bold">Tarka Express</h2>
          <p className="text-sm mt-2">Desi flavor, delivered fast.</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-yellow-100"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="hover:text-yellow-100"
            >
              <Instagram />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-yellow-100"
            >
              <Twitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="bg-orange-600 text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Tarka Express. All rights reserved.
      </div>
    </footer>
  );
}
