import LinkBtn from "../../components/ui/btn";

const FeaturedProducts = () => {
  return (
    <section>
      {/* ZX9 Speaker Section */}

      <section className="container mx-auto bg-orange rounded-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 pt-10 lg:pt-20 pb-16 md:pb-5 lg:pb-0 relative">
          {/* Speaker Image */}
          <div className="relative z-10 flex justify-center lg:w-1/2 w-full mb-[-35px]">
            {/* Background Circles*/}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/20"></div>
              <div className="absolute w-[350px] h-[350px]  md:w-[450px] md:h-[450px] rounded-full border border-white/20"></div>
              <div className="absolute w-[550px] h-[550px] md:w-[850px] md:h-[850px] rounded-full border-2 border-white/10"></div>
            </div>

            <img
              src="/speaker-1.png"
              alt="ZX9 Speaker"
              className="w-[200px] sm:w-[280px] md:w-[360px] lg:w-[410px] object-contain relative z-10"
            />
          </div>

          {/* Text Section */}
          <div
            className="relative z-10 text-center lg:text-left lg:w-1/2 w-full mt-10 lg:-mt-25
          pl-0 lg:pl-10"
          >
            <h2 className="text-white font-bold text-[36px] sm:text-[48px] lg:text-[56px] uppercase leading-10 lg:leading-[58px] tracking-[2px]">
              ZX9 <br /> Speaker
            </h2>
            <p className="text-white/80 mt-6 mb-10 max-w-md mx-auto lg:mx-0">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>

            <LinkBtn
              to={"/product/zx9-speaker"}
              label="see product"
              className="bg-black hover:bg-hoverBlack text-white "
            />
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
          <LinkBtn
            to={"/product/zx7-speaker"}
            label="see product"
            className="bg-transparent border border-black hover:bg-black hover:text-white "
          />
        </div>
      </section>

      {/* YX1 Earphones Section */}
      <section className="container mx-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6 gap-12 md:mt-12 mt-6">
        <div className="h-auto">
          <img src={"/earphone-2.png"} alt="earphones" />
        </div>

        <div className="bg-lightGray rounded-xl flex items-center sm:h-auto h-[200px]">
          <div className="xl:pl-[120px] pl-[60px]">
            <h3 className="text-black font-bold lg:text-[28px] text-[20px] uppercase leading-normal mb-6 tracking-[2px]">
              yx1 <br /> earphones
            </h3>

            <LinkBtn
              to={"/product/yx1-earphones"}
              label="see product"
              className="bg-transparent border border-black hover:bg-black hover:text-white "
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeaturedProducts;
