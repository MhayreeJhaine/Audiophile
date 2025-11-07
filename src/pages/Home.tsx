import React from "react";
import Musicman from "../components/Musicman";
import Devices from "../components/Devices";

const Home: React.FC = () => {
  return (
    <>
      <section className="relative w-full h-[600px] sm:h-[600px] md:h-[650px] lg:h-[700px]">
        <img
          src="/heroBg.png"
          alt="headphones"
          className="absolute inset-0 w-full h-full object-cover -z-10 custom-object-pos"
        />
        <div className="absolute inset-0 bg-black/40 -z-10"></div>

        <div className="container mx-auto px-6 py-32 flex flex-col justify-center text-white text-center lg:text-left items-center lg:items-start">
          <p className="text-sm uppercase tracking-[10px] font-normal text-white/50 leading-normal">
            new product
          </p>

          <h3 className="font-bold lg:text-[56px] text-[36px] uppercase leading-[58px] my-6 tracking-[2px]">
            XX99 Mark II <br /> Headphones
          </h3>

          <p className="text-white/75 sm:w-[400px] w-full leading-[25px] font-medium sm:px-0 px-4">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button className="bg-[#D87D4A] mt-10 text-white px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300">
            see product
          </button>
        </div>
      </section>

      <main className="bg-white">
        <Devices />

        <section className="px-4 md:my-32 my-12">
          {/* ZX9 Speaker Section */}
          <section className="container mx-auto bg-[#D87D4A] rounded-xl w-full">
            <div className="flex md:items-start items-center md:flex-row flex-col gap-8 justify-between mx-auto lg:px-12 px-2 sm:pt-[90px] pt-6 lg:w-[65%] w-full md:pb-0 pb-4">
              <div className="sm:w-[400px] w-[250px]">
                <img src="/speaker-2.png" alt="zx9 speaker" className="w-full" />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-white font-bold lg:text-[56px] text-[36px] uppercase leading-[58px] my-6 tracking-[2px]">
                  ZX9 <br /> Speaker
                </h3>
                <p className="text-white/75 sm:w-[400px] w-full leading-[25px] font-medium">
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                <button className="bg-[#000000] mt-10 text-white px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#4c4c4c] transition-colors duration-300">
                  see product
                </button>
              </div>
            </div>
          </section>

          {/* ZX7 Speaker Section */}
          <section className="relative container mx-auto w-full md:mt-12 mt-6 md:h-auto h-[200px]">
            <img
              src={"/Bitmap-sec.png"}
              alt="ZX7 speaker"
              className="w-full h-full rounded-xl object-cover"
            />
            <div className="absolute top-1/2 right-0 translate-y-[-50%] md:left-[10%] left-[5%]">
              <h3 className="text-black font-bold lg:text-[28px] text-[20px] uppercase leading-normal mb-6 tracking-[2px]">
                ZX7 <br /> Speaker
              </h3>
              <button className="bg-transparent border border-black text-black px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                see product
              </button>
            </div>
          </section>

          {/* YX1 Earphones Section */}
          <section className="container mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 gap-12 md:mt-12 mt-6">
            <div className="h-auto">
              <img src={"/earphone-2.png"} alt="earphones" />
            </div>

            <div className="bg-[#f1f1f1] rounded-xl flex items-center sm:h-auto h-[200px]">
              <div className="xl:pl-[120px] pl-[60px]">
                <h3 className="text-black font-bold lg:text-[28px] text-[20px] uppercase leading-normal mb-6 tracking-[2px]">
                  yx1 <br /> earphones
                </h3>
                <button className="bg-transparent border border-black text-black px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-black hover:text-white transition-colors duration-300">
                  see product
                </button>
              </div>
            </div>
          </section>

          <Musicman />
        </section>
      </main>
    </>
  );
};

export default Home;
