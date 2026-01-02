import { HashLink } from "react-router-hash-link";
import { NavLinks } from "../constants";
import { useEffect, useState, useRef } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const lastScroll = useRef(0);
  const [burgerShown, setBurgerShown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (burgerShown) return;

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [burgerShown]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full bg-[#1B1B1B] text-white transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container">
        <div className="py-5 flex items-center justify-between">
          <h2 className="text-[30px] font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent cursor-pointer">
            XY.dev
          </h2>

          <nav className="hidden md:block">
            {NavLinks.map((el, index) => (
              <HashLink
                smooth
                key={index}
                to={el.link}
                className="text-[#959595] px-6 transition-all duration-300 cursor-pointer text-[20px] font-medium hover:text-[#FD6F00]"
              >
                {el.label}
              </HashLink>
            ))}
          </nav>

          <button
            onClick={() => setBurgerShown(!burgerShown)}
            className="hidden max-[768px]:block z-50 relative"
          >
            <div className="flex flex-col gap-1.5 w-9">
              <div
                className={`h-1 bg-[#959595] rounded-full transition-all duration-300 origin-left 
                ${burgerShown ? "rotate-45 w-9.5" : "w-9"}`}
              ></div>
              <div
                className={`h-1 bg-[#959595] rounded-full transition-all duration-300 
                ${burgerShown ? "opacity-0 w-0" : "w-6 ml-auto"}`}
              ></div>
              <div
                className={`h-1 bg-[#959595] rounded-full transition-all duration-300 origin-left 
                ${burgerShown ? "-rotate-45 w-9.5 translate-y-[5px]" : "w-9"}`}
              ></div>
            </div>
          </button>
        </div>

        <div
          className={`fixed left-0 w-full bg-[#1B1B1B] transition-all duration-500 ease-in-out shadow-2xl border-t border-gray-800
          ${
            burgerShown
              ? "top-20 opacity-100 visible"
              : "top-[-100%] opacity-0 invisible"
          } 
          md:hidden z-40`}
        >
          <nav className="flex flex-col py-4">
            {NavLinks.map((el, index) => (
              <HashLink
                smooth
                key={index}
                to={el.link}
                className="text-[#959595] px-6 transition-all duration-300 cursor-pointer text-[20px] font-medium hover:text-[#FD6F00]"
              >
                {el.label}
              </HashLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
