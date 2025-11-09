import React from "react";
import Musicman from "../components/Musicman";
import Devices from "../components/Devices";

import Hero from "../features/homepage/hero";
import FeaturedProducts from "../features/homepage/featured";

const Home = () => {
  return (
    <>
      <Hero />

      <main className="bg-white px-0 lg:px-15">
        <Devices />

        <section className="px-4 md:my-32 my-12">
          <FeaturedProducts />

          <Musicman />
        </section>
      </main>
    </>
  );
};

export default Home;
