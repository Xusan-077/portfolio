import useEmblaCarousel from "embla-carousel-react";

import portfolioImg1 from "../assets/images/portfolioImg-1.png";
import portfolioImg2 from "../assets/images/portfolioImg-2.png";
import portfolioImg3 from "../assets/images/portfolioImg-3.png";
import portfolioImg4 from "../assets/images/portfolioImg-4.png";
import portfolioImg5 from "../assets/images/portfolioImg-5.png";
import portfolioImg6 from "../assets/images/portfolioImg-6.png";
import portfolioImg7 from "../assets/images/portfolioImg-7.png";
import portfolioImg8 from "../assets/images/portfolioImg-8.png";
import portfolioImg9 from "../assets/images/portfolioImg-9.png";
import portfolioImg10 from "../assets/images/portfolioImg-10.png";
import portfolioImg11 from "../assets/images/portfolioImg-11.png";

interface Iportfolios {
  image: string;
  name: string;
  link: string;
}

export default function Portfolio() {
  const portfolios: Iportfolios[] = [
    {
      link: "https://project-of-weather.netlify.app",
      image: portfolioImg1,
      name: "Weather",
    },
    {
      link: "https://first-reactproject.netlify.app",
      image: portfolioImg2,
      name: "Logoipsum",
    },
    {
      link: "https://second-reactproject.netlify.app",
      image: portfolioImg3,
      name: "Royal Park",
    },
    {
      link: "https://positivus-project.netlify.app",
      image: portfolioImg4,
      name: "Positivus",
    },
    {
      link: "https://project-of-foods.netlify.app",
      image: portfolioImg5,
      name: "Restaurant",
    },
    {
      link: "https://project-woodendot.netlify.app",
      image: portfolioImg6,
      name: "Woodendot",
    },
    {
      link: "https://project-orderuk.netlify.app",
      image: portfolioImg7,
      name: "Order",
    },
    {
      link: "https://first-project-router.netlify.app",
      image: portfolioImg8,
      name: "Finsweet",
    },
    {
      link: "https://project-online-shop.netlify.app",
      image: portfolioImg9,
      name: "Uzum market clone",
    },
    {
      link: "https://project-of-seedra.netlify.app",
      image: portfolioImg10,
      name: "Seedra",
    },
    {
      link: "https://full-library-project.netlify.app",
      image: portfolioImg11,
      name: "Library Space",
    },
  ];

  const [emblaRef] = useEmblaCarousel({
    align: "start",
    breakpoints: {
      "(min-width: 550px)": { active: false },
    },
  });

  return (
    <section id="portfolio" className="scroll-mt-30">
      <div className="container">
        <div className="mb-30 max-[768px]:mb-25">
          <div className="">
            <h2 className="text-[#FEFEFE] text-[40px] font-bold mb-10 text-center">
              Portfolio
            </h2>
          </div>

          <div className="max-[550px]:hidden">
            <ul className="grid grid-cols-3 gap-4 max-[1024px]:grid-cols-2">
              {portfolios.map((el, index) => (
                <li
                  key={`${index}-${el.name}`}
                  className="flex-[0_0_85%] min-w-0 min-[550px]:flex-none bg-[#252525] rounded-xl overflow-hidden border border-transparent hover:border-[#FD6F00] transition-all group shadow-lg"
                >
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={el.image}
                        alt={el.name}
                        className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white bg-[#FD6F00] px-4 py-2 rounded-full text-sm font-bold">
                          View Project
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex items-center justify-between bg-[#252525]">
                      <h3 className="text-[18px] font-bold text-[#C6C6C6] group-hover:text-[#FD6F00] transition-colors">
                        {el.name}
                      </h3>
                      <div className="w-8 h-8 rounded-full border border-[#575757] flex items-center justify-center group-hover:bg-[#FD6F00] group-hover:border-[#FD6F00] transition-all">
                        <span className="text-[#C6C6C6] group-hover:text-white">
                          →
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="max-[550px]:block hidden overflow-hidden"
            ref={emblaRef}
          >
            <ul className="flex flex-row min-[550px]:grid min-[550px]:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolios.map((el, index) => (
                <li
                  key={`${index}-${el.name}`}
                  className="flex-[0_0_85%] min-w-0 min-[550px]:flex-none bg-[#252525] rounded-xl overflow-hidden border border-transparent hover:border-[#FD6F00] transition-all group shadow-lg"
                >
                  <a
                    href={el.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={el.image}
                        alt={el.name}
                        className="w-full h-56 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="text-white bg-[#FD6F00] px-4 py-2 rounded-full text-sm font-bold">
                          View Project
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex items-center justify-between bg-[#252525]">
                      <h3 className="text-[18px] font-bold text-[#C6C6C6] group-hover:text-[#FD6F00] transition-colors">
                        {el.name}
                      </h3>
                      <div className="w-8 h-8 rounded-full border border-[#575757] flex items-center justify-center group-hover:bg-[#FD6F00] group-hover:border-[#FD6F00] transition-all">
                        <span className="text-[#C6C6C6] group-hover:text-white">
                          →
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
