"use client";

import Image from "next/image";
import heroDesktop from "@/assets/home/desktop/image-hero.jpg";
import heroTablet from "@/assets/home/tablet/image-header.jpg";
import heroMobile from "@/assets/home/mobile/image-header.jpg";

export default function HeroSection() {
  return (
    <section className="relative bg-darkGray text-white overflow-hidden">
      {/* Background Image */}
      <picture>
        <source media="(min-width:1024px)" srcSet={heroDesktop.src} />
        <source media="(min-width:640px)" srcSet={heroTablet.src} />
        <Image
          src={heroMobile}
          alt="Hero background"
          fill
          priority
          className="object-cover object-center opacity-90"
        />
      </picture>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-darkGray/60"></div>

      {/* Text content */}
      <div className="relative z-10 flex flex-col justify-center items-start max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32">
        <p className="uppercase text-sm tracking-[10px] text-white/75">
          New Product
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          XX99 Mark II <br className="hidden md:block" /> Headphones
        </h1>
        <p className="text-white/80 mt-6 max-w-md">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="mt-10 bg-orange cursor-pointer hover:bg-lightOrange transition-colors px-8 py-3 uppercase tracking-wider rounded-sm">
          See Product
        </button>
      </div>
    </section>
  );
}
