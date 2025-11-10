// export default function PaymentDetails() {
//   return (
//     <>
//       <p className="text-[#D87D4A] font-bold uppercase md:mt-10 mt-6 mb-4 text-sm leading-[25px] tracking-[0.93px]">
//         Payment Details
//       </p>

//       <div className="flex items-start sm:flex-row flex-col justify-between gap-8">
//         <p className="capitalize text-black text-sm font-bold -tracking-[0.21px]">
//           Payment Method
//         </p>

//         <div className="flex flex-col items-center gap-4 sm:w-1/2 w-full">
//           <label className="flex items-center p-4 border border-[#cfcfcf] w-full rounded-xl gap-4 cursor-pointer transition-colors duration-300 hover:border-orange has-checked:border-orange">
//             <input
//               type="radio"
//               name="payment"
//               value="emoney"
//               className="appearance-none w-5 h-5 border border-[#cfcfcf] rounded-full grid place-content-center
//                 before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:scale-0
//                 before:transition-transform before:duration-200 checked:before:scale-100 checked:before:bg-[#D87D4A]"
//             />
//             <span className="text-black text-sm font-bold -tracking-[0.21px]">
//               e-Money
//             </span>
//           </label>

//           <label className="flex items-center p-4 border border-[#cfcfcf] w-full rounded-xl gap-4 cursor-pointer transition-colors duration-300 hover:border-orange has-checked:border-orange">
//             <input
//               type="radio"
//               name="payment"
//               value="cash"
//               className="appearance-none w-5 h-5 border border-[#cfcfcf] rounded-full grid place-content-center
//                 before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:scale-0
//                 before:transition-transform before:duration-200 checked:before:scale-100 checked:before:bg-[#D87D4A]"
//             />
//             <span className="text-black text-sm font-bold -tracking-[0.21px]">
//               Cash on Delivery
//             </span>
//           </label>
//         </div>
//       </div>

//       <div className="w-full flex items-center sm:flex-row flex-col justify-between gap-6 mt-6">
//         <div className="md:w-1/2 w-full">
//           <label
//             htmlFor="eMoneyNumber"
//             className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
//           >
//             e-Money Number
//           </label>
//           <input
//             type="number"
//             id="eMoneyNumber"
//             placeholder="238521993"
//             className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//           />
//         </div>

//         <div className="md:w-1/2 w-full">
//           <label
//             htmlFor="eMoneyPin"
//             className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
//           >
//             e-Money PIN
//           </label>
//           <input
//             type="number"
//             id="eMoneyPin"
//             placeholder="6891"
//             className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

interface PaymentDetailsProps {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
}

export default function PaymentDetails({
  formData,
  setFormData,
}: PaymentDetailsProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <>
      <p className="text-[#D87D4A] font-bold uppercase md:mt-10 mt-6 mb-4 text-sm leading-[25px] tracking-[0.93px]">
        Payment Details
      </p>

      <div className="flex items-start sm:flex-row flex-col justify-between gap-8">
        <p className="capitalize text-black text-sm font-bold -tracking-[0.21px]">
          Payment Method
        </p>

        <div className="flex flex-col items-center gap-4 sm:w-1/2 w-full">
          <label className="flex items-center p-4 border border-[#cfcfcf] w-full rounded-xl gap-4 cursor-pointer transition-colors duration-300 hover:border-[#D87D4A]">
            <input
              type="radio"
              name="payment"
              value="emoney"
              checked={formData.payment === "emoney"}
              onChange={() => setFormData({ ...formData, payment: "emoney" })}
              className="appearance-none w-5 h-5 border border-[#cfcfcf] rounded-full grid place-content-center 
                before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:scale-0 
                before:transition-transform before:duration-200 checked:before:scale-100 checked:before:bg-[#D87D4A]"
            />
            <span className="text-black text-sm font-bold -tracking-[0.21px]">
              e-Money
            </span>
          </label>

          <label className="flex items-center p-4 border border-[#cfcfcf] w-full rounded-xl gap-4 cursor-pointer transition-colors duration-300 hover:border-[#D87D4A]">
            <input
              type="radio"
              name="payment"
              value="cash"
              checked={formData.payment === "cash"}
              onChange={() => setFormData({ ...formData, payment: "cash" })}
              className="appearance-none w-5 h-5 border border-[#cfcfcf] rounded-full grid place-content-center 
                before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:scale-0 
                before:transition-transform before:duration-200 checked:before:scale-100 checked:before:bg-[#D87D4A]"
            />
            <span className="text-black text-sm font-bold -tracking-[0.21px]">
              Cash on Delivery
            </span>
          </label>
        </div>
      </div>

      {formData.payment === "emoney" && (
        <div className="w-full flex items-center sm:flex-row flex-col justify-between gap-6 mt-6">
          <div className="md:w-1/2 w-full">
            <label
              htmlFor="eMoneyNumber"
              className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
            >
              e-Money Number
            </label>
            <input
              type="number"
              id="eMoneyNumber"
              placeholder="238521993"
              value={formData.eMoneyNumber || ""}
              onChange={handleChange}
              className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
            />
          </div>

          <div className="md:w-1/2 w-full">
            <label
              htmlFor="eMoneyPin"
              className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
            >
              e-Money PIN
            </label>
            <input
              type="number"
              id="eMoneyPin"
              placeholder="6891"
              value={formData.eMoneyPin || ""}
              onChange={handleChange}
              className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
            />
          </div>
        </div>
      )}
    </>
  );
}
