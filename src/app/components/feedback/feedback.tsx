import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const Image = ({ src, alt, className, width, height }: ImageProps) => (
  <img src={src} alt={alt} className={className} width={width} height={height} />
);

export function CarouselFeatures() {
  return (
    <section className="px-8 pt-40 pb-20">
      <div className="flex mb-16 flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2 text-blue-gray-900">
          What Students Say
        </h2>
        <p className="mb-3 w-full text-center font-normal text-gray-500 lg:w-10/12">
          Discover what our students have to say about our course!
        </p>
      </div>
      <div className="container mx-auto rounded-lg bg-[url('/image/Background.png')] bg-center py-10 lg:px-16">
        {new Array(2).fill("").map((_, i) => (
          <div
            key={i}
            className="relative flex flex-col-reverse gap-6 px-10 py-14 md:grid md:grid-cols-5 md:gap-14 md:py-20"
          >
            <div className="col-span-3 flex flex-col items-start justify-center">
              <p className="mb-5 text-xl font-normal text-white">
                Easy Shopping, Quick Delivery <br />
                No need to stress about shopping for books. Order online and
                have your textbooks and supplies delivered straight to your
                doorstep for free.
              </p>
              <p className="font-medium uppercase text-white">
                Louis Miriam,{" "}
                <span className="font-normal opacity-60">
                  Web Developer @ AMAZON INC.
                </span>
              </p>
            </div>
            <div className="col-span-2 flex w-full shrink-0 md:justify-end">
              <Image
                width={256}
                height={256}
                src="/image/logos/logo-amazon 3.svg"
                alt="testimonial image"
                className="h-full w-2/4 object-contain md:w-2/3"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CarouselFeatures;
