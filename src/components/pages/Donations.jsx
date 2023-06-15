import React from "react";

import { children, hope, littleboy } from "../../assets";

import { HiOutlineSpeakerphone } from "react-icons/hi";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaHandsHelping } from "react-icons/fa";
import Footer from "../Footer";

const Donations = () => {
  return (
    <div className="flex flex-col justify-center mx-auto w-full">
      <div className="flex justify-center mx-auto my-8 w-full">
        <div className="flex">
          <div className="h-[248px] flex justify-center items-center mr-2 my-auto">
            <img
              src={children}
              alt="children"
              className="w-[110px] h-[80%] rounded-tl-[40px] rounded-br-[30px] object-cover"
            />
          </div>
          <div className="ml-1">
            <img
              src={hope}
              alt="hope"
              className="w-[100px] h-[120px] rounded-tl-[30px] rounded-br-[20px] pb-1 object-cover"
            />
            <img
              src={littleboy}
              alt="littleboy"
              className="w-[100px] h-[120px] rounded-tr-[30px] rounded-bl-[20px] pt-1 object-cover"
            />
          </div>
        </div>
        <div className="w-[50%] ml-4">
          <h2 className="text-center font-semibold text-gray-600 text-xl font-poppins">
            Have A Positive Impact On A Life
          </h2>

          <p className="leading-relaxed text-base font-poppins text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            repudiandae adipisci, laboriosam consectetur, aspernatur suscipit
            deserunt, ipsum provident ipsam cumque rerum minima assumenda magnam
            illo officiis inventore. Earum, recusandae consequatur.
            <br />
          </p>

          <p className="leading-relaxed text-base font-poppins text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            repudiandae adipisci, laboriosam consectetur, aspernatur suscipit
            deserunt, ipsum provident ipsam cumque rerum minima assumenda magnam
            illo officiis inventore. Earum, recusandae consequatur.
          </p>
        </div>
      </div>

      <div className="flex justify-center mx-auto my-2 w-full">
        <div className="flex flex-col justify-center items-center mx-auto">
          <h2 className="text-center font-semibold text-gray-600 text-xl font-poppins">
            Get Involved
          </h2>
          <span className="leading-relaxed text-center text-base font-poppins text-zinc-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            repudiandae adipisci, laboriosam consectetur.
          </span>
          <div className="flex justify-center my-3">
            <div className="w-[300px] h-[300px]">
              <div className="bg-slate-100 flex flex-col items-center justify-center p-2 w-full h-[54%]">
                <HiOutlineSpeakerphone className="text-4xl font-light mb-2" />
                <h5 className="text-center font-semibold text-gray-600 text-base font-poppins">
                  VOLUNTEERING
                </h5>
              </div>
              <div className="bg-stone-800 p-2 h-[46%]">
                <span className="leading-normal text-sm font-poppins text-zinc-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  repudiandae adipisci, laboriosam consectetur, aspernatur
                  suscipit deserunt.
                </span>
              </div>
            </div>
            <div className="w-[300px] h-[300px] mx-6">
              <div className="bg-slate-100 flex flex-col items-center justify-center p-2 w-full h-[54%]">
                <AiFillDollarCircle className="text-4xl font-light mb-2" />
                <h5 className="text-center font-semibold text-gray-600 text-base font-poppins">
                  DONATING
                </h5>
              </div>
              <div className="bg-[#2b2bffd7] p-2 h-[46%]">
                <span className="leading-normal text-sm font-poppins text-zinc-900">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  repudiandae adipisci, laboriosam consectetur, aspernatur
                  suscipit deserunt.
                </span>
              </div>
            </div>
            <div className="w-[300px] h-[300px]">
              <div className="bg-slate-100 flex flex-col items-center justify-center p-2 w-full h-[54%]">
                <FaHandsHelping className="text-4xl font-light mb-2" />
                <h5 className="text-center font-semibold text-gray-600 text-base font-poppins">
                  SUPPORTING
                </h5>
              </div>
              <div className="bg-stone-800 p-2 h-[46%]">
                <span className="leading-normal text-sm font-poppins text-zinc-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  repudiandae adipisci, laboriosam consectetur, aspernatur
                  suscipit deserunt.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center mx-auto bg-slate-100 p-6">
        <form action="" className="bg-white w-[70%] py-2 px-4">
          <h2 className="font-semibold text-gray-800 text-xl font-poppins">
            Make A Donation
          </h2>
          <span className="leading-relaxed text-base font-poppins text-zinc-600">
            We want to take a moment to say how proud we are of you. By choosing
            to donate, you are showing that you have a big heart and a desire to
            make a positive impact in the world. Your generosity is not only
            appreciated but also inspiring to others. Your donation will make a
            difference in the lives of those in need and bring hope and
            happiness to their hearts. So, take a deep breath, feel the warmth
            of the sun on your skin, and know that your kindness will make a
            difference. Thank you for your donation, and we look forward to
            seeing the amazing things you will continue to do in the futur
          </span>

          <button class="new-btn flex text-sm font-poppins text-gray-700 font-normal justify-center w-[40%] mx-auto my-6">
            <a href="https://donate.stripe.com/test_14kdSTd9n8iJ7M4aEE">
              Donate To a Good Cause
            </a>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Donations;
