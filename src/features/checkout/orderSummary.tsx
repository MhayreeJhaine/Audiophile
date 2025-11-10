interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface OrderSummaryProps {
  cartItems: CartItem[];
  total: number;
  shipping: number;
  vat: number;
  grandTotal: number;
  formValid: boolean;
  onContinue: () => void;
}

export function OrderSummary({
  cartItems,
  total,
  shipping,
  vat,
  grandTotal,
  formValid,
  onContinue,
}: OrderSummaryProps) {
  return (
    <div className="lg:w-[35%] w-full sm:p-8 px-4 py-8 bg-white rounded-xl">
      <h3 className="uppercase font-bold mb-8 sm:text-lg text-base text-black tracking-[1.29px]">
        Summary
      </h3>

      <div className="flex flex-col gap-6">
        {cartItems?.map((item) => (
          <div key={item._id} className="flex items-center gap-4">
            <div className="flex items-center justify-center bg-lightGray w-16 h-16 p-3 rounded-xl">
              <img src={item.image} alt={item.name} className="w-9" />
            </div>
            <div className="w-full flex items-start justify-between">
              <div className="flex flex-col">
                <h3 className="uppercase text-black font-bold text-[15px] leading-[25px]">
                  {item.name}
                </h3>
                <p className="text-black/50 font-bold text-sm leading-[25px]">
                  ${item.price.toLocaleString()}
                </p>
              </div>
              <p className="text-black/50 font-bold text-sm leading-[25px]">
                x{item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="uppercase text-black/50 font-medium text-[15px] leading-[25px]">
            Total
          </p>
          <h3 className="font-bold text-lg text-black">
            ${total.toLocaleString()}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <p className="uppercase text-black/50 font-medium text-[15px] leading-[25px]">
            Shipping
          </p>
          <h3 className="font-bold text-lg text-black">${shipping}</h3>
        </div>

        <div className="flex items-center justify-between">
          <p className="uppercase text-black/50 font-medium text-[15px] leading-[25px]">
            VAT (included)
          </p>
          <h3 className="font-bold text-lg text-black">
            ${vat.toLocaleString()}
          </h3>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p className="uppercase text-black/50 font-medium text-[15px] leading-[25px]">
            Grand Total
          </p>
          <h3 className="font-bold text-lg text-[#D87D4A]">
            ${grandTotal.toLocaleString()}
          </h3>
        </div>
      </div>

      <button
        onClick={onContinue}
        disabled={!formValid}
        className={`mt-8 w-full px-8 py-4 uppercase text-sm font-medium tracking-[1px] text-white rounded-xl transition-colors duration-300 ${
          formValid
            ? "bg-[#D87D4A] hover:bg-[#FBAF85]"
            : "bg-black/30 cursor-not-allowed"
        }`}
      >
        Continue & Pay
      </button>
    </div>
  );
}
