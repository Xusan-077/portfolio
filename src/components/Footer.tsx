import mailIcon from "../assets/icons/mail.svg";
import phoneIcon from "../assets/icons/phone.svg";
import { HashLink } from "react-router-hash-link";
import { NavLinks, SocialMedia } from "../constants";
import SocialMediaLink from "./SocialMediaLink";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1BFF]">
      <div className="container">
        <div className="flex flex-col items-center p-[40px_0]">
          <h2 className="text-[30px] font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            XY.dev
          </h2>

          <nav className="flex flex-wrap max-[350px]:flex-col justify-center items-center m-[10px_0]">
            {NavLinks.map((el, index) => (
              <HashLink
                smooth
                key={index}
                to={el.link}
                className={`${({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-[#FD6F00]"
                    : ""} text-[#959595] p-[20px_30px] transition-all duration-300 cursor-pointer  text-[20px] font-medium  hover:text-[#FD6F00]`}
              >
                {el.label}
              </HashLink>
            ))}
          </nav>

          <div className="flex items-center gap-5 mb-15">
            {SocialMedia.map((el) => (
              <SocialMediaLink item={el} key={el.id} />
            ))}
          </div>

          <div className="flex gap-10 flex-wrap justify-center">
            <div className="flex gap-3">
              <img className="w-6 h-6" src={mailIcon} alt="" />
              <span className="text-[20px] max-[425px]:text-[16px] font-bold text-[#959595]">
                xusanyarashov1@gmail.com
              </span>
            </div>
            <div className="flex gap-3">
              <img className="w-6 h-6" src={phoneIcon} alt="" />
              <span className="text-[20px] max-[425px]:text-[16px] font-bold text-[#959595]">
                +998 93 164 03 49
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
