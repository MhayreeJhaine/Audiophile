import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import productsData from "../constants/data/db.json";
import ProductHeader from "../features/productDetails/productHeader";
import ProductDescription from "../features/productDetails/productDesc";
import ProductGallery from "../features/productDetails/productGallery";
import RelatedProducts from "../features/productDetails/related";
import Devices from "../components/Devices";
import Musicman from "../components/Musicman";

const ProductDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = productsData.data.find((p) => p.slug === slug);

  const [count, setCount] = useState<number>(1);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));

  if (!product) return <p>Product not found</p>;

  return (
    <main className="container mx-auto px-10">
      <button
        onClick={() => navigate(-1)}
        className="my-8 block font-extrabold text-orange hover:text-lightOrange cursor-pointer"
      >
        Go Back
      </button>

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
