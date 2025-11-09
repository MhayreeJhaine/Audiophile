import React from "react";
import { Link } from "react-router-dom";

interface ProductHeaderProps {
  product: any;
  count: number;
  increase: () => void;
  decrease: () => void;
}

const ProductHeader = ({
  product,
  count,
  increase,
  decrease,
}: ProductHeaderProps) => {
  return (
    <section className="w-full flex flex-col lg:flex-row items-center justify-between md:mt-16 mt-10 md:mb-20 mb-12 md:gap-20 gap-10">
      <div className="lg:w-1/2 w-full bg-[#f1f1f1] rounded-lg flex items-center justify-center relative">
        <img
          src={product.image.desktop.replace("./assets", "")}
          alt={product.name}
          className="sm:w-[340px] w-[50%] h-auto sm:pt-[65px] sm:pb-[108px] py-10"
        />
      </div>

      <div className="w-full lg:w-1/3 lg:text-left text-center">
        {product.new && (
          <p className="text-sm uppercase tracking-[10px] font-normal text-[#D87D4A] leading-normal">
            new product
          </p>
        )}
        <h3 className="font-bold lg:text-[40px] text-[28px] uppercase lg:leading-11 leading-normal my-6 tracking-[2px]">
          {product.name}
        </h3>
        <p className="text-black/50 mx-auto w-full px-4 sm:px-0 leading-[25px] font-medium">
          {product.description}
        </p>

        <h3 className="sm:text-[18px] text-base font-bold tracking-[1.29px] text-black sm:my-8 my-4">
          $ {product.price}
        </h3>

        <div className="flex flex-row gap-4 mt-2 mx-auto lg:mx-0 w-fit">
          <div className="flex items-center gap-5 bg-[#f1f1f1] px-4 py-4">
            <button
              onClick={decrease}
              className="text-sm font-bold text-black/25 hover:text-[#D87D4A] cursor-pointer"
            >
              -
            </button>
            <p className="font-medium text-base w-6 text-center tracking-[1px]">
              {count}
            </p>
            <button
              onClick={increase}
              className="text-sm font-bold text-black/25 hover:text-[#D87D4A] cursor-pointer"
            >
              +
            </button>
          </div>

          <button className="bg-[#D87D4A] text-white block w-fit mx-auto sm:mx-0 px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300">
            add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductHeader;
