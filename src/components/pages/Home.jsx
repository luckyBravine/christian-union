import React from "react";

import { BiChevronsDown } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import {
  dancers,
  connect,
  prayer,
  hope,
  jornalism,
  love,
  preacher1,
} from "../../assets";
import { GoLocation } from "react-icons/go";
import { Registration } from "../../admin/forms";
import {
  Donations,
  Ministries,
  Video,
  Activities,
} from "../../components/pages/index";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Footer from "../Footer";

const Home = () => {
  return (
    <div className="w-full">
      <div className="top-section">
        <div className="content-wrapper">
          <div className="content">
            <h1 className="text-3xl font-bold leading-loose">
              In Unity We Strive
            </h1>
            <h2 className="text-2xl font-semibold leading-relaxed">
              We pray for hope, peace and love
            </h2>
            <span className="leading-loose">Mathew 18:19-20</span>
            <br />
            <p className="leading-loose">
              ‘For where two or three are gathered together in my name, there am
              I in the midst of them.’
            </p>
            <Link to="registration">
              <a href="">
                <button className="join-cta margin text-sm">
                  Become a Member
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="slider text-4xl text-white font-medium">
          <BiChevronsDown className="animate-bounce" />
        </div>
      </div>

      <div className="in-between">
        <div className="latest-sermon">
          <span>Latest Sermon</span>
          <div className="preacher">
            <p>"Walk Towards God's Paths For Greatness"</p>
            <a href="">
              <h5>Pst.Charles Omondi</h5>
            </a>
          </div>
          <div className="listen">
            <Link to="/video">
              <a href="">
                <button>
                  <FaPlay />
                  <p className="pl-2 text-sm font-light">WATCH NOW</p>
                </button>
              </a>
            </Link>
          </div>
        </div>

        <div className="blog-wrapper">
          <div className="blog">
            <h2 className="text-xl font-bold">Our Blog</h2>
            <div className="blog-content">
              <div className="blog-1">
                <span>READ</span>
                <h5>The Bible</h5>
              </div>
              <div class="blog-2">
                <span>SPREAD</span>
                <h5>Peace and Love</h5>
              </div>
              <div class="blog-3">
                <span>DAILY</span>
                <h5>Motivation</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="weekly-wrapper">
        <div className="top-tier">
          <div className="top-tier-content">
            <h2 className="text-xl font-bold">Our Weekly Events</h2>
            <p>
              We as Christian Union have very many activities some of which are
              redundant and hence featured here others that are not can be
              accessed here{" "}
              <Link to="/activities">
                <a href="" className="underline text-fuchsia-700">
                  More Events!
                </a>
              </Link>
              . It should be noted that all events are equally important.
            </p>
          </div>
        </div>
        <div className="bottom-tier">
          <div className="event">
            <div className="image">
              <img src={prayer} />
            </div>
            <div className="event-content">
              <h5 className="event-header">Prayer Setions</h5>
              <span className="day">Weekly</span>
              <span className="time"> 6.00 Am - 7.00 Am</span>
              <p className="para">
                Prayers are very powerful and act as a vessel of communicating
                with God. In Christian Union we encourage You to join the
                Intercesory to pray for everyone.
              </p>
              <Link to="/activities">
                <a href="">
                  <button className="more text-xs">Read More</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="event">
            <div className="image">
              <img src={connect} />
            </div>
            <div className="event-content">
              <h5 className="event-header">Bible Study</h5>
              <span className="day">Wednesday</span>
              <span className="time"> 6.00 Pm - 8.00 Pm</span>
              <br />
              <p className="para">
                By sharing the word of God amongst our brethren it teaches us
                alot about God expectections of us and also encourages us to
                know about God.
              </p>
              <Link to="/activities">
                <a href="">
                  <button className="more text-xs">Read More</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="event">
            <div className="image">
              <img src={dancers} />
            </div>
            <div className="event-content">
              <h5 className="event-header">Dance</h5>
              <span className="day">Wednesday & Saturday</span>
              <span className="time"> 6.00 Pm - 8.00 Pm</span>
              <p className="para">
                Many people have been given different talent so as to express
                and worship God in these talent. Through dancing people can have
                fun and nature their talent.
              </p>
              <Link to="/activities">
                <a href="">
                  <button className="more text-xs">Read More</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="change-wrapper">
        <div className="left-side">
          <span>Support Our Good cause</span>
          <h2 className="large">Make A Difference</h2>
          <p>
            The Christian Union aims to make the world a better place by
            reaching out to those in need. Your assistance will be greatly
            appriciated.
          </p>
          <Link to="/donations">
            <a href="">
              <button className="change-btn text-black text-sm font-xl font-poppins">
                TOUCH A LIFE
              </button>
            </a>
          </Link>
        </div>
        <div className="right-side">
          <img src={hope} />
        </div>
      </div>

      <div className="service">
        <h2 className="text-xl font-bold">Join Our Sunday Services</h2>
        <div className="services">
          <div className="event">
            <div className="image">
              <img src={preacher1} />
            </div>
            <div className="event-content">
              <h5 className="event-header">Morning Service</h5>
              <span className="day">
                27<sup>th</sup> Nov
              </span>
              <span className="time"> 7.00 Pm - 10.00 Pm</span>
              <br />
              <div className="mid-section">
                <span className="pastor">
                  <label for="">Pastor</label>{" "}
                  <span className="pst">Osteen Oliver</span>
                </span>
                <span className="theme">
                  <label for="">Theme</label>{" "}
                  <span className="pst">Arise in Christ</span>
                </span>
              </div>
              <div className="venue flex items-center text-sm text-stone-400 font-poppins">
                <GoLocation className="mr-2" />
                <span className="place">Tution Block, Conference Hall</span>
              </div>
              <div className="text-sm text-stone-500 font-poppins">
                Tell a friend to tell a friend. Come one come all.
              </div>
              <Link to="/video">
                <a href="">
                  <button className="more text-xs">Attend Online</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="event">
            <div className="image">
              <img src={love} />
            </div>
            <div className="event-content">
              <h5 className="event-header">Mid-Morning Service</h5>
              <span className="day">
                27<sup>th</sup> Nov
              </span>
              <span className="time"> 10.00 am - 1.00 Pm</span>
              <br />
              <div className="mid-section">
                <span className="pastor">
                  <label for="">Pastor</label>{" "}
                  <span className="pst">Mercy Masika</span>
                </span>
                <span className="theme">
                  <label for="">Theme</label>{" "}
                  <span className="pst">Love In Christ</span>
                </span>
              </div>
              <div className="venue flex items-center text-sm text-stone-400 font-poppins">
                <GoLocation className="mr-2" />
                <span className="place">Tution Block, Conference Hall</span>
              </div>
              <div className="text-sm text-stone-500 font-poppins">
                Tell a friend to tell a friend. Come one come all.
              </div>
              <Link to="/video">
                <a href="">
                  <button className="more text-xs">Attend Online</button>
                </a>
              </Link>
            </div>
          </div>
          <div className="event">
            <div className="image">
              <img src={jornalism} />
            </div>
            <div className="event-content">
              <h5 className="event-header">Journalism</h5>
              <span className="day">
                27<sup>th</sup> Nov
              </span>
              <span className="time"> 2.00 Pm - 4.00 Pm</span>
              <br />
              <div className="mid-section">
                <span className="pastor">
                  <label for="">Host</label>{" "}
                  <span className="pst">Michelle Gullani</span>
                </span>
                <span className="theme">
                  <label for="">Co-Host</label>{" "}
                  <span className="pst text-sm text-stone-400 font-poppins">
                    Justin Obiero
                  </span>
                </span>
              </div>
              <div className="venue flex items-center text-sm text-stone-400 font-poppins">
                <GoLocation className="mr-2" /> Online,
                <a href="">Livestream</a>
              </div>
              <div className="text-sm text-stone-600 font-poppins">
                Binge on Arise in Christ.
              </div>
              <Link to="/video">
                <a href="">
                  <button className="more text-xs">Listen In</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Routes>
        <Route exact path="/activities" element={<Activities />}></Route>
        <Route exact path="/donations" element={<Donations />}></Route>
        <Route exact path="/registration" element={<Registration />}></Route>
        <Route exact path="/video" element={<Video />}></Route>
      </Routes>
    </div>
  );
};

export default Home;
