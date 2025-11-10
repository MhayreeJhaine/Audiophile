import { Link } from "react-router-dom";
import Devices from "../components/Devices";
import Musicman from "../components/Musicman";

const Speakers: React.FC = () => {
  return (
    <main>
      {/* Page Header */}
      <div className="bg-[#141414] flex items-center justify-center">
        <h2 className="font-bold uppercase py-6  md:py-20 md:text-[40px] text-[28px] md:leading-11 leading-normal text-white tracking-[1.43px]">
          speakers
        </h2>
      </div>

      <div className="p-2 md:p-5 mt-12 md:mt-20">
        {/* ZX9 Speaker Section */}
        <section className="container px-4 mx-auto w-full flex flex-col lg:flex-row items-center justify-between md:gap-20 gap-10">
          <div className="lg:w-1/2 w-full bg-lightGray rounded-lg flex items-center justify-center relative">
            <img
              src={"/speaker-1.png"}
              alt="ZX9 Speaker"
              className="sm:w-[340px] w-[50%] h-auto sm:pt-[65px] sm:pb-[108px] py-10"
            />
            <img
              src={"/shadow-1.png"}
              alt="shadow"
              className="absolute w-60 sm:w-[400px] md:w-[400px] mx-auto top-95 md:block hidden"
            />
          </div>

          <div className="w-full lg:w-1/3 lg:text-left text-center">
            <p className="text-sm uppercase tracking-[10px] font-normal text-[#D87D4A] leading-normal">
              new product
            </p>

            <h3 className="font-bold lg:text-[40px] text-[28px] uppercase lg:leading-11 leading-normal my-6 tracking-[2px]">
              ZX9 <br /> Speaker
            </h3>

            <p className="text-black/50 mx-auto w-full px-4 sm:px-0 leading-[25px] font-medium">
              Upgrade your sound system with the all new ZX9 active speaker.
              It's a bookshelf speaker system that offers truly wireless
              connectivity — creating new possibilities for more pleasing and
              practical audio setups.
            </p>

            <Link
              to="/product/zx9-speaker"
              className="bg-[#D87D4A] mt-10 text-white block w-fit mx-auto lg:mx-0 px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300"
            >
              see product
            </Link>
          </div>
        </section>

        {/* ZX7 Speaker Section */}
        <section className="container mx-auto w-full flex flex-col-reverse lg:flex-row justify-between items-center px-4 md:mt-40 mt-[60px] md:gap-20 gap-10">
          <div className="w-full lg:w-1/3 lg:text-left text-center">
            <h3 className="font-bold lg:text-[40px] text-[28px] uppercase lg:leading-11 leading-normal my-6 tracking-[2px]">
              ZX7 <br /> Speaker
            </h3>

            <p className="text-black/50 mx-auto w-full px-4 sm:px-0 leading-[25px] font-medium">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represent the top of the line powered speakers for home or studio
              use.
            </p>

            <Link
              to="/product/zx7-speaker"
              className="bg-[#D87D4A] mt-10 text-white block w-fit mx-auto lg:mx-0 px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300"
            >
              see product
            </Link>
          </div>

          <div className="lg:w-1/2 w-full bg-lightGray rounded-lg flex items-center justify-center relative">
            <img
              src={"/speaker-2.png"}
              alt="ZX7 Speaker"
              className="sm:w-[340px] w-[50%] h-auto sm:pt-[65px] sm:pb-[108px] py-10"
            />
            <img
              src={"/shadow-1.png"}
              alt="shadow"
              className="absolute w-60 sm:w-[400px] md:w-[400px] mx-auto top-110 md:block hidden"
            />
          </div>
        </section>

        <Devices />
        <Musicman className="px-4 md:my-32 my-12" />
      </div>
    </main>
  );
};

export default Speakers;
