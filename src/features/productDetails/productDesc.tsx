import React from "react";

const ProductDescription = ({ product }: { product: any }) => {
  return (
    <section className="w-full flex items-start flex-col md:flex-row justify-between sm:gap-20 gap-10 md:mt-32 mt-10">
      <div className="md:w-2/3 w-full">
        <h3 className="text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-7 tracking-[1.14px]">
          FEATURES
        </h3>
        <p className="text-black/50 mx-auto w-full mt-8 sm:px-0 leading-[25px] font-medium whitespace-pre-line">
          {product.features}
        </p>
      </div>

      <div className="w-full md:w-1/3">
        <h3 className="uppercase mb-8 text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-7 tracking-[1.14px]">
          in the box
        </h3>
        {product.includes.map((item: any, index: number) => (
          <p
            key={index}
            className="text-black/50 mx-auto w-full mb-2 sm:px-0 leading-[25px] font-medium"
          >
            <span className="text-[#D87D4A] mr-3">{item.quantity}x</span>
            {item.item}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProductDescription;
