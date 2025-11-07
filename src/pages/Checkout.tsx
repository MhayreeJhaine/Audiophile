import { Link } from "react-router-dom";
import React, { useState } from "react";
import { OrderCompleted } from "@/components/OrderCompleted";

// import headphone2 from "/headphone-2.png";
// import headphone3 from "/headphone-3.png";
// import earphone from "/earphone-1.png";

const Checkout = () => {
    const [openDialog, setOpenDialog] = useState<boolean>(false);

    return (
        <main className="bg-[#f1f1f1]">
            <section className="container mx-auto px-4">
                <Link
                    to="/"
                    className="py-12 block w-fit text-black/50 hover:text-[#D87D4A]"
                >
                    Go Back
                </Link>

                <section className="flex items-start lg:flex-row flex-col justify-between gap-[30px] pb-20">
                    <form className="lg:w-[65%] w-full bg-white rounded-xl sm:p-12 px-6 py-12">
                        <h2 className="uppercase text-black sm:text-[32px] text-[24px] font-bold sm:leading-9 leading-[28px] tracking-[1.14px]">
                            Checkout
                        </h2>

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
                                    className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
                                />
                            </div>
                        </div>

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
                                    className="w-full border border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
                                />
                            </div>
                        </div>

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
                                className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
                            />
                        </div>

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
                                    className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
                                />
                            </div>
                        </div>

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
                                    className="w-full border border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
                                />
                            </div>
                        </div>

                        <p className="text-[#D87D4A] font-bold uppercase md:mt-10 mt-6 mb-4 text-sm leading-[25px] tracking-[0.93px]">
                            Payment Details
                        </p>

                        <div className="flex items-start sm:flex-row flex-col justify-between gap-8">
                            <p className="capitalize text-black text-sm font-bold -tracking-[0.21px]">
                                Payment Method
                            </p>

                            <div className="flex flex-col items-center gap-4 sm:w-1/2 w-full">
                                <label className="flex items-center p-4 border border-[#cfcfcf] w-full rounded-xl gap-4 cursor-pointer transition-colors duration-300 hover:border-[#D87D4A] has-[:checked]:border-[#D87D4A]">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="emoney"
                                        className="appearance-none w-5 h-5 border border-[#cfcfcf] rounded-full grid place-content-center 
                                            before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:scale-0 
                                            before:transition-transform before:duration-200 checked:before:scale-100 checked:before:bg-[#D87D4A]"
                                    />
                                    <span className="text-black text-sm font-bold -tracking-[0.21px]">
                                        e-Money
                                    </span>
                                </label>

                                <label className="flex items-center p-4 border border-[#cfcfcf] w-full rounded-xl gap-4 cursor-pointer transition-colors duration-300 hover:border-[#D87D4A] has-[:checked]:border-[#D87D4A]">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="cash"
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
                                    className="border w-full border-[#CFCFCF] p-4 rounded-xl mt-2 outline-none focus:ring-[#D87D4A] focus:ring-1"
                                />
                            </div>
                        </div>
                    </form>

                    {/* Order Summary */}
                    <div className="lg:w-[35%] w-full sm:p-8 px-4 py-8 bg-white rounded-xl">
                        <h3 className="uppercase font-bold mb-8 sm:text-lg text-base text-black tracking-[1.29px]">
                            Summary
                        </h3>

                        <div className="flex flex-col gap-6">
                            {[ 
                                { img: "/headphone-2.png", name: "XX99 MK II", price: 2999, qty: 1 },
                                { img: "headphone-3.png", name: "XX59", price: 899, qty: 2 },
                                { img: "/earphone-1.png", name: "YX1", price: 599, qty: 1 },
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex items-center justify-center bg-[#f1f1f1] w-16 h-16 p-3 rounded-xl">
                                        <img src={item.img} alt={item.name} className="w-9" />
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
                                            x{item.qty}
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
                                <h3 className="font-bold text-lg text-black">$5,396</h3>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="uppercase text-black/50 font-medium text-[15px] leading-[25px]">
                                    Shipping
                                </p>
                                <h3 className="font-bold text-lg text-black">$50</h3>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="uppercase text-black/50 font-medium text-[15px] leading-[25px]">
                                    VAT (included)
                                </p>
                                <h3 className="font-bold text-lg text-black">$1,079</h3>
                            </div>

                            <div className="flex items-center justify-between mt-4">
                                <p className="uppercase text-black/50 font-medium text-[15px] leading-[25px]">
                                    Grand Total
                                </p>
                                <h3 className="font-bold text-lg text-[#D87D4A]">$5,446</h3>
                            </div>
                        </div>

                        <button
                            onClick={() => setOpenDialog(true)}
                            className="bg-[#D87D4A] mt-8 w-full text-white px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300"
                        >
                            Continue & Pay
                        </button>
                    </div>
                </section>
            </section>

            <OrderCompleted open={openDialog} onOpenChange={setOpenDialog} />
        </main>
    );
};

export default Checkout;
