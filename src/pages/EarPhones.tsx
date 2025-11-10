import Devices from "../components/Devices";
import Musicman from "../components/Musicman";
import { Link } from "react-router-dom";
import React from "react";

const EarPhones: React.FC = () => {
  return (
    <main>
      <div className="bg-[#141414] flex items-center justify-center">
        <h2 className="font-bold uppercase sm:py-[90px] py-8 md:text-[40px] text-[28px] md:leading-11 leading-normal text-white tracking-[1.43px]">
          earphones
        </h2>
      </div>

      <div className="p-2 md:p-5 mt-12 md:mt-20">
        <section className="container mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-4  md:gap-20 gap-10">
          <div className="lg:w-1/2 w-full bg-lightGray rounded-lg flex items-center justify-center relative">
            <img
              src={"/earphone-1.png"}
              alt="earphone"
              className="sm:w-[340px] w-[50%] h-auto sm:pt-[65px] sm:pb-[108px] py-10"
            />
            <img
              src={"/shadow-1.png"}
              alt="shadow"
              className="absolute w-60 sm:w-[400px] md:w-[400px] mx-auto top-80 md:block hidden"
            />
          </div>

          <div className="w-full lg:w-1/3 lg:text-left text-center">
            <p className="text-sm uppercase tracking-[10px] font-normal text-[#D87D4A] leading-normal">
              new product
            </p>

            <h3 className="font-bold lg:text-[40px] text-[28px] uppercase lg:leading-11 leading-normal my-6 tracking-[2px]">
              YX1 WIRELESS <br /> EARPHONES
            </h3>

            <p className="text-black/50 mx-auto w-full px-4 sm:px-0 leading-[25px] font-medium">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>

            <Link
              to="/product/yx1-earphones"
              className="bg-[#D87D4A] mt-10 text-white block w-fit mx-auto lg:mx-0 px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300"
            >
              see product
            </Link>
          </div>
        </section>

        <Devices />

        <Musicman className="px-4 md:my-32 my-12" />
      </div>
    </main>
  );
};

export default EarPhones;
