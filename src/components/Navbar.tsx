import React from "react";
import logo from "../assets/IMG_5434.png";
import calcImg from "../assets/cal-img.png";
import bigS from "../assets/big-sss.svg";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="z-10 container mx-auto px-4">
      <div className="py-4 flex items-center justify-between ">
        <div className="flex items-center gap-4  ">
          <a href="#">
            <div className="md:w-[170px] lg:mb-[-35px] sm:w-[80px] w-[90px]">
              <img src={logo} className="w-full z-10" alt="" />
            </div>
          </a>
          <div className="relative lg:block hidden ">
            <div className="relative  z-[2]">
              <p className="font-light text-[#5d5d5d] text-[13px]">
                TOTAL STAKED
              </p>
              <div className="total-stacked__value flex items-center gap-4">
                <div className="w-[60px]">
                  <img src={bigS} className="w-full" alt="" />
                </div>
                <div>
                  <div>
                    <p className="font-semibold">
                      {" "}
                      329.3K /<span>1.5M</span>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#5d5d5d]">
                      ≈&nbsp;$58.6M
                    </p>
                  </div>
                  <div className="h-[9px] flex rounded-[12px] bg-[#FF9800]">
                    <div
                      className="rounded-[12px] ml-auto bg-slate-950"
                      style={{ width: `calc(78.0447%)` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-2 ">
              <p className="lg:text-[15px] text-[12px] ">
                AVAILABLE LIQUIDITY:{" "}
                <span className="font-semibold ">7,474.30 sol</span>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:block hidden ml-[-100px]">
          <div className="">
            <div className="flex flex-col items-center relative">
              <p className="text-[14px] text-[#455a64]">APY</p>
              <div>
                <p className="text-[#455a64] font-semibold">≈21.06%</p>
              </div>

              <div className="absolute right-[-160px] rounded-md p-3 bg-slate-950 w-[150px]">
                <p className="text-white text-[10px]">≈21.06% Mining APY</p>
                <p className="text-white text-[10px]">+ ≈21.06% Mining DeFi</p>
              </div>
            </div>
            <div className="w-[120px] h-[120px] bg-[#FF9800] mt-1  rounded-full flex items-center justify-center z-[99]">
              <div className="w-[95px] leading-tight h-[95px] bg-[#fff] flex flex-col items-center justify-center rounded-full">
                <p className="text-[10px] text-[#455a64]">EPOCH</p>
                <p className=" font-semibold">598</p>
                <p className="text-[#455a64] font-semibold">3:38</p>
                <p className="text-[#455a64] font-semibold">23</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-end items-end">
          <div className="flex items-center gap-3">
            <div className="w-[40px] md:block hidden">
              <img src={calcImg} className="w-full" alt="" />
            </div>
            <div className="py-1 px-6 border border-[#FF9800] rounded-full  shadow-2xl">
              <button className="md:text-[15px] text-[12px] text-[#FF9800] flex items-center justify-center">
                DEFI
              </button>
            </div>
            <div className="py-1 px-6 border border-[#FF9800] rounded-full  shadow-2xl ">
              <button className="md:text-[15px] text-[12px] text-[#FF9800] flex items-center justify-center">
                VALIDATORS
              </button>
            </div>
          </div>
          <div className="mt-3">
            <div className="p-0 md:flex hidden   items-center rounded-full bg-slate-950 shadow-lg ">
              <span>
                <div className="p-1 px-4 flex gap-2 items-center  rounded-full bg-[#FF9800]">
                  <p className="text-slate-950 md:text-[15px] sm:text-[12px] text-[8px] font-light">
                    QUICKNODE RPC
                  </p>
                  <FaChevronDown className="text-slate-950 sm:text-md text-[8px]" />
                </div>
              </span>
              <div className="px-4">
                <p className="text-white md:text-[15px] sm:text-[12px] text-[8px] font-light">
                  CONNECT WALLET
                </p>
              </div>
            </div>
            <div className="md:hidden flex gap-1 flex-col justify-end">
              <button className="flex items-center gap-3 bg-[#FF9800] py-1 px-6 rounded-full">
                <p className="text-slate-950 md:text-[17px] sm:text-[14px] text-[14px] font-light">
                  {" "}
                  QUICKNODE RPC
                </p>
                <FaChevronDown className="text-slate-950 sm:text-md text-[8px]" />
              </button>
              <button className="bg-slate-950  py-1 px-3 rounded-full">
                <p className="text-white md:text-[17px] sm:text-[17px] text-[14px] font-light">
                  {" "}
                  CONNECT WALLET
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
