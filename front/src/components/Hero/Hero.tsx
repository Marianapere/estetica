import Image from "next/image";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="w-full  min-h-screen pt-20 bg-[rgb(177,240,247)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Contenido de texto */}
          <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-gilda max-w-2xl mx-auto lg:mx-0 mb-6 md:mb-0">
              Spa & Relax
            </h1>
            <p className="text-gray-600 text-lg max-w-lg mx-auto lg:mx-0">
              Descubre el Equilibrio Ideal entre Ciencia y Estética. Somos la
              auténtica expresión de belleza y bienestar.
            </p>

            {/* Botón centrado */}
            <div className="mt-8 flex justify-center">
              <Button variant="primary">Más Info</Button>
            </div>
          </div>

          {/* Grid de imágenes */}
          <div className="w-full lg:w-2/3 mt-10">
            <div className="grid grid-cols-2 gap-4">
              {["img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg"].map(
                (img, i) => (
                  <Image
                    key={i}
                    src={`/images/${img}`}
                    alt={`img_spa_${i + 1}`}
                    width={500}
                    height={320}
                    className="w-full h-48 md:h-64 object-cover shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md"
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
