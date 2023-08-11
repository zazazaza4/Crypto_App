import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import { logo } from "assets";

import "./header.scss";

const headerNav = [
  {
    display: "Home",
    path: "/",
  },
  {
    display: "Coins",
    path: "/coins",
  },
  {
    display: "Exchanges",
    path: "/exchanges",
  },
];

export const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);

  const parts = pathname.split("/");
  const path = `/${parts[1]}`;
  const active = headerNav.findIndex((e) => e.path === path);

  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };

    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div className="header" ref={headerRef}>
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/"> vCrypto</Link>
        </div>
        <div className="header__nav">
          {headerNav.map((elem, index) => (
            <li key={index} className={`${index === active ? "active" : ""} `}>
              <Link to={elem.path}>{elem.display}</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};
