// import { useState, useEffect } from "react";
// import PaymentDetails from "./paymentDetails";

// interface FormData {
//   name: string;
//   email: string;
//   phoneNumber: string;
//   address: string;
//   zipcode: string;
//   city: string;
//   country: string;
//   payment?: "emoney" | "cash";
//   eMoneyNumber?: string;
//   eMoneyPin?: string;
// }

// interface CheckoutFormProps {
//   onFormValidChange: (isValid: boolean) => void;
// }

// export default function CheckoutForm({ onFormValidChange }: CheckoutFormProps) {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     phoneNumber: "",
//     address: "",
//     zipcode: "",
//     city: "",
//     country: "",
//     payment: "emoney",
//     eMoneyNumber: "",
//     eMoneyPin: "",
//   });

//   // Check form validity
//   useEffect(() => {
//     const requiredFields = [
//       formData.name,
//       formData.email,
//       formData.phoneNumber,
//       formData.address,
//       formData.zipcode,
//       formData.city,
//       formData.country,
//       formData.payment,
//       // Only require eMoney fields if payment method is emoney
//       ...(formData.payment === "emoney"
//         ? [formData.eMoneyNumber, formData.eMoneyPin]
//         : []),
//     ];

//     const isValid = requiredFields.every((val) => val?.trim() !== "");
//     onFormValidChange(isValid);
//   }, [formData, onFormValidChange]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   return (
//     <form className="lg:w-[65%] w-full bg-white rounded-xl sm:p-12 px-6 py-12">
//       <h2 className="uppercase text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-7 tracking-[1.14px]">
//         Checkout
//       </h2>

//       {/* Billing Details */}
//       <p className="text-[#D87D4A] font-bold uppercase md:mt-10 mt-6 mb-4 text-sm leading-[25px] tracking-[0.93px]">
//         Billing Details
//       </p>

//       <div className="w-full flex items-center sm:flex-row flex-col justify-between gap-6 mb-6">
//         <div className="md:w-1/2 w-full">
//           <label
//             htmlFor="name"
//             className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             placeholder="Alexei Ward"
//             value={formData.name}
//             onChange={handleChange}
//             className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//           />
//         </div>

//         <div className="md:w-1/2 w-full">
//           <label
//             htmlFor="email"
//             className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             placeholder="alexei@mail.com"
//             value={formData.email}
//             onChange={handleChange}
//             className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//           />
//         </div>
//       </div>

//       {/* Other form fields ... */}
//       <div className="w-full">
//         <div className="md:w-[48.5%] w-full">
//           <label
//             htmlFor="phoneNumber"
//             className="text-black text-sm font-bold -tracking-[0.21px]"
//           >
//             Phone Number
//           </label>
//           <input
//             type="tel"
//             id="phoneNumber"
//             placeholder="+1 202-555-0136"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="w-full border border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//           />
//         </div>
//       </div>

//       {/* Shipping */}
//       <p className="text-[#D87D4A] font-bold uppercase md:mt-10 mt-6 mb-4 text-sm leading-[25px] tracking-[0.93px]">
//         Shipping Info
//       </p>

//       <div className="w-full mb-6">
//         <label
//           htmlFor="address"
//           className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
//         >
//           Address
//         </label>
//         <input
//           type="text"
//           id="address"
//           placeholder="1137 Williams Avenue"
//           value={formData.address}
//           onChange={handleChange}
//           className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//         />
//       </div>

//       {/* ZIP and City */}
//       <div className="w-full flex items-center sm:flex-row flex-col justify-between gap-6 mb-6">
//         <div className="md:w-1/2 w-full">
//           <label
//             htmlFor="zipcode"
//             className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
//           >
//             ZIP Code
//           </label>
//           <input
//             type="text"
//             id="zipcode"
//             placeholder="10001"
//             value={formData.zipcode}
//             onChange={handleChange}
//             className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//           />
//         </div>

//         <div className="md:w-1/2 w-full">
//           <label
//             htmlFor="city"
//             className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
//           >
//             City
//           </label>
//           <input
//             type="text"
//             id="city"
//             placeholder="New York"
//             value={formData.city}
//             onChange={handleChange}
//             className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//           />
//         </div>
//       </div>

