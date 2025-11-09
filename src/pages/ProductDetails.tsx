// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// import Devices from "../components/Devices";
// import Musicman from "../components/Musicman";

// const ProductDetails: React.FC = () => {
//   const [count, setCount] = useState<number>(1);

//   const increase = () => setCount((prev) => prev + 1);
//   const decrease = () => {
//     if (count > 1) setCount((prev) => prev - 1);
//   };

//   return (
//     <main className="container mx-auto px-10">
//       <Link to="/" className="my-12 block text-black/50 hover:text-[#D87D4A]">
//         Go Back
//       </Link>

//       {/* Product Header Section */}
//       <section className="w-full flex flex-col lg:flex-row items-center justify-between md:mt-16 mt-10 md:mb-20 mb-12 md:gap-20 gap-10">
//         <div className="lg:w-1/2 w-full bg-[#f1f1f1] rounded-lg flex items-center justify-center relative">
//           <img
//             src={"/headphone-2.png"}
//             alt="headphones"
//             className="sm:w-[340px] w-[50%] h-auto sm:pt-[65px] sm:pb-[108px] py-10"
//           />
//           <img
//             src={"/shadow-1.png"}
//             alt="shadow"
//             className="absolute w-[280px] sm:w-[400px] md:w-[400px] mx-auto top-95 md:block hidden"
//           />
//         </div>

//         <div className="w-full lg:w-1/3 lg:text-left text-center">
//           <p className="text-sm uppercase tracking-[10px] font-normal text-[#D87D4A] leading-normal">
//             new product
//           </p>
//           <h3 className="font-bold lg:text-[40px] text-[28px] uppercase lg:leading-11 leading-normal my-6 tracking-[2px]">
//             XX99 Mark II <br /> Headphones
//           </h3>
//           <p className="text-black/50 mx-auto w-full px-4 sm:px-0 leading-[25px] font-medium">
//             The new XX99 Mark II headphones is the pinnacle of pristine audio.
//             It redefines your premium headphone experience by reproducing the
//             balanced depth and precision of studio-quality sound.
//           </p>

//           <h3 className="sm:text-[18px] text-base font-bold tracking-[1.29px] text-black sm:my-8 my-4">
//             $ 2,984
//           </h3>

//           <div className="flex flex-row gap-4 mt-2 mx-auto lg:mx-0 w-fit">
//             <div className="flex items-center gap-5 bg-[#f1f1f1] px-4 py-4">
//               <button
//                 onClick={decrease}
//                 className="text-sm font-bold text-black/25 hover:text-[#D87D4A] cursor-pointer"
//               >
//                 -
//               </button>
//               <p className="font-medium text-base w-6 text-center tracking-[1px]">
//                 {count}
//               </p>
//               <button
//                 onClick={increase}
//                 className="text-sm font-bold text-black/25 hover:text-[#D87D4A] cursor-pointer"
//               >
//                 +
//               </button>
//             </div>

//             <button className="bg-[#D87D4A] text-white block w-fit mx-auto sm:mx-0 px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300">
//               add to cart
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Product Description Section */}
//       <section className="w-full flex items-start flex-col md:flex-row justify-between sm:gap-20 gap-10 md:mt-32 mt-10">
//         <div className="md:w-2/3 w-full">
//           <h3 className="text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-7 tracking-[1.14px]">
//             FEATURES
//           </h3>
//           <p className="text-black/50 mx-auto w-full mt-8 sm:px-0 leading-[25px] font-medium">
//             Featuring a genuine leather head strap and premium earcups, these
//             headphones deliver superior comfort for those who like to enjoy
//             endless listening. It includes intuitive controls designed for any
//             situation. Whether you're taking a business call or just in your own
//             personal space, the auto on/off and pause features ensure that
//             you'll never miss a beat.
//           </p>

//           <p className="text-black/50 mx-auto w-full sm:px-0 leading-[25px] mt-6 font-medium">
//             The advanced Active Noise Cancellation with built-in equalizer allow
//             you to experience your audio world on your terms. It lets you enjoy
//             your audio in peace, but quickly interact with your surroundings
//             when you need to. Combined with Bluetooth 5.0 compliant connectivity
//             and 17 hour battery life, the XX99 Mark II headphones gives you
//             superior sound, cutting-edge technology, and a modern design
//             aesthetic.
//           </p>
//         </div>

