import React from "react";

import {
  character_five,
  character_four,
  character_one,
  character_six,
  character_three,
  character_two,
  videoone,
  videothree,

} from "../../assets";
import { AiOutlineMessage } from "react-icons/ai";
import { MdInsertComment } from "react-icons/md";
import { BsShareFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import Footer from "../Footer";

const Video = () => {
  return (
    <div>
      <div className="w-[100vw] flex mx-auto my-2 ">
        <div className="w-[70%] ml-3 bg-white h-full">
          <div
            className="flex w-[60%] items-center mx-auto my-2
          bg-[#00002ed0] rounded-full"
          >
            <input
              type="text"
              name="search"
              id=""
              placeholder="Search For a Sermon Video Here"
              className="bg-[#00002e62] w-[92%] py-2 pl-2 outline-none rounded-l-full text-white"
            />
            <ImSearch className="text-2xl text-gray-200 ml-2" />
          </div>

          <div className="w-[100%] mb-2">
            <div className="w-[955px] bg-slate-50 h-[470px] flex">
              <video
                src={videoone}
                controls
                className="w-[100%] h-[100%]"
              ></video>
            </div>

            <div className="flex justify-between bg-slate-50 p-4">
              <h1 className="text-lg font-semibold font-poppins">
                Jesus Is The Way The Truth and The Light
              </h1>
              <div className="flex justify-center  items-center">
                <img
                  src={character_two}
                  alt=""
                  className="w-[30px] h-[30px] object-cover rounded-full"
                />
                <h6 className="text-sm font-poppins ml-3 text-stone-400">
                  Pst.Collins Oduor
                </h6>
              </div>
              <div className="flex  items-center">
                <div className="bg-[#00002ea4] rounded-2xl flex p-2 animate-pulse cursor-pointer">
                  <span className="text-sm font-poppins text-gray-200">
                    Comment
                  </span>
                  <AiOutlineMessage className="text-white text-lg ml-2" />
                </div>
                <div className="bg-[#00002ea4] rounded-2xl flex p-2 ml-2 cursor-pointer">
                  <span className="text-sm font-poppins text-gray-200">
                    Share
                  </span>
                  <BsShareFill className="text-white text-lg ml-2" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-6 gap-y-8 place-content-center mx-2 my-2">
            <div>
              <video src={videoone} muted></video>
              <div className="bg-[#00002ea4] py-2 px-1">
                <h6 className="text-sm font-poppins text-gray-200">
                  Love In Christ | Pst.Joseph
                </h6>
              </div>
            </div>

            <div>
              <video src={videoone} muted></video>
              <div className="bg-[#00002ea4] py-2 px-1">
                <h6 className="text-sm font-poppins text-gray-200">
                  The Art Of Giving | Pst.Eunice
                </h6>
              </div>
            </div>

            <div>
              <video src={videothree} muted></video>
              <div className="bg-[#00002ea4] py-2 px-1">
                <h6 className="text-sm font-poppins text-gray-200">
                  Forgiveness | Pst.Victor
                </h6>
              </div>
            </div>

            <div>
              <video src={videoone} muted></video>
              <div className="bg-[#00002ea4] py-2 px-1">
                <h6 className="text-sm font-poppins text-gray-200">
                  Christ In Me | Pst.Bravine
                </h6>
              </div>
            </div>

            <div>
              <video src={videothree} muted></video>
              <div className="bg-[#00002ea4] py-2 px-1">
                <h6 className="text-sm font-poppins text-gray-200">
                  The Cross | Pst.Bilton
                </h6>
              </div>
            </div>

            <div>
              <video src={videoone} muted></video>
              <div className="bg-[#00002ea4] py-2 px-1">
                <h6 className="text-sm font-poppins text-gray-200">
                  Christ Ambassadors | Pst.Collins
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center h-full">
          <h2 className="font-semibold text-center text-gray-800 text-xl font-poppins">
            Comments
          </h2>
          <div className="">
            <div className="px-3 py-4 mx-3 my-2 bg-slate-100 rounded-md flex justify-center w-[90%]">
              <img
                src={character_two}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="ml-2">
                <div className="flex">
                  <h5 className="text-sm font-poppins font-semibold">
                    Javan Adhiambo
                  </h5>
                  <h5 className="text-sm font-poppins text-gray-400 ml-2">
                    2 sec ago
                  </h5>
                </div>
                <p className="text-sm text-stone-500 font-poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, exercitationem? Voluptate id vero necessitatibus neque
                  nihil minima facere unde.
                </p>
              </div>
            </div>

            <div className="px-3 py-4 mx-3 my-2 bg-slate-100 rounded-md flex justify-center w-[90%]">
              <img
                src={character_three}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="ml-2">
                <div className="flex">
                  <h5 className="text-sm font-poppins font-semibold">
                    Mercy Chepchirchir
                  </h5>
                  <h5 className="text-sm font-poppins text-gray-400 ml-2">
                    10 Sec ago
                  </h5>
                </div>
                <p className="text-sm text-stone-500 font-poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, exercitationem? Voluptate id vero necessitatibus neque
                  nihil minima facere unde.
                </p>
              </div>
            </div>

            <div className="px-3 py-4 mx-3 my-2 bg-slate-100 rounded-md flex justify-center w-[90%]">
              <img
                src={character_four}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="ml-2">
                <div className="flex">
                  <h5 className="text-sm font-poppins font-semibold">
                    Anita Otieno
                  </h5>
                  <h5 className="text-sm font-poppins text-gray-400 ml-2">
                    16 Sec ago
                  </h5>
                </div>
                <p className="text-sm text-stone-500 font-poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, exercitationem? Voluptate id vero necessitatibus neque
                  nihil minima facere unde.
                </p>
              </div>
            </div>

            <div className="px-3 py-4 mx-3 my-2 bg-slate-100 rounded-md flex justify-center w-[90%]">
              <img
                src={character_six}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="ml-2">
                <div className="flex">
                  <h5 className="text-sm font-poppins font-semibold">
                    Hashim Huston
                  </h5>
                  <h5 className="text-sm font-poppins text-gray-400 ml-2">
                    20 Sec ago
                  </h5>
                </div>
                <p className="text-sm text-stone-500 font-poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, exercitationem? Voluptate id vero necessitatibus neque
                  nihil minima facere unde.
                </p>
              </div>
            </div>

            <div className="px-3 py-4 mx-3 my-2 bg-slate-100 rounded-md flex justify-center w-[90%]">
              <img
                src={character_one}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="ml-2">
                <div className="flex">
                  <h5 className="text-sm font-poppins font-semibold">
                    Elizabeth Indimuri
                  </h5>
                  <h5 className="text-sm font-poppins text-gray-400 ml-2">
                    36 Sec ago
                  </h5>
                </div>
                <p className="text-sm text-stone-500 font-poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, exercitationem? Voluptate id vero necessitatibus neque
                  nihil minima facere unde.
                </p>
              </div>
            </div>

            <div className="px-3 py-4 mx-3 my-2 bg-slate-100 rounded-md flex justify-center w-[90%]">
              <img
                src={character_five}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="ml-2">
                <div className="flex">
                  <h5 className="text-sm font-poppins font-semibold">
                    Adrian Loitipis
                  </h5>
                  <h5 className="text-sm font-poppins text-gray-400 ml-2">
                    1 min ago
                  </h5>
                </div>
                <p className="text-sm text-stone-500 font-poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, exercitationem? Voluptate id vero necessitatibus neque
                  nihil minima facere unde.
                </p>
              </div>
            </div>

            <div className="px-3 py-4 mx-3 my-2 bg-slate-100 rounded-md flex justify-center w-[90%]">
              <img
                src={character_two}
                alt=""
                className="w-[40px] h-[40px] object-cover rounded-full"
              />
              <div className="ml-2">
                <div className="flex">
                  <h5 className="text-sm font-poppins font-semibold">
                    Kadze Renan
                  </h5>
                  <h5 className="text-sm font-poppins text-gray-400 ml-2">
                    2 min ago
                  </h5>
                </div>
                <p className="text-sm text-stone-500 font-poppins">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quasi, exercitationem? Voluptate id vero necessitatibus neque
                  nihil minima facere unde.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Video;
