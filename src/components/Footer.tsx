import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";

import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";
import { NavHashLink } from "react-router-hash-link";
import { navLinks } from "../constants/nav";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1BFF]">
      <div className="container">
        <div className="flex flex-col items-center  p-[40px_0]">
          <h2 className="text-[30px] font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            XY.dev
          </h2>

          <nav className="flex items-center m-[10px_0]">
            {navLinks.map((el, index) => (
              <NavHashLink
                smooth
                key={index}
                to={el.link}
                className={`${({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-[#FD6F00]"
                    : ""} text-[#959595] p-[20px_30px] transition-all duration-300 cursor-pointer  text-[20px] font-medium  hover:text-[#FD6F00]`}
              >
                {el.label}
              </NavHashLink>
            ))}
          </nav>

          <div className="flex items-center gap-5 mb-15">
            <div className="bg-[#1C1A19FF] flex items-center justify-center w-10 h-10 rounded-[50%] border border-[#575757]">
              <a href="">
                <img className="w-6 h-6" src={instagramIcon} alt="" />
              </a>
            </div>
            <div className="bg-[#1C1A19FF] flex items-center justify-center w-10 h-10 rounded-[50%] border border-[#575757]">
              <a href="">
                <img className="w-6 h-6" src={linkedinIcon} alt="" />
              </a>
            </div>
          </div>

          <div className="flex gap-10">
            <div className="flex gap-3">
              <img src={mailIcon} alt="" />
              <span className="text-[20px] font-bold text-[#959595]">
                xusanyarashov1@gmail.com
              </span>
            </div>
            <div className="flex gap-3">
              <img src={phoneIcon} alt="" />
              <span className="text-[20px] font-bold text-[#959595]">
                +998 93 164 03 49
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
