import React, { useState } from "react";
import bigS from "../assets/big-sss.svg";
import jsol from "../assets/jsol.png";
import smart from "../assets/smart-validator.svg";
import upImg from "../assets/upAndOthers.svg";
import frog from "../assets/frog.svg";
import shark from "../assets/shark.svg";
import alphaDev from "../assets/IMG_5460.png";
import libraDark from "../assets/libra_dark.png";
import cyberscope from "../assets/raydium-removebg-preview.png";
import stake from "../assets/cyberscope.png";
import solImg from "../assets/solSolImg.svg";
import dexScreener from "../assets/dex-screener-removebg-preview.png";

import profit from "../assets/profit.svg";
import { ImYoutube2 } from "react-icons/im";
import { FaChevronUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";

const HomePage = () => {
  const [chooseStake, setChooseStake] = useState<Boolean>(true);
  return (
    <div className="home-section bg-slate-950 lg:mt-[-42px] pb-10">
      <div className="container mx-auto px-4">
        <div className="relative pt-8 lg:hidden flex items-center justify-center ">
          <div className="relative  z-[2]">
            <p className="font-light text-[#fff] text-[13px]">TOTAL MINED</p>
            <div className="total-stacked__value flex items-center gap-4">
              <div className="w-[60px]">
                <img src={bigS} className="w-full" alt="" />
              </div>
              <div>
                <div>
                  <p className="font-semibold text-[#fff]">
                    {" "}
                    329.3K /<span>1.5M</span>
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#fff]">≈&nbsp;$58.6M</p>
                </div>
                <div className="h-[9px] flex rounded-[12px] bg-[#FF9800]">
                  <div
                    className="rounded-[12px] ml-auto bg-[#fff]"
                    style={{ width: `calc(78.0447%)` }}
                  ></div>
                </div>
              </div>
            </div>
            <p className="lg:text-[18px] mt-1 text-[#fff] text-[12px] ">
              AVAILABLE LIQUIDITY:{" "}
              <span className="font-semibold ">7,474.30 sol</span>
            </p>
          </div>
        </div>
        <div className="lg:hidden mt-8   flex items-center justify-center">
          <div className="">
            <div className="flex flex-col items-center relative">
              <p className="text-[14px] text-[#fff]">APY</p>
              <div>
                <p className="text-[#fff] font-semibold">≈21.06%</p>
              </div>

              <div className=" rounded-md p-3 flex items-center gap-2 ">
                <p className="text-white text-[10px]">≈21.06% mining APY</p>
                <p className="text-white text-[10px]">+ ≈21.06% mining DeFi</p>
              </div>

              <div className="lg:w-[120px] w-[90px]  lg:h-[120px] h-[90px] bg-[#FF9800] mt-1  rounded-full flex items-center justify-center z-[99]">
                <div className="lg:w-[95px] w-[70px]  leading-tight lg:h-[95px] h-[70px] bg-[#fff] flex flex-col items-center justify-center rounded-full">
                  <p className="text-[10px] text-[#455a64]">EPOCH</p>
                  <p className=" font-semibold lg:text-[17px] text-[12px]">
                    598
                  </p>
                  <p className="text-[#455a64] lg:text-[17px] text-[12px] font-semibold">
                    3:38
                  </p>
                  <p className="text-[#455a64] lg:text-[17px] text-[12px] font-semibold">
                    23
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex block items-center justify-between lg:pt-20 pt-2 relative">
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-col justify-center items-center">
              <p className="text-white md:text-[16px] text-[12px]">
                MINE YOUR SOL WITH MineUp: EASY{" "}
              </p>
              <p className="text-white md:text-[16px] text-[12px]">
                TO USE · RELIABLE · EFFICIENT
              </p>
            </div>
            <div className="pt-10">
              <img src={smart} alt="" />
            </div>
          </div>
          <div>
            <div className="bg-[#FF9800]  w-[100%] shadow-lg lg:p-3 p-1 border border-white rounded-lg">
              <a href="">
                <div className="flex md:flex-row gap-2 items-center justify-center">
                  <ImYoutube2 className="text-[50px] text-black" />

                  <p className="text-[14px]">HOW TO SHAKE</p>
                </div>
              </a>
            </div>
            <div className="bg-white lg:block hidden p-3 shadow-lg rounded-lg mt-6">
              <div>
                <p className="text-[15px] font-semibold mb-2">
                  MORE YIELD WITH <span className="text-[#3479a9]">DEFI</span>{" "}
                </p>
                <div className="flex gap-3 items-center">
                  <div className="w-[30px]">
                    <img src={upImg} alt="" className="w-full" />
                  </div>
                  <p className="text-[10px] w-[120px] leading-none text-[#455a64]">
                    Add liquidity to earn additional yield as a percentage of
                    trading volume
                  </p>
                </div>
                <div className="p-2 bg-[#3479a9] rounded-full mt-2">
                  <button className="flex items-center justify-center text-[14px] text-white">
                    5% AND HIGHER YIELD
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-white p-3  w-[100%] shadow-lg rounded-lg mt-6">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[12px] text-gray-500 font-[500] ">
                    PRICE (SOLANA) (SOL)
                  </p>
                  <div className="w-[22px]">
                    <img src={frog} className="w-full" alt="" />
                  </div>
                </div>
                <div className="flex pb-1 border-b border-gray-400 items-center justify-between my-3">
                  <div className="">
                    <p className="text-[25px] font-semibold">$180.84</p>
                  </div>
                  <div className="flex  items-center gap-1 p-1 rounded-md bg-green-500">
                    <FaChevronUp className="text-[#fff] text-[13px]" />

                    <p className="text-[13px]  leading-none text-[#fff]">
                      1.88%
                    </p>
                  </div>
                </div>
                <div className="flex  justify-between">
                  <p className="text-[12px]">LAST 24H +$2.93</p>
                  <p className="text-[12px]">$3.12B</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-3 lg:block hidden shadow-lg rounded-lg mt-6">
              <div>
                <p className="text-[15px] font-semibold mb-2">
                  MORE YIELD WITH <span className="text-[#3479a9]">DEFI</span>{" "}
                </p>
                <div className="flex gap-3 items-center">
                  <div className="w-[30px]">
                    <img src={upImg} alt="" className="w-full" />
                  </div>
                  <p className="text-[10px] w-[120px] leading-none text-[#455a64]">
                    Add liquidity to earn additional yield as a percentage of
                    trading volume
                  </p>
                </div>
                <div className="p-2 bg-[#3479a9] rounded-full mt-2">
                  <button className="flex items-center justify-center text-[14px] text-white">
                    5% AND HIGHER YIELD
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 lg:block flex justify-center py-2 lg:mt-0 mt-3 lg:absolute top-5 rounded-full bg-[#ffffff1f] right-0">
            <p className="text-white ">
              PRIORITY FEE:
              <span className="text-green-400"> FAST</span>
            </p>
          </div>
          <div className="lg:w-[50%] lg:mt-0 mt-5  ">
            <div className="flex items-center w-full ">
              <button
                className={`${
                  chooseStake ? "bg-[#FF9800]" : "bg-[#3479a9]"
                }  p-3 w-[50%] shadow-lg rounded-tl-lg`}
                onClick={() => setChooseStake(true)}
              >
                <h2 className="text-[25px] font-semibold">MINE</h2>
              </button>
              <button
                className={`${
                  !chooseStake ? "bg-[#FF9800]" : "bg-[#3479a9]"
                }  p-3 w-[50%] shadow-lg rounded-tr-lg`}
                onClick={() => setChooseStake(false)}
              >
                <h2 className="text-[25px] text-white font-semibold">UNMINE</h2>
              </button>
            </div>
            {chooseStake ? (
              <div className="bg-[#f8f8f9] p-4 pb-[50px] shadow-lg rounded-b-[30px] relative">
                <p className="text-[12px]">
                  For mining through MineUp, you receive rewards of ~7.41%. Use
                  our Profit Calculator for a detailed estimate.
                </p>
                <div className="mt-4">
                  <p className="text-[#455a64] text-[13px] font-semibold">
                    AVAILABLE 0 SOL
                  </p>
                  <div className="p-3 rounded-lg bg-white">
                    <div>
                      <p className="text-gray-500 text-[13px]">
                        AMOUNT TO MINE
                      </p>
                    </div>
                    <div className="flex items-center gap-4 relative">
                      <div className="w-[70%]">
                        <input
                          placeholder="0.0"
                          type="text"
                          className="w-full font-semibold  text-[25px] focus:outline-none"
                        />
                      </div>
                      <button className="p-1 bg-gray-300 text-[14px]">
                        MAX
                      </button>
                      <div className="w-[50px]">
                        <img src={bigS} alt="" className="w-full" />
                      </div>
                      <p>SOL</p>
                      <div className="absolute bottom-[-43px] left-[45%] p-3 bg-[#FF9800] rounded-full">
                        <FaArrowDown className="text-white text-[30px]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-gray-500 text-[13px]">MINE UP</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[25px] font-semibold text-gray-500">
                        0.0
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-[50px]">
                          <img src={jsol} alt="" className="w-full" />
                        </div>
                        <p>MINE UP</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-row flex-col gap-6">
                    <div className="overflow-x-auto">
                      <table className="table-auto">
                        <tbody>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r px-2 py-1">
                              SOL to mine:
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l px-2 py-1">
                              SOL
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r px-2 py-1">
                              Network Fee:
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l px-2 py-1">
                              0.00001 SOL
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r font-semibold px-2 py-1">
                              Subtotal:
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l font-semibold px-2 py-1">
                              0 SOL
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r  px-2 py-1">
                              MINE UP (1 SOL = 0.85284):
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l  px-2 py-1">
                              0 MINE UP
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r px-2 py-1">
                              MineUp Fee (0.00%):
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l  px-2 py-1">
                              0 MINE UP
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r font-semibold px-2 py-1">
                              YOU GET (0.00%):
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l font-semibold px-2 py-1">
                              0 MINE UP
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mb-20">
                      <p className="text-[16px] font-semibold ">How To Mine:</p>
                      <ul>
                        <li className="text-[12px]">• Connect your wallet</li>
                        <li className="text-[12px]">
                          • Enter the amount of SOL you want to mine
                        </li>
                        <li className="text-[12px]">• Click MINE NOW</li>
                        <li className="text-[12px]">
                          • Confirm the transaction in your wallet
                        </li>
                        <li className="text-[12px]">
                          • Done, you’ve mined your SOL!
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 mt-20 right-[10px]">
                  <p className="text-[#455a64] text-[13px] ">
                    1 SOL ~ 0.85284 MINE UP
                  </p>
                  <button className="bg-[#FF9800] px-4 py-2 text-white text-[16px] rounded-full">
                    CONNECT WALLET
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#f8f8f9] p-4 pb-[50px] shadow-lg rounded-b-[30px] relative">
                <p className="text-[12px]">
                  PLEASE NOTE: There is a fee charged by the Solana blockchain
                  for unmining. Please refer to the table below.
                </p>
                <div className="mt-4">
                  <p className="text-[#455a64] text-[13px] font-semibold">
                    AVAILABLE 0 SOL
                  </p>
                  <div className="p-3 rounded-lg bg-white">
                    <div>
                      <p className="text-gray-500 text-[13px]">
                        AMOUNT TO MINE
                      </p>
                    </div>
                    <div className="flex items-center gap-3 relative">
                      <div className="w-[65%]">
                        <input
                          placeholder="0.0"
                          type="text"
                          className="w-full font-semibold  text-[25px] focus:outline-none"
                        />
                      </div>
                      <button className="p-1 bg-gray-300 text-[14px]">
                        MAX
                      </button>
                      <div className="w-[50px]">
                        <img src={jsol} alt="" className="w-full" />
                      </div>
                      <div>
                        <p className="">MINE UP</p>
                      </div>
                      <div className="absolute bottom-[-43px] left-[45%] p-3 bg-[#FF9800] rounded-full">
                        <FaArrowDown className="text-white text-[30px]" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <p className="text-gray-500 text-[13px]">MINE UP</p>
                    <div className="flex items-center justify-between">
                      <p className="text-[25px] font-semibold text-gray-500">
                        0.0
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="w-[50px]">
                          <img src={bigS} alt="" className="w-full" />
                        </div>
                        <p>SOL</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex  gap-6">
                    <div className="overflow-x-auto">
                      <table className="table-auto">
                        <tbody>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r px-2 py-1">
                              SOL to mine:
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l px-2 py-1">
                              SOL
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r px-2 py-1">
                              Network Fee:
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l px-2 py-1">
                              0.00001 SOL
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r font-semibold px-2 py-1">
                              Subtotal:
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l font-semibold px-2 py-1">
                              0 SOL
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r  px-2 py-1">
                              MINE UP (1 SOL = 0.85284):
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l  px-2 py-1">
                              0 MINE UP
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r px-2 py-1">
                              MineUp Fee (0.00%):
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l  px-2 py-1">
                              0 MINE UP
                            </td>
                          </tr>
                          <tr>
                            <td className="border-b text-[14px] text-[#455a64] border-r font-semibold px-2 py-1">
                              YOU GET (0.00%):
                            </td>
                            <td className="border-b text-[14px] text-[#455a64] border-l font-semibold px-2 py-1">
                              0 MINE UP
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-5 mt-20 right-[10px]">
                  <button className="bg-[#455a64] px-4 py-2 text-white text-[16px] rounded-full">
                    CONNECT WALLET
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="lg:flex block   justify-between items-center">
            <div className="shadow-lg flex items-center gap-4 bg-[#f8f8f9] rounded-[15px] p-4">
              <div>
                <div className="w-[40px] ">
                  <img src={shark} className="w-full" alt="" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-slate-950">
                  YOU DON’T HAVE ANY SOL YET?
                </p>
                <p className="text-slate-950 text-[10px]">
                  {" "}
                  Exchange any cryptocurrency to SOL at a partner <br /> DEX.
                </p>
              </div>
            </div>
            <div className="shadow-lg flex lg:mt-0 mt-5 items-center gap-4 bg-[#f8f8f9] rounded-[15px] p-4">
              <div>
                <div className="w-[40px] ">
                  <img src={profit} className="w-full" alt="" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-slate-950">
                  YOU DON’T HAVE ANY CRYPTOCURRENCY?
                </p>
                <p className="text-slate-950 text-[10px]">
                  {" "}
                  Buy some at an exchange, like Coinbase or Binance, <br /> and
                  transfer it to your wallet.
                </p>
              </div>
            </div>
            <div className="shadow-lg flex lg:mt-0 mt-5 items-center gap-4 bg-[#f8f8f9] rounded-[15px] p-4">
              <div>
                <div className="w-[40px] ">
                  <img src={solImg} className="w-full" alt="" />
                </div>
              </div>
              <div>
                <p className="font-semibold text-slate-950">
                  YOU DON’T HAVE A SOLANA WALLET?
                </p>
                <p className="text-slate-950 text-[10px]">
                  {" "}
                  It’s easy to use one as an extension of Chrome or Firefox,
                  <br /> for example Phantom.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[40px] flex flex-col items-center justify-center">
            <button className="bg-[#FF9800] px-20 py-2 text-[#fff] text-[16px] rounded-full">
              FAQ
            </button>
            <div>
              <p className="text-[11px] text-white underline mt-2">
                MORE FAQ IN THE MineUp DOCUMENTATION
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[60px]">
          <div className="bg-white p-6 mb-[52px] shadow-2xl rounded-lg">
            <div className="border-b border-[#455a64]">
              <p className="text-[#FF9800] font-semibold pb-1">
                WHAT IS "MINING"?
              </p>
            </div>
            <div className="mt-3">
              <p className="pb-1 text-[14px]">
                By mining your SOL tokens, you help secure the network and earn
                rewards while doing so. You can mine by delegating your tokens
                to validators who process transactions and run the Solana
                network.
              </p>
              <p className="text-[14px]">
                Read more at{" "}
                <span className="underline">
                  https://docs.solana.com/mining
                </span>
              </p>
            </div>
          </div>
          <div className="bg-white p-6 mb-[52px] shadow-2xl rounded-lg">
            <div className="border-b border-[#455a64]">
              <p className="text-[#FF9800] font-semibold pb-1">
                WHAT IS A MINE POOL?
              </p>
            </div>
            <div className="mt-3">
              <p className="pb-1 text-[14px]">
                Here's what Solana Docs have to say on Mine Pools: "This
                on-chain program pools together SOL to be staked by a manager,
                allowing SOL holders to mine and earn rewards without managing
                mines. Users deposit SOL in exchange for SPL tokens (mining
                derivatives) that represent their ownership in the mine pool.
                The pool manager stakes deposited SOL according to their
                strategy, perhaps using a variant of an auto-delegation bot as
                described above.
              </p>
            </div>
          </div>
          <div className="bg-white p-6 mb-[52px] shadow-2xl rounded-lg">
            <div className="border-b border-[#455a64]">
              <p className="text-[#FF9800] font-semibold pb-1">
                HOW DO I GET MY REWARDS?
              </p>
            </div>
            <div className="mt-3">
              <p className="pb-1 text-[14px]">
                Your MINE UP represents your share in the pool’s total mine,
                which grows constantly as rewards are accrued. This reflects in
                the MINE UP-SOL exchange rate which will be used to calculate
                the SOL you get back when you unmine. Total MINE UP price growth
                is equal to the pool’s APY.
              </p>
              <p className="text-[14px]">
                Read more at{" "}
                <span className="underline">
                  https://docs.solana.com/mining
                </span>
              </p>
            </div>
          </div>
          <div className="bg-white p-6 mb-[52px] shadow-2xl rounded-lg">
            <div className="border-b border-[#455a64]">
              <p className="text-[#FF9800] font-semibold pb-1">
                WHO IS A DELEGATOR?
              </p>
            </div>
            <div className="mt-3">
              <p className="pb-1 text-[14px]">
                Any user who delegates their SOL to a Validator (either directly
                or via Mine Pool), enabling them to validate new blocks and keep
                the network alive, becomes a Delegator. Anyone who has some SOL
                in their wallet may delegate it – and earn rewards by doing so
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[60px] ">
          <div>
            <div className="flex items-center justify-center">
              <div className="py-2 px-4 bg-[#FF9800] rounded-full ">
                <h2 className="text-[#fff] md:text-[21px] text-[15px]">
                  OUR INVESTORS AND BACKERS
                </h2>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-[35px]">
              <div className="p-7    bg-[#] rounded-2xl">
                <div className="md:w-[250px]  w-[150px]">
                  <img src={alphaDev} className="w-full" alt="" />
                </div>
              </div>

              <div className="p-7    flex items-center ">
                <div className=" lg:w-[250px] w-[200px]  ">
                  <img src={dexScreener} className="w-full" alt="" />
                </div>
              </div>
              <div className="p-7    rounded-2xl">
                <div className="md:w-[200px] w-[150px]">
                  <img src={stake} className="w-full" alt="" />
                </div>
              </div>
              <div className="p-7      rounded-2xl flex items-center">
                <div className="md:w-[200px] w-[150px]">
                  <img src={cyberscope} className="w-full" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
