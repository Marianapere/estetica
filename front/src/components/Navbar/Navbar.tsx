// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";

// const Navbar = () => {
//   const { data: session } = useSession();
//   return (
//     // <nav className="w-full bg-white shadow-sm">
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
//         {/* <div className="flex justify-between items-center h-16"> */}
//         <div className="flex justify-between items-center h-16 w-full">
//           <div className="text-2xl font-bold font-gilda">Lovella</div>

//           {/* Navigation para pantallas medianas y grandes */}
//           <div className="hidden md:flex gap-8">
//             <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
//               Home
//             </button>
//             <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
//               About
//             </button>
//             <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
//               News
//             </button>
//             <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
//               Shop
//             </button>
//             <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
//               Demos
//             </button>
//             {/* Botón de login/logout */}
//             <div className="hidden md:flex">
//               {session ? (
//                 <button
//                   onClick={() => signOut()}
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//                 >
//                   Cerrar sesión
//                 </button>
//               ) : (
//                 <button
//                   onClick={() => signIn("google")}
//                   className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
//                 >
//                   Iniciar sesión
//                 </button>
//               )}
//             </div>
//           </div>

//           {/* Botón de menú para móviles */}
//           <div className="md:hidden">
//             <button className="p-2 text-gray-700">
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ----------------------------------------------------

"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Button from "../Button/Button";

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
              <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                Home
              </button>
              <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                About
              </button>
              <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                News
              </button>
              <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                Shop
              </button>
              <button className="px-3 py-2 text-gray-700 hover:text-gray-900">
                Demos
              </button>
            </div>

            {/* Botón de login/logout visible en todos los tamaños */}
            {session ? (
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-sm"
              >
                Cerrar sesión
              </button>
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
