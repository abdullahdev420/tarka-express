"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [hasCartItems, setHasCartItems] = useState(false);
  const router = useRouter();

  const checkAuthAndCart = () => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setHasCartItems(storedCart.length > 0);
  };

  useEffect(() => {
    checkAuthAndCart();

    // Watch for storage changes (even from other tabs)
    window.addEventListener("storage", checkAuthAndCart);

    return () => {
      window.removeEventListener("storage", checkAuthAndCart);
    };
  }, []);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart"); // Optional: clear cart too
    checkAuthAndCart(); // Refresh UI
    router.push("/");
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold tracking-widest">
          Tarka<span className="text-yellow-100">Express</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 text-lg font-medium items-center">
          <Link href="/" className="hover:text-yellow-100">
            Home
          </Link>
          <Link href="/restaurents" className="hover:text-yellow-100">
            Restaurants
          </Link>
          {user && hasCartItems && (
            <Link
              href="/cart"
              className="bg-white text-orange-600 px-4 py-1 rounded-lg font-semibold hover:bg-yellow-100 transition"
            >
              🛒 View Cart
            </Link>
          )}
          {user ? (
            <button onClick={handleLogOut} className="hover:text-yellow-100">
              Log out
            </button>
          ) : (
            <Link href="/login" className="hover:text-yellow-100">
              Log in
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-orange-600 px-6 pb-4 pt-2 space-y-2 text-lg font-medium">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-yellow-100"
          >
            Home
          </Link>
          <Link
            href="/restaurents"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-yellow-100"
          >
            Restaurants
          </Link>
          {user && hasCartItems && (
            <Link
              href="/cart"
              onClick={() => setIsOpen(false)}
              className="block text-white bg-white/10 px-3 py-1 rounded hover:text-yellow-100"
            >
              🛒 View Cart
            </Link>
          )}
          {user ? (
            <button
              onClick={() => {
                handleLogOut();
                setIsOpen(false);
              }}
              className="block text-white hover:text-yellow-100 w-full text-left"
            >
              Log out
            </button>
          ) : (
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="block text-white hover:text-yellow-100"
            >
              Log in
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
