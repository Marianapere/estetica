// components/UserIcons.tsx
"use client";

import Link from "next/link";
import { FaBell, FaShoppingCart } from "react-icons/fa";

export default function UserIcons() {
  const notificationsCount = 2; // Podés reemplazar esto por lógica real
  const cartCount = 3; // Idem

  return (
    <div className="flex items-center gap-4 ml-4 text-black">
      {/* Notificaciones */}
      <Link href="/notificaciones" className="relative hover:text-blue-600">
        <FaBell size={20} />
        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {notificationsCount}
        </span>
      </Link>

      {/* Carrito */}
      <Link href="/carrito" className="relative hover:text-blue-600">
        <FaShoppingCart size={20} />
        <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
          {cartCount}
        </span>
      </Link>
    </div>
  );
}
