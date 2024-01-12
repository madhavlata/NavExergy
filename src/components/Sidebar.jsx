import React, { useState } from "react";
import { FaHome, FaBars } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { GrTrophy } from "react-icons/gr";
import { GrWorkshop } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/talks",
      name: "Talks",
      icon: <FaCalendarAlt />,
    },
    {
      path: "/competitions",
      name: "Competitions",
      icon: <GrTrophy />,
    },
    {
      path: "/workshops",
      name: "Workshops",
      icon: <GrWorkshop />,
    },
    {
      path: "/caprogram",
      name: "Campus Ambassador Program",
      icon: <FaPeopleGroup />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
