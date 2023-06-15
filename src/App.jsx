import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import {
  Home,
  Donations,
  Ministries,
  Video,
  About,
  Activities,
} from "./components/pages/index";
import { Login, Signup } from "./components/index";
import { BiDonateHeart } from "react-icons/bi";
import { Registration } from "./admin/forms";

const App = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      background: isActive ? "#acff2f" : "",
      borderRadius: isActive ? "20px" : 0,
      padding: isActive ? "0.1rem 0.6rem" : 0,
      color: isActive ? "black" : "white",
    };
  };
  return (
    <Router>
      <div className="w-full">
        <div className="">
          <nav className="nav-bar navbar color">
            <h2 className="text-xl font-poppins font-bold cursor-pointer">
              Christian Union
            </h2>

            <ul className="links font-poppins">
              <li className="text-lg">
                <NavLink to="/" style={navLinkStyles}>
                  Home
                </NavLink>
              </li>
              <li className="text-lg ">
                <NavLink to="/ministries" style={navLinkStyles}>
                  Ministries
                </NavLink>
              </li>
              <li className="text-lg ">
                <NavLink to="/activities" style={navLinkStyles}>
                  Events
                </NavLink>
              </li>
              <li className="text-lg ">
                <NavLink to="/video" style={navLinkStyles}>
                  Sermons
                </NavLink>
              </li>
              <li className="text-lg ">
                <NavLink to="/about" style={navLinkStyles}>
                  About
                </NavLink>
              </li>
            </ul>

            <div className="flex">
              <button className="cta-btn text-sm font-poppins">
                <NavLink to="/donations">
                  <div className="flex">
                    <BiDonateHeart className="text-base font-thin mr-1" />
                    <div>Lend a Hand</div>
                  </div>
                </NavLink>
              </button>
            </div>
          </nav>
        </div>

        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/ministries" element={<Ministries />}></Route>
          <Route exact path="/activities" element={<Activities />}></Route>
          <Route exact path="/video" element={<Video />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/donations" element={<Donations />}></Route>
          <Route exact path="/registration" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
