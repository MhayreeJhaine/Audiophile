import React from "react";

const ProductGallery = ({ gallery }: { gallery: any }) => {
  return (
    <section className="md:my-32 my-10 flex md:flex-row flex-col md:h-[650px] h-auto justify-center items-center gap-8">
      <div className="md:w-[40%] w-full flex flex-col gap-8 h-full">
        <img
          src={gallery.first.desktop.replace("./assets", "")}
          alt="first"
          className="w-full h-1/2 object-cover rounded-xl"
        />
        <img
          src={gallery.second.desktop.replace("./assets", "")}
          alt="second"
          className="w-full h-1/2 object-cover rounded-xl"
        />
      </div>
      <div className="md:w-[60%] w-full h-full">
        <img
          src={gallery.third.desktop.replace("./assets", "")}
          alt="third"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
    </section>
  );
};

export default ProductGallery;
