import React from "react";

import { maker } from "../assets";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineSend } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiPhone } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="footer-wrapper">
        <div className="footer">
          <div className="col-1">
            <div className="top-left">
              <img src={maker} alt="" />
              <span className="logo-section span">Christian Union</span>
            </div>
            <div className="social-links">
              <div className="facebook text-xl">
                <SlSocialFacebook />
              </div>
              <div className="tweeter text-xl">
                <SlSocialTwitter />
              </div>
              <div className="instagram text-xl">
                <SlSocialInstagram />
              </div>
            </div>
          </div>
          <div className="col-2">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="">
                  <SiGmail className="text-base mr-2"/> mutcu@gmail.com
                </a>
              </li>
              <li>
                <a href="">
                  < GoLocation className="text-base mr-2"/> 75-10200 Muranga
                  University
                </a>
              </li>
              <li>
                <a href="">
                  <FiPhone className="text-base mr-2"/> +254 700203828
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h3>Subscribe To Our Podcast</h3>
            <div className="sub-content">
              <p>
                Enter your email to get notified when
                <br />
                our events are planned
              </p>
              <div className="flex items-center relative bg-white w-[15rem]">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address here!"
                  className="text-sm text-black"
                />
                <AiOutlineSend className="ml-0 mr-2 text-black font-normal text-2xl"/>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">Copyright&copy;2023&ndash; Christian Union</div>
      </div>
    </div>
  );
};

export default Footer;
