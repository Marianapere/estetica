import React from "react";
import Button from "../Button/Button";
import Image from "next/image";

const Section3: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center bg-[rgb(177,240,247)] py-16 px-6 lg:px-20 space-y-8 lg:space-y-0 lg:space-x-10 min-h-screen">
      {/* Left Side - Images */}
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <div className="relative w-96 h-72">
          <Image
            src="/images/img1_sec3.jpg"
            alt="Imagen 1"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="relative w-96 h-72">
          <Image
            src="/images/img2_sec3.jpg"
            alt="Imagen 2"
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Right Side - Text and Button */}
      <div className="text-center ">
        <div className="lg:text-left">
          <h2 className="text-3xl lg:text-6xl font-gilda text-gray-900 font-semibold">
            Reserva tu próximo tratamiento
          </h2>
          <p className="mt-4 text-gray-600">
            Sed gravida ornare vestibulum turpis quam urna aliquam in feugiat
            lorem dolor pulvinar a, scelerisque amet ultrices consectetur magna
            sit.
          </p>
        </div>
        <div className="mt-6">
          <Button variant="primary">Reservar ahora</Button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
