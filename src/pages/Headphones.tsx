import Devices from "../components/Devices";
import Musicman from "../components/Musicman";
import { Link } from "react-router-dom";

const HeadPhones = () => {
  return (
    <main>
      <div className="bg-[#141414] flex items-center justify-center">
        <h2 className="font-bold uppercase py-6  md:py-20 md:text-[40px] text-[28px] md:leading-11 leading-normal text-white tracking-[1.43px]">
          headphones
        </h2>
      </div>

      <div className="p-2 md:p-5 mt-12 md:mt-20">
        {/* XX99 Mark II */}
        <section className="container mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-4  md:gap-20 gap-10">
          <div className="lg:w-1/2 w-full bg-lightGray rounded-lg flex items-center justify-center relative">
            <img
              src={"/headphone-2.png"}
              alt="headphones"
              className="sm:w-[340px] w-[50%] h-auto sm:pt-[65px] sm:pb-[108px] py-10"
            />
            <img
              src={"/shadow-1.png"}
              alt="shadow"
              className="absolute w-60 sm:w-[300px] md:w-[300px] mx-auto top-[380px] md:block hidden"
            />
          </div>

          <div className="w-full lg:w-1/3 lg:text-left text-center">
            <p className="text-sm uppercase tracking-[10px] font-normal text-[#D87D4A] leading-normal">
              new product
            </p>
            <h3 className="font-bold lg:text-[40px] text-[28px] uppercase lg:leading-11 leading-normal my-6 tracking-[2px]">
              XX99 Mark II <br /> Headphones
            </h3>
            <p className="text-black/50 mx-auto w-full px-4 sm:px-0 leading-[25px] font-medium">
              The new XX99 Mark II headphones are the pinnacle of pristine
              audio. They redefine your premium headphone experience by
              reproducing the balanced depth and precision of studio-quality
              sound.
            </p>
            <Link
              to="/product/xx99-mark-two-headphones"
              className="bg-orange mt-10 text-white block w-fit mx-auto lg:mx-0 px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-lightOrange transition-colors duration-300"
            >
              see product
            </Link>
          </div>
        </section>

        {/* XX99 Mark I */}
        <section className="container mx-auto w-full flex flex-col-reverse lg:flex-row justify-between items-center px-4 md:mt-40 mt-[60px] md:gap-20 gap-10">
          <div className="w-full lg:w-1/3 lg:text-left text-center">
            <h3 className="font-bold lg:text-[40px] text-[28px] uppercase lg:leading-11 leading-normal my-6 tracking-[2px]">
              XX99 Mark I <br /> Headphones
            </h3>
            <p className="text-black/50 mx-auto w-full px-4 sm:px-0 leading-[25px] font-medium">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <Link
              to="/product/xx99-mark-one-headphones"
              className="bg-[#D87D4A] mt-10 text-white block w-fit mx-auto lg:mx-0 px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300"
            >
              see product
            </Link>
          </div>

          <div className="lg:w-1/2 w-full bg-lightGray rounded-lg flex items-center justify-center relative">
            <img
              src={"/headphone-1.png"}
              alt="headphones"
              className="sm:w-[340px] w-[50%] h-auto sm:pt-[65px] sm:pb-[108px] py-10"
            />
            <img
              src={"/shadow-1.png"}
              alt="shadow"
              className="absolute w-60 sm:w-[300px] md:w-[300px] mx-auto top-[440px] md:block hidden"
            />
          </div>
        </section>

        {/* XX59 */}
        <section className="container mx-auto w-full flex flex-col lg:flex-row items-center justify-between px-4 md:mt-40 mt-[60px] md:gap-20 gap-10">
          <div className="lg:w-1/2 w-full bg-lightGray rounded-lg flex items-center justify-center relative">
            <img
              src={"/headphone-3.png"}
              alt="headphones"
              className="sm:w-[340px] w-[50%] h-auto sm:pt-[65px] sm:pb-[108px] py-10"
            />
            <img
              src={"/shadow-1.png"}
              alt="shadow"
              className="absolute w-60sm:w-[300px] md:w-[300px] mx-auto top-[380px] md:block hidden"
            />
          </div>

          <div className="w-full lg:w-1/3 lg:text-left text-center">
            <h3 className="font-bold lg:text-[40px] text-[28px] uppercase lg:leading-11 leading-normal my-6 tracking-[2px]">
              XX59 <br /> Headphones
            </h3>
            <p className="text-black/50 mx-auto w-full px-4 sm:px-0 leading-[25px] font-medium">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable wireless
              headset is a brilliant companion at home or on the move.
            </p>
            <Link
              to="/product/xx59-headphones"
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

export default HeadPhones;
