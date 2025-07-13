"use client";

import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import Button from "../Button/Button";
import UserMenu from "../UserMenu";
import UserIcons from "../UserIcons";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <div className="text-2xl font-bold font-gilda">Lovella</div>

          {/* Menú y botón en fila */}
          <div className="flex items-center gap-4">
            {/* Navegación oculta en mobile */}
            <div className="hidden md:flex gap-6">
              <Link
                href="/"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/news"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                News
              </Link>
              <Link
                href="/compras"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Shop
              </Link>
              <Link
                href="/demos"
                className="px-3 py-2 text-gray-700 hover:text-gray-900"
              >
                Demos
              </Link>
            </div>

            {session ? (
              <div className="flex items-center">
                <UserIcons />
                <UserMenu />
              </div>
            ) : (
              <Button variant="auth" onClick={() => signIn("google")}>
                Iniciar sesión
              </Button>
            )}

            {/* Menú hamburguesa */}
            <div className="md:hidden">
              <button className="p-2 text-gray-700">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
