import Image from "next/image";

const Section1 = () => {
  return (
    <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/img2_sec1.jpg"
          alt="Background"
          className="object-cover"
          fill
          priority
        />
        {/* Overlay opcional para mejor visibilidad del texto */}
        <div className="absolute inset-0  bg-white/50"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-black">
        {/* Header */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <h2 className="text-sm uppercase tracking-wider text-white-300 mb-4">
            LOREM & OUTDOOR RECREATION
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-start">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-gilda max-w-2xl mb-6 md:mb-0">
              Aesthetics for your Soul
            </h1>
            <div className="max-w-md text-black-300">
              <p className="text-base md:text-lg mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                minima cum ad perferendis! Numquam labore nihil hic mollitia
                odit. Possimus, reprehenderit.
              </p>
              <p className="text-base md:text-lg">- Jawaharlal Nehru</p>
              <div className="mt-4">
                <span className="text-2xl md:text-3xl font-gilda">
                  Aesthetics
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="aspect-[5/4] relative overflow-hidden rounded-lg">
            <Image
              src="/images/img1_sec1.jpg"
              alt="image 1"
              className="object-cover hover:scale-105 transition-transform duration-500"
              fill
            />
          </div>
          <div className="aspect-[5/4] relative overflow-hidden rounded-lg">
            <Image
              src="/images/img2_sec1.jpg"
              alt="image 2"
              className="object-cover hover:scale-105 transition-transform duration-500"
              fill
            />
          </div>
          <div className="aspect-[5/4] relative overflow-hidden rounded-lg">
            <Image
              src="/images/img3_sec1.jpg"
              alt="image 3"
              className="object-cover hover:scale-105 transition-transform duration-500"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
