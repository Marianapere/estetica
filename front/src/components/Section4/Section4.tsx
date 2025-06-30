import React from "react";
import Image from "next/image";

const Section4: React.FC = () => {
  return (
    // <div className="w-full bg-white py-12 border-t border-gray-200 min-h-[calc(100vh-192px)] ">
    //   <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">

    <div className="w-full bg-white py-12 border-t border-gray-200 min-h-[calc(100vh-192px)] flex items-center justify-center">
      <div className="max-w-7xl w-full px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-items-center">
        {/* cada uno de los tres bloques queda como lo tenías */}

        {/* About Us */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold">About Us</h3>
          <p className="text-sm text-gray-600">
            Etiam consequat sem ullamcorper, euismod metus sit amet, trist
            iusto. Vestibulum mattis, nisi ut.
          </p>
          <p className="text-sm">
            <span className="font-bold">email:</span>{" "}
            <a href="mailto:bricksy@example.com" className="underline">
              lovella@example.com
            </a>
          </p>
          <p className="text-sm">
            <span className="font-bold">phone:</span>{" "}
            <a href="tel:+12650137253" className="underline">
              +1 265 013 7253
            </a>
          </p>
        </div>

        {/* Our Adventures */}
        <div>
          <h3 className="text-lg font-bold">Nuestros Tratamientos</h3>
          <div className="grid grid-cols-3 gap-2 mt-4">
            <Image
              src="/images/img_1.jpg"
              alt="Img 1"
              width={300}
              height={96}
              className="w-full h-24 object-cover rounded-lg"
            />
            <Image
              src="/images/img_2.jpg"
              alt="Img 2"
              width={300}
              height={96}
              className="w-full h-24 object-cover rounded-lg"
            />
            <Image
              src="/images/img_3.jpg"
              alt="Img 3"
              width={300}
              height={96}
              className="w-full h-24 object-cover rounded-lg"
            />
            <Image
              src="/images/img1_sec1.jpg"
              alt="Img 4"
              width={300}
              height={96}
              className="w-full h-24 object-cover rounded-lg"
            />
            <Image
              src="/images/img2_sec1.jpg"
              alt="Img 5"
              width={300}
              height={96}
              className="w-full h-24 object-cover rounded-lg"
            />
            <Image
              src="/images/img3_sec1.jpg"
              alt="Img 6"
              width={300}
              height={96}
              className="w-full h-24 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-bold">Faciales</h3>
          <ul className="space-y-2 mt-4">
            <li>
              <a href="#" className="text-sm underline">
                Mesoterapia facial
              </a>
            </li>
            <li>
              <a href="#" className="text-sm underline">
                Micropeeling
              </a>
            </li>
            <li>
              <a href="#" className="text-sm underline">
                Rellenos faciales
              </a>
            </li>
            <li>
              <a href="#" className="text-sm underline">
                Luz Pulsada M22
              </a>
            </li>
            <li>
              <a href="#" className="text-sm underline">
                Tratamiento Rinolook
              </a>
            </li>
            <li>
              <a href="#" className="text-sm underline">
                Tratamientos de parpados
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section4;