//         <div className="w-full md:w-1/3">
//           <h3 className="uppercase mb-8 text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-7 tracking-[1.14px]">
//             in the box
//           </h3>
//           {[
//             "1x Headphone Unit",
//             "2x Replacement Earcups",
//             "1x User Manual",
//             "1x 3.5mm 5m Audio Cable",
//             "1x Travel Bag",
//           ].map((item, index) => (
//             <p
//               key={index}
//               className="text-black/50 mx-auto w-full mb-2 sm:px-0 leading-[25px] font-medium"
//             >
//               <span className="text-[#D87D4A] mr-3">{item.split(" ")[0]}</span>
//               {item.split(" ").slice(1).join(" ")}
//             </p>
//           ))}
//         </div>
//       </section>

//       {/* Product Gallery Section */}
//       <section className="md:my-32 my-10 flex md:flex-row flex-col md:h-[650px] h-auto justify-center items-center gap-8">
//         <div className="md:w-[40%] w-full flex flex-col gap-8 h-full">
//           <img
//             src={"/image-1.png"}
//             alt="first image"
//             className="w-full h-1/2 object-cover rounded-xl"
//           />
//           <img
//             src={"/image-2.png"}
//             alt="second image"
//             className="w-full h-1/2 object-cover rounded-xl"
//           />
//         </div>

//         <div className="md:w-[60%] w-full h-full">
//           <img
//             src={"/image-3.png"}
//             alt="third image"
//             className="w-full h-full object-cover rounded-xl"
//           />
//         </div>
//       </section>

//       {/* Related Products Section */}
//       <section className="sm:mb-8 mb-4">
//         <h3 className="text-center uppercase text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-7 tracking-[1.14px]">
//           you may also like
//         </h3>

//         <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-[30px] gap-6 sm:mt-12 mt-8">
//           {[
//             { img: "/headphone-1.png", title: "XX99 MARK I" },
//             { img: "/headphone-3.png", title: "XX59" },
//             { img: "/speaker-1.png", title: "ZX9 SPEAKER" },
//           ].map((product, index) => (
//             <div key={index}>
//               <div className="bg-[#f1f1f1] h-[318px] flex items-center justify-center">
//                 <img
//                   src={product.img}
//                   alt={product.title}
//                   className="w-[150px]"
//                 />
//               </div>

//               <div className="sm:mt-10 mt-6 text-center">
//                 <h3 className="uppercase text-black sm:text-[24px] text-base font-bold tracking-[1.71px]">
//                   {product.title}
//                 </h3>
//                 <Link
//                   to="/product/1"
//                   className="bg-[#D87D4A] text-white block w-fit sm:mt-8 mt-4 mx-auto px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300"
//                 >
//                   see product
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </section>
//       </section>

//       <Devices />
//       <Musicman className="px-4 md:my-32 my-12" />
//     </main>
//   );
// };

// export default ProductDetails;

import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import productsData from "../constants/data/db.json";
import ProductHeader from "../features/productDetails/productHeader";
import ProductDescription from "../features/productDetails/productDesc";
import ProductGallery from "../features/productDetails/productGallery";
import RelatedProducts from "../features/productDetails/related";
import Devices from "../components/Devices";
import Musicman from "../components/Musicman";

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  // const { slug } = useParams();
  const product = productsData.data.find((p) => p.slug === slug);

  const [count, setCount] = useState<number>(1);
  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => count > 1 && setCount((prev) => prev - 1);

  if (!product) return <p>Product not found</p>;

  return (
    <main className="container mx-auto px-10">
      <Link to="/" className="my-12 block text-black/50 hover:text-[#D87D4A]">
        Go Back
      </Link>

      <ProductHeader
        product={product}
        count={count}
        increase={increase}
        decrease={decrease}
      />

      <ProductDescription product={product} />

      <ProductGallery gallery={product.gallery} />

      <RelatedProducts others={product.others} />

      <Devices />
      <Musicman className="px-4 md:my-32 my-12" />
    </main>
  );
};

export default ProductDetails;
