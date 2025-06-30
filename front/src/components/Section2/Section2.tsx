import Image from "next/image";
import Button from "../Button/Button";

const Section2 = () => {
  return (
    <section className="bg-white w-full py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-12">
          <div className="w-full md:w-2/3 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-gilda">
              Our New Adventures
            </h2>
            <p className="text-gray-600 mt-6">
              Sed gravida ornare vestibulum turpis quam urna aliquam. Available
              for a limited time.
            </p>
            <div className="mt-8">
              <Button variant="primary">Get Started</Button>
            </div>
          </div>

          {/*  Grid centrado con ancho máximo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full mx-auto">
            <div className="w-full">
              <Image
                src="/images/img_1.jpg"
                alt="image 1"
                width={500}
                height={320}
                className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
            <div className="w-full">
              <Image
                src="/images/img_2.jpg"
                alt="image 2"
                width={500}
                height={320}
                className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
