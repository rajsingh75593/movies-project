import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import "./style.scss"
import { useLocation, useNavigate } from 'react-router-dom';
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../../assets/movix-logo.svg";

export default function Header() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <header className="header">
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <div className=""><li className="menuItem">Intertainment</li></div>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem"><HiOutlineSearch /></li>
        </ul>

      </ContentWrapper>
    </header>
  )
}
