import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";

import person from "../assets/images/person.png";

export default function () {
  return (
    <section id="home">
      <div className="container">
        <div className="flex items-center pt-40 gap-8 mb-38">
          <div className="relative">
            <div className="absolute top-0 left-0 w-150 h-150 opacity-8 bg-[#FD6F00] rounded-full blur-[120px] -z-10"></div>
            <div className="mb-6">
              <span className="block text-[24px] font-semibold text-[#707070]">
                Hi I am
              </span>
              <span className="text-[28px] font-bold text-[#959595]">
                Yarashov Xusan
              </span>
            </div>
            <div className="mb-4.5">
              <h1 className="bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text leading-22 text-transparent text-[70px] font-black">
                Front-End developer
              </h1>
            </div>
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
            <div className="mb-20">
              <button className="border-2 cursor-pointer border-[#959595] p-[12px_40px] rounded-lg text-[#959595] text-5 font-bold">
                Downlead CV
              </button>
            </div>
            <div className="grid grid-cols-3 bg-[#1B1B1BFF] rounded-lg p-6">
              <div className="border-r-2 border-r-[#959595] pr-7.5">
                <span className="text-[#FD6F00] block text-[24px] font-extrabold mb-3">
                  1+
                </span>
                <span className="block text-5 font-bold text-[#DFDFDF]">
                  Experiences
                </span>
              </div>
              <div className="border-r-2 border-r-[#959595] pl-7.5 pr-7.5">
                <span className="text-[#FD6F00] block text-[24px] font-extrabold mb-3">
                  20+
                </span>
                <span className="block text-5 font-bold text-[#DFDFDF]">
                  Project done
                </span>
              </div>
              <div className="pl-7.5">
                <span className="text-[#FD6F00] block text-[24px] font-extrabold mb-3">
                  80+
                </span>
                <span className="block text-5 font-bold text-[#DFDFDF]">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-[#1B1B1BFF] w-155 h-155 rounded-[50%]"></div>
            <div className="absolute -top-40 left-12.5">
              <img className="" src={person} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
