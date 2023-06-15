import React from "react";

import Footer from "../Footer";
import {
  choir,
  cateringone,
  ushers,
  dancers,
  group,
  band,
  digital,
  jornalism,
  bible1,
  join,
} from "../../assets";
import { BiGroup } from "react-icons/bi";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Ministries = () => {
  return (
    <div className="w-full">
      <h1 className="mt-2 text-2xl font-bold text-center">Our Ministries</h1>
      <div className="flex mx-auto justify-center">
        <div className="grid grid-cols-3 gap-x-16 gap-y-4 place-content-center  my-1">
          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={cateringone}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Catering Ministry
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">30</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda indila.
                </span>
                <button class="new-btn flex text-sm font-poppins font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={band}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Band Ministry
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">28</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda.
                </span>
                <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={dancers}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Dancing Ministry
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">30</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda.
                </span>
                <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={digital}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Digital Ministry
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">30</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda.
                </span>
                <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={ushers}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Ushering Ministry
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">30</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda.
                </span>
                <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={group}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Intercesors Ministry
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">30</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda.
                </span>
                <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={choir}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Choir Ministry
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">30</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda.
                </span>
                <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={bible1}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Bible Study
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">30</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda.
                </span>
                <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>

          <div className="w-[300px] m-2">
            <div className="w-[300px] h-[200px]">
              <img
                src={jornalism}
                alt="catering"
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h3 className="py-1 text-center text-normal font-poppins">
                Journalism Ministry
              </h3>
              <div className="flex items-center justify-between text-center">
                <div className="flex items-center text-center ">
                  <BiGroup className="text-normal font-poppins text-lime-500" />
                  <span className="px-1 font-light font-poppins">30</span>
                  <h5 className="text-light font-poppins">Members</h5>
                </div>
                <div className="flex items-center pl-2 text-center">
                  <h5 className="pr-1 text-light font-poppins">Rating</h5>
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStar className="pr-1 text-lime-500" />{" "}
                  <FaStarHalfAlt className="pr-1 text-lime-500" />
                </div>
              </div>
              <div>
                <span className="text-gray-700 text-xm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maiores ratione voluptatem nihil tempore id mollitia adipisci
                  assumenda.
                </span>
                <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
                  Join Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        action=""
        method="post"
        className="justify-center block mx-auto mt-4 bg-slate-100  py3"
      >
        <h2 className="mt-2 text-2xl font-bold text-center">Join Form</h2>
        <div className="flex justify-center">
          <div className="relative justify-center block">
            <div className="pt-2">
              <input
                type="text"
                name="fnme"
                id=""
                class="rounded outline-none p-2 w-[300px] text-sm text-black"
                placeholder="Enter Your FirstName"
              />
            </div>

            <div className="pt-2">
              <input
                type="text"
                name="fnme"
                id=""
                class="rounded outline-none p-2 w-[300px] text-sm text-black"
                placeholder="Enter Your SecondName"
              />
            </div>

            <div className="pt-2">
              <input
                type="mail"
                name="email"
                id=""
                class="rounded outline-none p-2 w-[300px] text-sm text-black"
                placeholder="Enter your email"
              />
            </div>

            <div className="pt-2 mb-2">
              <input
                type="number"
                name="number"
                id=""
                class="rounded outline-none p-2 w-[300px] text-sm text-black"
                placeholder="Enter Your Phone Number"
              />
            </div>

            <select
              name="ministries"
              id=""
              className="p-2 mb-4 text-sm w-[300px] text-black rounded outline-none form-select"
            >
              <option value="Catering">Catering Ministry</option>
              <option value="Dancing">Dancing Ministry</option>
              <option value="Band">Band Ministry</option>
              <option value="Choir">Choir Ministry</option>
              <option value="Journalism">Journalism Ministry</option>
              <option value="Intersesory">Intersesory Ministry</option>
              <option value="Bible Study">Bible Study</option>
              <option value="Ushering">Ushering Ministry</option>
              <option value="Digital">Digital Ministry</option>
            </select>
            <button class="new-btn flex text-sm font-normal justify-center mx-auto my-1">
              SUBMIT
            </button>
          </div>
        </div>
      </form>

      <Footer />
    </div>
  );
};

export default Ministries;
