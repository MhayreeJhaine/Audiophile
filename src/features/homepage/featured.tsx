"use client";

import Image from "next/image";
import zx9 from "@/assets/home/desktop/image-speaker-zx9.png";
import zx7 from "@/assets/home/desktop/image-speaker-zx7.jpg";
import yx1 from "@/assets/home/desktop/image-earphones-yx1.jpg";

export default function FeaturedProducts() {
  return (
    <section className="flex flex-col gap-10 px-6 md:px-12 lg:px-20 py-20">
      {/* ZX9 */}
      <div className="bg-orange rounded-lg flex flex-col md:flex-row items-center text-center md:text-left overflow-hidden p-10">
        <Image src={zx9} alt="ZX9 Speaker" className="w-48 md:w-72" />
        <div className="md:ml-16 mt-8 md:mt-0">
          <h2 className="text-4xl text-white font-bold">ZX9 Speaker</h2>
          <p className="text-white/80 mt-4">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="mt-8 bg-black text-white px-8 py-3 uppercase tracking-wider">
            See Product
          </button>
        </div>
      </div>

      {/* ZX7 */}
      <div className="relative">
        <Image
          src={zx7}
          alt="ZX7 Speaker"
          className="rounded-lg w-full h-[300px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center pl-10 ">
          <h3 className="text-2xl font-bold">ZX7 Speaker</h3>
          <button className="mt-4 border border-black px-6  w-30 py-2 uppercase ">
            See Product
          </button>
        </div>
      </div>

      {/* YX1 */}
      <div className="grid md:grid-cols-2 gap-6">
        <Image
          src={yx1}
          alt="YX1 Earphones"
          className="rounded-lg w-full h-[300px] object-cover"
        />
        <div className="bg-lightGray rounded-lg flex flex-col justify-center px-10">
          <h3 className="text-2xl font-bold">YX1 Earphones</h3>
          <button className="mt-4 border border-black px-6 py-2 uppercase tracking-wider">
            See Product
          </button>
        </div>
      </div>
    </section>
  );
}
