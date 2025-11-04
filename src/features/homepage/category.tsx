"use client";

import Image from "next/image";
import headphones from "@/assets/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "@/assets/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "@/assets/shared/desktop/image-category-thumbnail-earphones.png";
import { FaChevronRight } from "react-icons/fa6";

const categories = [
  { name: "Headphones", image: headphones },
  { name: "Speakers", image: speakers },
  { name: "Earphones", image: earphones },
];

export default function CategorySection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 mt-15 grid gap-8 md:grid-cols-3 text-center">
      {categories.map((cat) => (
        <div
          key={cat.name}
          className="relative bg-lightGray rounded-lg flex flex-col items-center pt-20 pb-6 hover:shadow-md transition-shadow duration-300"
        >
          {/* Product Image */}
          <div className="absolute -top-11 flex items-center justify-center w-full">
            <Image
              src={cat.image}
              alt={cat.name}
              width={160}
              height={160}
              className="object-contain"
            />
          </div>

          {/* Category Name */}
          <h3 className="mt-10 font-bold uppercase tracking-widest text-black">
            {cat.name}
          </h3>

          {/* Shop Button */}
          <button className="flex mt-3 text-black/60 uppercase text-sm tracking-[2px] hover:text-audiophile-orange transition-colors cursor-pointer">
            Shop{" "}
            <span className="text-orange ml-2 mt-1">
              <FaChevronRight size={10} />
            </span>
          </button>
        </div>
      ))}
    </section>
  );
}