//       {/* Country */}
//       <div className="w-full">
//         <div className="md:w-[48.5%] w-full">
//           <label
//             htmlFor="country"
//             className="text-black text-sm font-bold -tracking-[0.21px]"
//           >
//             Country
//           </label>
//           <input
//             type="text"
//             id="country"
//             placeholder="United States"
//             value={formData.country}
//             onChange={handleChange}
//             className="w-full border border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
//           />
//         </div>
//       </div>

//       {/* Payment Details */}
//       <PaymentDetails formData={formData} setFormData={setFormData} />
//     </form>
//   );
// }

import { useState, useEffect } from "react";
import PaymentDetails from "./paymentDetails";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  payment?: "emoney" | "cash";
  eMoneyNumber?: string;
  eMoneyPin?: string;
}

interface CheckoutFormProps {
  onFormValidChange: (isValid: boolean) => void;
  onFormDataChange?: (formData: FormData) => void; // ✅ new prop
}

export default function CheckoutForm({
  onFormValidChange,
  onFormDataChange,
}: CheckoutFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zipcode: "",
    city: "",
    country: "",
    payment: "emoney",
    eMoneyNumber: "",
    eMoneyPin: "",
  });

  // ✅ notify parent when formData changes
  useEffect(() => {
    if (onFormDataChange) {
      onFormDataChange(formData);
    }
  }, [formData, onFormDataChange]);

  // ✅ Check form validity
  useEffect(() => {
    const requiredFields = [
      formData.name,
      formData.email,
      formData.phoneNumber,
      formData.address,
      formData.zipcode,
      formData.city,
      formData.country,
      formData.payment,
      ...(formData.payment === "emoney"
        ? [formData.eMoneyNumber, formData.eMoneyPin]
        : []),
    ];

    const isValid = requiredFields.every((val) => val?.trim() !== "");
    onFormValidChange(isValid);
  }, [formData, onFormValidChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <form className="lg:w-[65%] w-full bg-white rounded-xl sm:p-12 px-6 py-12">
      <h2 className="uppercase text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-7 tracking-[1.14px]">
        Checkout
      </h2>

      {/* Billing Details */}
      <p className="text-[#D87D4A] font-bold uppercase md:mt-10 mt-6 mb-4 text-sm leading-[25px] tracking-[0.93px]">
        Billing Details
      </p>

      <div className="w-full flex items-center sm:flex-row flex-col justify-between gap-6 mb-6">
        <div className="md:w-1/2 w-full">
          <label
            htmlFor="name"
            className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Alexei Ward"
            value={formData.name}
            onChange={handleChange}
            className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <label
            htmlFor="email"
            className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="alexei@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
          />
        </div>
      </div>

      {/* Other form fields */}
      <div className="w-full">
        <div className="md:w-[48.5%] w-full">
          <label
            htmlFor="phoneNumber"
            className="text-black text-sm font-bold -tracking-[0.21px]"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            placeholder="+1 202-555-0136"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full border border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
          />
        </div>
      </div>

      {/* Shipping */}
      <p className="text-[#D87D4A] font-bold uppercase md:mt-10 mt-6 mb-4 text-sm leading-[25px] tracking-[0.93px]">
        Shipping Info
      </p>

      <div className="w-full mb-6">
        <label
          htmlFor="address"
          className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
        >
          Address
        </label>
        <input
          type="text"
          id="address"
          placeholder="1137 Williams Avenue"
          value={formData.address}
          onChange={handleChange}
          className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
        />
      </div>

      {/* ZIP and City */}
      <div className="w-full flex items-center sm:flex-row flex-col justify-between gap-6 mb-6">
        <div className="md:w-1/2 w-full">
          <label
            htmlFor="zipcode"
            className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
          >
            ZIP Code
          </label>
          <input
            type="text"
            id="zipcode"
            placeholder="10001"
            value={formData.zipcode}
            onChange={handleChange}
            className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <label
            htmlFor="city"
            className="text-black text-sm font-bold -tracking-[0.21px] mb-2"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            placeholder="New York"
            value={formData.city}
            onChange={handleChange}
            className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
          />
        </div>
      </div>

      {/* Country */}
      <div className="w-full">
        <div className="md:w-[48.5%] w-full">
          <label
            htmlFor="country"
            className="text-black text-sm font-bold -tracking-[0.21px]"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            placeholder="United States"
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
          />
        </div>
      </div>

      {/* Payment Details */}
      <PaymentDetails formData={formData} setFormData={setFormData} />
    </form>
  );
}
