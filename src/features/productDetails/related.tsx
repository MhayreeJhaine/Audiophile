import { Link } from "react-router-dom";

const RelatedProducts = ({ others }: { others: any[] }) => {
  return (
    <section className="sm:mb-8 mb-4">
      <h3 className="text-center uppercase text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-7 tracking-[1.14px]">
        you may also like
      </h3>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-[30px] gap-6 sm:mt-12 mt-8">
        {others.map((product, index) => (
          <div key={index}>
            <div className="bg-lightGray h-[318px] flex items-center justify-center">
              <img
                src={product.image.desktop.replace("./assets", "")}
                alt={product.name}
                className="w-[150px]"
              />
            </div>

            <div className="sm:mt-10 mt-6 text-center">
              <h3 className="uppercase text-black sm:text-[24px] text-base font-bold tracking-[1.71px]">
                {product.name}
              </h3>
              <Link
                to={`/product/${product.slug}`}
                className="bg-orange text-white block w-fit sm:mt-8 mt-4 mx-auto px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-lightOrange transition-colors duration-300"
              >
                see product
              </Link>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default RelatedProducts;
