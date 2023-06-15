import React from "react";

import Footer from "../Footer";

import { BiHeart } from "react-icons/bi";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

import {
  bible1,
  character_five,
  character_four,
  character_one,
  character_six,
  character_three,
  character_two,
  connect,
  love3,
} from "../../assets";

const About = () => {
  return (
    <div className="w-full">
      <div className="w-full">
        <h1 className="text-2xl text-center mt-2 font-bold font-poppins">About Us</h1>
        <p className="text-center text-sm font-poppins text-zinc-500">A Union To Win Souls For Christ</p>
        <div className="flex justify-center flex-col  mx-auto mt-6">
          <div className="flex justify-center mb-4">
            <div className="w-[37%]">
              <h2 className="text-center font-bold text-xl font-poppins">Our Vision</h2>
              <p className="pr-8 leading-relaxed text-base font-poppins text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                repudiandae adipisci, laboriosam consectetur, aspernatur
                suscipit deserunt, ipsum provident ipsam cumque rerum minima
                assumenda magnam illo officiis inventore. Earum, recusandae
                consequatur.
                <br />
                <br />
              </p>
              <div className="pr-8 leading-relaxed text-base font-poppins text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                autem sit fugit temporibus illum saepe nostrum quaerat dolorem
                veniam, laudantium totam rem illo dolorum, animi voluptatibus
                nobis aut esse facilis.
                <br />
                <br />
              </div>
              <p className="pr-8 leading-relaxed text-base font-poppins text-zinc-500">
                Cumque autem sit fugit temporibus illum saepe nostrum quaerat
                dolorem veniam.
                <br />
                <br />
              </p>
            </div>
            <img src={bible1} alt="bible" className="w-[500px]" />
          </div>
          <div className="flex justify-center my-6">
            <img src={connect} alt="connect" className="w-[500px]" />
            <div className="w-[37%]">
              <h2 className="text-center font-bold text-xl font-poppins">Our Motto</h2>
              <p className="pl-8 leading-relaxed text-base font-poppins text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                repudiandae adipisci, laboriosam consectetur, aspernatur
                suscipit deserunt, ipsum provident ipsam cumque rerum minima
                assumenda magnam illo officiis inventore. Earum, recusandae
                consequatur.
                <br />
                <br />
              </p>
              <div className="pl-8 leading-relaxed text-base font-poppins text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                autem sit fugit temporibus illum saepe nostrum quaerat dolorem
                veniam, laudantium totam rem illo dolorum, animi voluptatibus
                nobis aut esse facilis.
                <br />
                <br />
              </div>
              <p className="pl-8 leading-relaxed text-base font-poppins text-zinc-500">
                Cumque autem sit fugit temporibus illum saepe nostrum quaerat
                dolorem veniam.
                <br />
                <br />
              </p>
            </div>
          </div>
          <div className="flex justify-center my-6">
            <div className="w-[37%] align">
              <h2 className="text-center font-bold text-xl font-poppins">Our Approach</h2>
              <p className="pr-8 leading-relaxed text-base font-poppins text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                repudiandae adipisci, laboriosam consectetur, aspernatur
                suscipit deserunt, ipsum provident ipsam cumque rerum minima
                assumenda magnam illo officiis inventore. Earum, recusandae
                consequatur.
                <br />
                <br />
              </p>
              <div className="pr-8 leading-relaxed text-base font-poppins text-zinc-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                autem sit fugit temporibus illum saepe nostrum quaerat dolorem
                veniam, laudantium totam rem illo dolorum, animi voluptatibus
                nobis aut esse facilis.
                <br />
                <br />
              </div>
              <p className="pr-8 leading-relaxed text-base font-poppins text-zinc-500">
                Cumque autem sit fugit temporibus illum saepe nostrum quaerat
                dolorem veniam.
                <br />
                <br />
              </p>
            </div>
            <img src={love3} alt="love" className="w-[500px] " />
          </div>
        </div>
      </div>

      <h1 className="text-2xl text-center mt-2 font-bold font-poppins">Our Team</h1>

      <div className="w-full flex justify-center align-center relative mx-auto my-2 ">
        <div className="bg-[#00002ed7] w-[260px] px-4 pt-8 pb-6 h-[380px] mr-2">
          <h6 className="text-xs font-poppins leading-8 text-stone-300">
            CHRISTIAN UNION LEADERS
          </h6>
          <p className="text-stone-50 font-poppins text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            consequuntur libero officiis, totam unde rem veritatis Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>

          <div className="mt-4 flex">
            <BiHeart className="text-2xl text-lime-500" />
            <span className="text-xs font-poppins leading-7 text-stone-300 pl-2 under">
              ONE THROUGH CHRIST
            </span>
          </div>
        </div>


        <div className="grid grid-cols-4 gap-x-6 gap-y-8 place-content-center mx-2 ">
          <div className="p-4 bg-slate-50 rounded-md">
            <img
              src={character_two}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h6 className="text-xs font-poppins text-stone-400">
                Collins Oduor
              </h6>
              <span className="text-sm font-normal font-poppins text-stone-900">
                President
              </span>
              <div className="flex">
                <SlSocialTwitter className=" text-lime-500 text-base" />
                <SlSocialFacebook className=" text-lime-500 text-base mx-2" />
                <SlSocialInstagram className=" text-lime-500 text-base" />
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <img
              src={character_one}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h6 className="text-xs font-poppins text-stone-400">
                Edith Njoroge
              </h6>
              <span className="text-sm font-normal font-poppins text-stone-900">
                Vice President
              </span>
              <div className="flex">
                <SlSocialTwitter className=" text-lime-500 text-base" />
                <SlSocialFacebook className=" text-lime-500 text-base mx-2" />
                <SlSocialInstagram className=" text-lime-500 text-base" />
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <img
              src={character_three}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h6 className="text-xs font-poppins text-stone-400">
                Elizabeth Mbaizi
              </h6>
              <span className="text-sm font-normal font-poppins text-stone-900">
                Dancing-cod
              </span>
              <div className="flex">
                <SlSocialTwitter className=" text-lime-500 text-base" />
                <SlSocialFacebook className=" text-lime-500 text-base mx-2" />
                <SlSocialInstagram className=" text-lime-500 text-base" />
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <img
              src={character_five}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h6 className="text-xs font-poppins text-stone-400">
                Jacob Musau
              </h6>
              <span className="text-sm font-normal font-poppins text-stone-900">
                Intersesor-cod
              </span>
              <div className="flex">
                <SlSocialTwitter className=" text-lime-500 text-base" />
                <SlSocialFacebook className=" text-lime-500 text-base mx-2" />
                <SlSocialInstagram className=" text-lime-500 text-base" />
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <img
              src={character_six}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h6 className="text-xs font-poppins text-stone-400">
                Charls Kipchumba
              </h6>
              <span className="text-sm font-normal font-poppins text-stone-900">
                Digital-cod
              </span>
              <div className="flex">
                <SlSocialTwitter className=" text-lime-500 text-base" />
                <SlSocialFacebook className=" text-lime-500 text-base mx-2" />
                <SlSocialInstagram className=" text-lime-500 text-base" />
              </div>
            </div>
          </div><div className="p-4 bg-slate-50 rounded-md">
            <img
              src={character_four}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h6 className="text-xs font-poppins text-stone-400">
                Josphine Musimbi
              </h6>
              <span className="text-sm font-normal font-poppins text-stone-900">
                Choir-cod
              </span>
              <div className="flex">
                <SlSocialTwitter className=" text-lime-500 text-base" />
                <SlSocialFacebook className=" text-lime-500 text-base mx-2" />
                <SlSocialInstagram className=" text-lime-500 text-base" />
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <img
              src={character_five}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h6 className="text-xs font-poppins text-stone-400">
                John Ondiek
              </h6>
              <span className="text-sm font-normal font-poppins text-stone-900">
                Ushering-cod
              </span>
              <div className="flex">
                <SlSocialTwitter className=" text-lime-500 text-base" />
                <SlSocialFacebook className=" text-lime-500 text-base mx-2" />
                <SlSocialInstagram className=" text-lime-500 text-base" />
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-md">
            <img
              src={character_two}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full"
            />
            <div className="mt-2">
              <h6 className="text-xs font-poppins text-stone-400">
                John Vic
              </h6>
              <span className="text-sm font-normal font-poppins text-stone-900">
                Band-cod
              </span>
              <div className="flex">
                <SlSocialTwitter className=" text-lime-500 text-base" />
                <SlSocialFacebook className=" text-lime-500 text-base mx-2" />
                <SlSocialInstagram className=" text-lime-500 text-base" />
              </div>
            </div>
          </div>
        </div>

        
      </div>

      <Footer />
    </div>
  );
};

export default About;
