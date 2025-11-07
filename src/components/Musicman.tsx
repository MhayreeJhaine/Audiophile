import React from "react";

interface MusicmanProps {
  className?: string;
}

const Musicman: React.FC<MusicmanProps> = ({ className = "" }) => {
  return (
    <section
      className={`container mx-auto w-full flex items-center lg:flex-row flex-col-reverse justify-between lg:gap-0 gap-6 md:mt-32 mt-12 ${className}`}
    >
      <div className="w-full lg:w-1/2 lg:text-left text-center">
        <h3 className="font-bold md:text-[40px] text-[28px] tracking-[1.43px] md:leading-11 leading-normal uppercase lg:w-4/5 w-full">
          Bringing you the <span className="text-[#D87D4A]">best</span> audio gear
        </h3>
        <p className="lg:w-4/5 w-full text-black/50 text-base md:mt-8 mt-4 leading-[25px]">
          Located at the heart of New York City, Audiophile is the premier store for
          high-end headphones, earphones, speakers, and audio accessories. We have a
          large showroom and luxury demonstration rooms available for you to browse
          and experience a wide range of our products. Stop by our store to meet some
          of the fantastic people who make Audiophile the best place to buy your
          portable audio equipment.
        </p>
      </div>

      <div className="lg:w-1/2 w-full">
        <img src={'/musicman.png'} alt="music man" className="w-full h-auto rounded-xl" />
      </div>
    </section>
  );
};

export default Musicman;
