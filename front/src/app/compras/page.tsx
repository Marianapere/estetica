"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const comprasFake = [
  {
    id: 1,
    fecha: "10 de julio",
    estado: "Entregado",
    fechaEntrega: "Llegó el 10 de julio",
    producto: "Impresora Brother Hl-1212w",
    descripcion: "1 unidad",
    vendedor: "SDBESAS",
    imagen: "/images/impresora.png",
  },
  {
    id: 2,
    fecha: "7 de julio",
    estado: "Entregado",
    fechaEntrega: "Llegó el 7 de julio",
    producto: "Gorra de natación Doyen",
    descripcion: "1 u. | Color: Negro",
    vendedor: "TIENDA BESPORT",
    imagen: "/images/gorra.png",
  },
];

export default function Compras() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading")
    return <p className="text-center mt-8">Cargando...</p>;
  if (!session) return null;

  return (
    <>
      <Navbar />

      <main className="bg-gray-100 min-h-screen pt-24 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Compras</h1>

          {/* Opinión destacada */}
          <div className="bg-white rounded shadow p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/impresora.png"
                alt="Opinión"
                className="w-12 h-12"
              />
              <span className="text-sm">+10 productos esperan tu opinión</span>
            </div>
            <button className="text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded text-sm">
              Opinar
            </button>
          </div>

          {/* Lista de compras */}
          {comprasFake.map((compra) => (
            <div key={compra.id} className="bg-white rounded shadow mb-6 p-4">
              <p className="text-sm text-gray-500 mb-2">{compra.fecha}</p>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex gap-4">
                  <img
                    src={compra.imagen}
                    alt={compra.producto}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="text-green-600 text-sm font-semibold">
                      {compra.estado}
                    </p>
                    <p className="font-medium">{compra.fechaEntrega}</p>
                    <p className="text-sm text-gray-500">
                      {compra.producto} - {compra.descripcion}
                    </p>
                  </div>
                </div>
                <div className="text-right sm:text-left">
                  <p className="text-sm text-gray-600">{compra.vendedor}</p>
                  <a href="#" className="text-blue-600 text-sm hover:underline">
                    Enviar mensaje
                  </a>
                  <div className="mt-2 flex gap-2">
                    <button className="bg-blue-600 text-white text-sm px-4 py-1.5 rounded hover:bg-blue-700">
                      Ver compra
                    </button>
                    <button className="bg-blue-50 text-blue-700 text-sm px-4 py-1.5 rounded hover:bg-blue-100">
                      Volver a comprar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
