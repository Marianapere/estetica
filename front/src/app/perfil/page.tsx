"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import {
  FaUser,
  FaLock,
  FaCreditCard,
  FaMapMarkerAlt,
  FaUsers,
  FaShieldAlt,
  FaComments,
  FaUserShield,
} from "react-icons/fa";

export default function Perfil() {
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

  const items = [
    {
      icon: <FaUser />,
      title: "Información personal",
      description:
        "Información de tu documento de identidad y tu actividad fiscal.",
    },
    {
      icon: <FaUserShield />,
      title: "Datos de tu cuenta",
      description: "Datos que representan a la cuenta en Lovella.",
    },
    {
      icon: <FaLock />,
      title: "Seguridad",
      description: "Tenés configurada la seguridad de tu cuenta.",
    },
    {
      icon: <FaUsers />,
      title: "Colaboradores",
      description: "Personas que operan con tu cuenta.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Privacidad",
      description: "Preferencias y control sobre el uso de tus datos.",
    },
    {
      icon: <FaCreditCard />,
      title: "Tarjetas",
      description: "Tarjetas guardadas en tu cuenta.",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Direcciones",
      description: "Direcciones guardadas en tu cuenta.",
    },
    {
      icon: <FaComments />,
      title: "Comunicaciones",
      description: "Elegí qué tipo de información querés recibir.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-gray-100 min-h-screen pt-24 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="text-5xl font-bold bg-gray-300 rounded-full w-20 h-20 mx-auto flex items-center justify-center text-white">
              {session.user?.name?.charAt(0).toUpperCase()}
            </div>
            <h1 className="text-2xl font-semibold mt-4">
              {session.user?.name}
            </h1>
            <p className="text-gray-600">{session.user?.email}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded shadow hover:shadow-md transition"
              >
                <div className="text-2xl mb-2 text-blue-600">{item.icon}</div>
                <h3 className="text-lg font-semibold text-black">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-left text-sm text-gray-500 mt-10">
            Podés{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              cancelar tu cuenta
            </span>{" "}
            siempre que lo desees.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
