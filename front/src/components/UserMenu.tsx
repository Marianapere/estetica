"use client";

import { useState, useRef, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function UserMenu() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cierra el menú si hacés clic fuera de él
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!session?.user?.name) return null;

  const firstName = session.user.name.split(" ")[0].toUpperCase();

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2  text-black font-medium rounded hover: transition"
      >
        {firstName} ▾
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48  bg-white border rounded shadow-md z-10">
          <Link
            href="/perfil"
            className="block px-4 py-2 hover:bg-gray-100 text-sm  text-black"
          >
            Mi perfil
          </Link>
          <Link
            href="/compras"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-black"
          >
            Compras
          </Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
          >
            Cerrar sesión
          </button>
        </div>
      )}

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-md z-10">
          <Link
            href="/perfil"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-black"
          >
            Mi perfil
          </Link>
          <Link
            href="/compras"
            className="block px-4 py-2 hover:bg-gray-100 text-sm text-black"
          >
            Compras
          </Link>
          <button
            onClick={() => signOut()}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600"
          >
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}
