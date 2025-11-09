import { Link } from "react-router-dom";
import LinkBtn from "../../components/ui/btn";

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] sm:h-[600px] md:h-[650px] lg:h-[600px] px-0 lg:px-15">
      <img
        src="/heroBg.png"
        alt="headphones"
        className="absolute inset-0 w-full h-full object-cover -z-10 custom-object-pos "
      />

      <div className="container mx-auto px-6 py-32 flex flex-col justify-center text-white text-center lg:text-left items-center lg:items-start">
        <p className="text-sm uppercase tracking-[10px] font-normal text-white/50 leading-normal">
          new product
        </p>

        <h3 className="font-bold lg:text-[56px] text-[36px] uppercase leading-[58px] my-6 tracking-[2px]">
          XX99 Mark II <br /> Headphones
        </h3>

        <p className="text-white/75 sm:w-[400px] w-full leading-[25px] font-medium sm:px-0 px-4">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>

        <LinkBtn
          to={"/product/xx99-mark-two-headphones"}
          label="see product"
          className="bg-orange hover:bg-lightOrange"
        />
      </div>
    </section>
  );
};

export default Hero;
