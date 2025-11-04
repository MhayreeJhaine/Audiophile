"use client";

import Image from "next/image";
import aboutImg from "@/assets/man.png";

export default function AboutSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center gap-10 px-6 md:px-12 lg:px-20 py-20">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-3xl font-bold uppercase">
          Bringing you the <span className="text-audiophile-orange">best</span>{" "}
          audio gear
        </h2>
        <p className="text-audiophile-black/70 mt-6">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <Image
        src={aboutImg}
        alt="About Audiophile"
        className="rounded-lg flex-1 w-full h-[400px] object-cover"
      />
    </section>
  );
}
