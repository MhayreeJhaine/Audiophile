import React from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
// import checkmark from "/check-mark.png";
// import headphone from "/headphone-2.png";
import { DialogTitle } from "@radix-ui/react-dialog";

interface OrderCompletedProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function OrderCompleted({ open, onOpenChange }: OrderCompletedProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="fixed inset-0 flex items-center justify-center bg-white rounded-lg shadow-xl h-fit my-auto sm:w-[540px] w-[320px] mx-auto sm:p-8 p-4">
        <div className="w-full">
          <img src={'/checkmark.png'} alt="check-mark" />

          <DialogTitle className="sm:my-6 my-4 uppercase md:text-[32px] text-[24px] font-bold md:leading-9 tracking-[1.14px]">
            thank you <br /> for your order
          </DialogTitle>

          <p className="font-medium text-[15px] leading-[25px] text-black/50">
            You will receive an email confirmation shortly.
          </p>

          <div className="flex sm:flex-row flex-col rounded-xl w-full mt-6 mb-10 border overflow-hidden">
            <div className="sm:w-[55%] w-full sm:p-6 p-4 bg-[#f1f1f1] sm:rounded-tl-xl sm:rounded-bl-xl sm:rounded-none">
              <div className="flex items-start gap-6 justify-between border-b pb-2">
                <div className="flex items-center justify-center w-[50px] h-[50px]">
                  <img src={'/headphone'} alt="headphones" className="w-8 h-8" />
                </div>
                <div className="flex flex-col text-center gap-1">
                  <h3 className="uppercase font-bold text-[15px] leading-[25px]">
                    xx99 mk ii
                  </h3>
                  <p className="font-bold text-sm text-black/50 leading-[25px]">
                    $2,999
                  </p>
                </div>
                <p className="font-bold text-sm text-black/50 leading-[25px]">
                  x1
                </p>
              </div>
              <div className="mt-3">
                <p className="text-black/50 text-center text-xs">
                  and 2 other item(s)
                </p>
              </div>
            </div>

            <div className="sm:w-[45%] w-full flex flex-col justify-center sm:rounded-tr-xl sm:rounded-br-xl sm:rounded-none bg-black p-6 sm:h-auto h-full">
              <p className="text-white/50 uppercase text-sm leading-[25px]">
                grand total
              </p>
              <h3 className="mt-2 text-white font-bold text-lg">$5,446</h3>
            </div>
          </div>

          <DialogClose asChild>
            <Link
              to="/"
              className="bg-[#D87D4A] mt-4 w-full text-center text-white px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300 block"
            >
              Back to home
            </Link>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}
