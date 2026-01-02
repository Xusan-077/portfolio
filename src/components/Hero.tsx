import linkedinIcon from "../assets/icons/linkedin.svg";
import instagramIcon from "../assets/icons/instagram.svg";

import TechOrbit from "./TechOrbit";

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-30">
      <div className="container">
        <div className="max-[1024px]:block flex-row-reverse flex items-center gap-8 mb-30 max-[768px]:mb-25">
          <TechOrbit />
          <div className="relative max-[425px]:flex max-[425px]:flex-col max-[425px]:items-center">
            <div className="absolute top-0 left-0 max-w-150 w-full h-150 opacity-8 bg-[#FD6F00] rounded-full blur-[120px] -z-10"></div>
            <div className="mb-6">
              <span className="max-[425px]:text-[16px] max-[425px]:text-center block text-[24px] font-semibold text-[#707070]">
                Hi I am
              </span>
              <span className="max-[425px]:text-[20px] text-[28px] font-bold text-[#959595]">
                Yarashov Xusan
              </span>
            </div>
            <div className="mb-4.5">
              <h1 className="max-[425px]:text-[50px] max-[425px]:text-center max-[425px]:leading-18 bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] bg-clip-text leading-22 text-transparent text-[70px] font-black">
                Front-End developer
              </h1>
            </div>
            <div className="flex items-center gap-5 mb-15 max-[425px]:mb-10">
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
            <div className="grid grid-cols-3 max-[425px]:grid-cols-1 max-[425px]:w-full max-[425px]:text-center max-[550px]:p-4 bg-[#1B1B1BFF] rounded-lg p-6">
              <div className="border-r-2 border-r-[#959595] pr-7.5 max-[550px]:pr-4 max-[425px]:p-0 max-[425px]:border-b-2 max-[425px]:border-r-transparent max-[425px]:pb-4 max-[425px]:mb-4 max-[425px]:border-b-[#959595]">
                <span className="text-[#FD6F00] block text-[24px] max-[550px]:text-[20px] font-extrabold mb-3">
                  1+
                </span>
                <span className="block text-5 max-[550px]:text-4 font-bold text-[#DFDFDF]">
                  Experiences
                </span>
              </div>
              <div className="border-r-2 border-r-[#959595] pr-7.5 pl-7.5 max-[550px]:pr-4 max-[425px]:p-0 max-[425px]:border-b-2 max-[425px]:border-r-transparent max-[425px]:pb-4 max-[425px]:mb-4 max-[425px]:border-b-[#959595]">
                <span className="text-[#FD6F00] block text-[24px] max-[550px]:text-[20px] font-extrabold mb-3">
                  1+
                </span>
                <span className="block max-[550px]:text-4 text-5 font-bold text-[#DFDFDF]">
                  Project done
                </span>
              </div>
              <div className="pl-7.5 max-[550px]:pl-4 max-[425px]:p-0 max-[425px]:border-b-2 max-[425px]:border-b-[#959595] max-[425px]:pb-4 max-[425px]:mb-4 max-[425px]:border-b-[#959595]">
                <span className="text-[#FD6F00] block text-[24px] max-[550px]:text-[20px] font-extrabold mb-3">
                  1+
                </span>
                <span className="block max-[550px]:text-4 text-5 font-bold text-[#DFDFDF]">
                  Happy Clients
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
