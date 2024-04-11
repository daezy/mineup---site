import alphaDev from "../assets/IMG_5460 (1).png";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-slate-950">
      <div className="container mx-auto px-4 ">
        <div className="flex md:flex-row flex-col items-center border-t border-white  md:justify-between justify-center py-5">
          <div className="md:block flex flex-col items-center justify-center">
            <p className="pb-5 text-white">Backed By</p>
            <div className="md:block flex flex-col items-center justify-center">
              <div className="w-[200px]">
                <img src={alphaDev} className="w-full" alt="" />
              </div>
              <div className="mt-7 text-[11px] text-white">
                &copy; Copyright 2024 Mine up. All rights reserved.
              </div>
            </div>
          </div>
          <div className="md:mt-0 mt-5 text-white  md:block flex flex-col items-center justify-center">
            <p>Contact</p>
            <div className="flex gap-5 items-center mt-2 ">
              <div className="p-3 bg-white rounded-full">
                <FaTelegramPlane className="text-[20px] text-slate-950" />
              </div>
              <div className="p-3 bg-white rounded-full">
                <FaXTwitter className="text-[20px] text-slate-950" />
              </div>
              <div className="p-3 bg-white rounded-full">
                <FaDiscord className="text-[20px] text-slate-950" />
              </div>
            </div>
            <div className="mt-7 text-[11px] text-white">
              Documentation | Pool Info | Download Mine up Logos
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
