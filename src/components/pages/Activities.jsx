import React from "react";

import Footer from "../Footer";
import {
  bible,
  character_five,
  character_four,
  character_six,
  character_three,
  character_two,
  dance,
  dancers,
  prayer,
  preacher,
} from "../../assets";

const Activities = () => {
  return (
    <div className="w-full flex justify-center mx-auto my-2 flex-col bg-white">
      <h1 className="mt-2 text-2xl font-bold text-center">Upcoming Events</h1>
      <div className="flex justify-center mx-auto my-2 rounded-2xl bg-slate-100 w-[70%]">
        <div className="rounded-l-2xl  w-[80%]">
          <img
            src={dance}
            alt=""
            className="h-full w-full object-cover rounded-l-2xl"
          />
        </div>
        <div className="p-2">
          <h4 className="text-base font-poppins font-semibold mb-1">
            MULEWO Night
          </h4>
          <div className="flex items-center">
            <img
              src={character_five}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="ml-3">
              <h5 className="text-sm font-poppins text-stone-400">Speaker</h5>
              <h6 className="text-sm font-poppins font-semibold">
                James Ndishu
              </h6>
            </div>
          </div>
          <div className="flex my-2">
            <div className="flex">
              <h6 className="text-sm font-poppins font-semibold">Time:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                7:00pm - 10:00pm
              </span>
            </div>
            <div className="flex ml-5">
              <h6 className="text-sm font-poppins font-semibold">Venue:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                E-Cop Hall Tution Block
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm text-stone-500 font-poppins leading-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              corporis magnam accusantium fugiat atque, explicabo soluta fugit
              eum perspiciatis eos voluptatum sed labore quasi voluptatibus
              doloremque aspernatur dignissimos et officia.
            </p>
          </div>
          <div className="my-2">
            <h5 className="text-sm font-poppins font-semibold">Dress Code</h5>
            <div className="flex ">
              <div className="flex">
                <h6 className="text-sm font-poppins font-semibold">Men:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  African Atire
                </span>
              </div>
              <div className="flex ml-5">
                <h6 className="text-sm font-poppins font-semibold">Women:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  African Atire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-auto my-2 rounded-2xl bg-slate-100 w-[70%]">
        <div className="rounded-l-2xl  w-[80%]">
          <img
            src={preacher}
            alt=""
            className="h-full w-full object-cover rounded-l-2xl"
          />
        </div>
        <div className="p-2">
          <h4 className="text-base font-poppins font-semibold mb-1">
            Evangelism
          </h4>
          <div className="flex items-center">
            <img
              src={character_two}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="ml-3">
              <h5 className="text-sm font-poppins text-stone-400">Speaker</h5>
              <h6 className="text-sm font-poppins font-semibold">
                Joash Amadi
              </h6>
            </div>
          </div>
          <div className="flex my-2">
            <div className="flex">
              <h6 className="text-sm font-poppins font-semibold">Time:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                1 Week
              </span>
            </div>
            <div className="flex ml-5">
              <h6 className="text-sm font-poppins font-semibold">Venue:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                Makueni
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm text-stone-500 font-poppins leading-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              corporis magnam accusantium fugiat atque, explicabo soluta fugit
              eum perspiciatis eos voluptatum sed labore quasi voluptatibus
              doloremque aspernatur dignissimos et officia.
            </p>
          </div>
          <div className="my-2">
            <h5 className="text-sm font-poppins font-semibold">Dress Code</h5>
            <div className="flex ">
              <div className="flex">
                <h6 className="text-sm font-poppins font-semibold">Men:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  Decent Atire
                </span>
              </div>
              <div className="flex ml-5">
                <h6 className="text-sm font-poppins font-semibold">Women:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  Decent Atire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="mt-2 text-2xl font-bold text-center">Daily Events</h1>
      <div className="flex justify-center mx-auto my-2 rounded-2xl bg-slate-100 w-[70%]">
        <div className="rounded-l-2xl  w-[80%]">
          <img
            src={bible}
            alt=""
            className="h-full w-full object-cover rounded-l-2xl"
          />
        </div>
        <div className="p-2">
          <h4 className="text-base font-poppins font-semibold mb-1">
            Bible Studies
          </h4>
          <div className="flex items-center">
            <img
              src={character_four}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="ml-3">
              <h5 className="text-sm font-poppins text-stone-400">Speaker</h5>
              <h6 className="text-sm font-poppins font-semibold">
                Joan Nasike
              </h6>
            </div>
          </div>
          <div className="flex my-2">
            <div className="flex">
              <h6 className="text-sm font-poppins font-semibold">Time:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                4:00pm - 7:00pm
              </span>
            </div>
            <div className="flex ml-5">
              <h6 className="text-sm font-poppins font-semibold">Venue:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                E-Cop Hall Tution Block
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm text-stone-500 font-poppins leading-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              corporis magnam accusantium fugiat atque, explicabo soluta fugit
              eum perspiciatis eos voluptatum sed labore quasi voluptatibus
              doloremque aspernatur dignissimos et officia.
            </p>
          </div>
          <div className="my-2">
            <h5 className="text-sm font-poppins font-semibold">Dress Code</h5>
            <div className="flex ">
              <div className="flex">
                <h6 className="text-sm font-poppins font-semibold">Men:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  Decent Atire
                </span>
              </div>
              <div className="flex ml-5">
                <h6 className="text-sm font-poppins font-semibold">Women:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  Decent Atire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mx-auto my-2 rounded-2xl bg-slate-100 w-[70%]">
        <div className="rounded-l-2xl  w-[80%]">
          <img
            src={dancers}
            alt=""
            className="h-full w-full object-cover rounded-l-2xl"
          />
        </div>
        <div className="p-2">
          <h4 className="text-base font-poppins font-semibold mb-1">Dancing</h4>
          <div className="flex items-center">
            <img
              src={character_three}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="ml-3">
              <h5 className="text-sm font-poppins text-stone-400">Speaker</h5>
              <h6 className="text-sm font-poppins font-semibold">
                Mary Mutheu
              </h6>
            </div>
          </div>
          <div className="flex my-2">
            <div className="flex">
              <h6 className="text-sm font-poppins font-semibold">Time:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                6:00pm - 8:00pm
              </span>
            </div>
            <div className="flex ml-5">
              <h6 className="text-sm font-poppins font-semibold">Venue:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                E-Cop Hall Tution Block
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm text-stone-500 font-poppins leading-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              corporis magnam accusantium fugiat atque, explicabo soluta fugit
              eum perspiciatis eos voluptatum sed labore quasi voluptatibus
              doloremque aspernatur dignissimos et officia.
            </p>
          </div>
          <div className="my-2">
            <h5 className="text-sm font-poppins font-semibold">Dress Code</h5>
            <div className="flex ">
              <div className="flex">
                <h6 className="text-sm font-poppins font-semibold">Men:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  Dancing Atire
                </span>
              </div>
              <div className="flex ml-5">
                <h6 className="text-sm font-poppins font-semibold">Women:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  Dancing Atire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto my-2 rounded-2xl bg-slate-100 w-[70%]">
        <div className="rounded-l-2xl  w-[80%]">
          <img
            src={prayer}
            alt=""
            className="h-full w-full object-cover rounded-l-2xl"
          />
        </div>
        <div className="p-2">
          <h4 className="text-base font-poppins font-semibold mb-1">
            Intersesory
          </h4>
          <div className="flex items-center">
            <img
              src={character_six}
              alt=""
              className="w-[50px] h-[50px] rounded-full object-cover"
            />
            <div className="ml-3">
              <h5 className="text-sm font-poppins text-stone-400">Speaker</h5>
              <h6 className="text-sm font-poppins font-semibold">
                Daniel Kadze
              </h6>
            </div>
          </div>
          <div className="flex my-2">
            <div className="flex">
              <h6 className="text-sm font-poppins font-semibold">Time:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                6:00pm - 8:00pm
              </span>
            </div>
            <div className="flex ml-5">
              <h6 className="text-sm font-poppins font-semibold">Venue:</h6>
              <span className="text-sm font-poppins text-stone-700 pl-3">
                E-Cop Hall Tution Block
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm text-stone-500 font-poppins leading-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              corporis magnam accusantium fugiat atque, explicabo soluta fugit
              eum perspiciatis eos voluptatum sed labore quasi voluptatibus
              doloremque aspernatur dignissimos et officia.
            </p>
          </div>
          <div className="my-2">
            <h5 className="text-sm font-poppins font-semibold">Dress Code</h5>
            <div className="flex ">
              <div className="flex">
                <h6 className="text-sm font-poppins font-semibold">Men:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  Decent Atire
                </span>
              </div>
              <div className="flex ml-5">
                <h6 className="text-sm font-poppins font-semibold">Women:</h6>
                <span className="text-sm font-poppins text-stone-700 pl-3">
                  Decent Atire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Activities;
