import { NavHashLink } from "react-router-hash-link";
import { navLinks } from "../constants/nav";
import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`fixed top-0 left-0 z-10 w-full bg-[#1B1B1B] text-white transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container">
        <div className="p-[20px_0] flex items-center  justify-between">
          <h2 className="text-[30px] font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            XY.dev
          </h2>

          <nav className="">
            {navLinks.map((el, index) => (
              <NavHashLink
                smooth
                key={index}
                to={el.link}
                className={`text-[#959595] p-[20px_30px] transition-all duration-300 cursor-pointer  text-[20px] font-medium  hover:text-[#FD6F00]`}
              >
                {el.label}
              </NavHashLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
