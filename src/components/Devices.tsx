import headphone from "/headphone-1.png";
import speaker from "/speaker-1.png";
import shadow from "/shadow-1.png";
import earphone from "/earphone-1.png";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Devices = () => {
  return (
    <section className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6 gap-20 md:mt-[200px] mt-[120px] md:mb-20 mb-10">
      <div className="bg-[#F1F1F1] rounded-xl text-center pb-10 relative overflow-visible flex flex-col items-center hover-bounce">
        <div className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[150px] aspect-[1/1.2] -mt-[60px] sm:-mt-[70px] md:-mt-20 lg:-mt-[90px]">
          <img
            src={headphone}
            alt="headphone"
            className="w-full h-full object-contain mx-auto"
          />
        </div>
        <img
          src={shadow}
          alt="shadow"
          className="w-[150px] sm:w-[180px] md:w-[200px] -mt-8 sm:-mt-10 md:-mt-12 mx-auto"
        />
        <div className="mt-4">
          <p className="uppercase tracking-[1px] font-semibold text-black mb-2">
            headphones
          </p>
          <Link
            to="/headphones"
            className="uppercase mx-auto w-fit cursor-pointer flex items-center gap-1 text-sm font-semibold tracking-[2px] text-[#979797] hover:text-[#D87D4A] transition-colors"
          >
            shop <ChevronRight className="text-[#D87D4A]" />
          </Link>
        </div>
      </div>

      <div className="bg-[#F1F1F1] rounded-xl text-center pb-10 relative overflow-visible flex flex-col items-center hover-bounce">
        <div className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[150px] aspect-[1/1.2] -mt-[60px] sm:-mt-[70px] md:-mt-20 lg:-mt-[90px]">
          <img
            src={speaker}
            alt="speaker"
            className="w-full h-full object-contain mx-auto"
          />
        </div>
        <img
          src={shadow}
          alt="shadow"
          className="w-[150px] sm:w-[180px] md:w-[200px] -mt-8 sm:-mt-10 md:-mt-12 mx-auto"
        />
        <div className="mt-4">
          <p className="uppercase tracking-[1px] font-semibold text-black mb-2">
            speakers
          </p>
          <Link
            to="/speakers"
            className="uppercase mx-auto w-fit cursor-pointer flex items-center gap-1 text-sm font-semibold tracking-[2px] text-[#979797] hover:text-[#D87D4A] transition-colors"
          >
            shop <ChevronRight className="text-[#D87D4A]" />
          </Link>
        </div>
      </div>

      <div className="bg-[#F1F1F1] rounded-xl text-center pb-10 relative overflow-visible flex flex-col items-center hover-bounce">
        <div className="w-[90px] sm:w-[110px] md:w-[125px] lg:w-[140px] aspect-[1/1.1] -mt-10 sm:-mt-[50px] md:-mt-[60px] lg:-mt-[70px]">
          <img
            src={earphone}
            alt="earphones"
            className="w-full h-full object-contain mx-auto"
          />
        </div>
        <img
          src={shadow}
          alt="shadow"
          className="w-[150px] sm:w-[180px] md:w-[200px] -mt-8 sm:-mt-10 md:-mt-12 mx-auto"
        />
        <div className="mt-4">
          <p className="uppercase tracking-[1px] font-semibold text-black mb-2">
            earphones
          </p>
          <Link
            to="/earphones"
            className="uppercase mx-auto w-fit cursor-pointer flex items-center gap-1 text-sm font-semibold tracking-[2px] text-[#979797] hover:text-[#D87D4A] transition-colors"
          >
            shop <ChevronRight className="text-[#D87D4A]" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Devices;
