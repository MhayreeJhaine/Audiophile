import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f0f0f] pb-20 px-0 lg:px-15">
      <section className="container mx-auto px-4">
        <div className="w-[100px] h-2 bg-[#D87D4A] sm:mx-0 mx-auto"></div>

        <div className="flex md:items-center items-start md:flex-row flex-col gap-8 justify-between w-full md:mt-[75px] mt-12 sm:text-left text-center">
          <img
            src={"/audiophile.png"}
            alt="audiophile logo"
            className="w-40 sm:mx-0 mx-auto"
          />

          <nav className="sm:mx-0 mx-auto">
            <ul className="flex sm:flex-row flex-col gap-6 sm:mx-0 mx-auto">
              <li>
                <Link
                  to="/"
                  className="font-bold text-sm uppercase tracking-[2px] text-white hover:text-[#D87D4A] transition-colors duration-300"
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/headphones"
                  className="font-bold text-sm uppercase tracking-[2px] text-white hover:text-[#D87D4A] transition-colors duration-300"
                >
                  headphones
                </Link>
              </li>
              <li>
                <Link
                  to="/speakers"
                  className="font-bold text-sm uppercase tracking-[2px] text-white hover:text-[#D87D4A] transition-colors duration-300"
                >
                  speakers
                </Link>
              </li>
              <li>
                <Link
                  to="/earphones"
                  className="font-bold text-sm uppercase tracking-[2px] text-white hover:text-[#D87D4A] transition-colors duration-300"
                >
                  earphones
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 md:w-2/3 lg:w-1/2 w-full">
          <p className="text-white/50 text-base leading-[25px] sm:px-0 px-4 w-full sm:text-left text-center">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility — we&apos;re open 7 days a week.
          </p>
        </div>

        <div className="flex sm:flex-row flex-col gap-6 items-center justify-between md:mt-14 mt-12">
          <p className="text-white/50 text-base font-bold leading-[25px]">
            Copyright 2021. All Rights Reserved
          </p>

          <div className="flex flex-row items-center gap-3">
            <Facebook className="text-white cursor-pointer hover:text-[#D87d4a] transition-colors duration-300" />
            <Twitter className="text-white cursor-pointer hover:text-[#D87d4a] transition-colors duration-300" />
            <Instagram className="text-white cursor-pointer hover:text-[#D87d4a] transition-colors duration-300" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
