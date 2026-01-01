import portfolioImg from "../assets/images/portfolioImg.png";

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

  return (
    <section id="portfolio" className="">
      <div className="container">
        <div className="pt-8 mb-30">
          <div className="">
            <h2 className="text-[#FEFEFE] text-[40px] font-bold mb-10 text-center">
              Portfolio
            </h2>
          </div>
          <div className="">
            <ul className="grid grid-cols-3 gap-4">
              {portfolios.map((el, index) => (
                <li
                  key={`${index}-${el.name}`}
                  className="bg-[#252525FF] rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                >
                  <a href={el.link} target="_blank" rel="noopener noreferrer">
                    {" "}
                    {/* <a> tegi qo'shildi */}
                    <img
                      src={el.image}
                      alt={el.name}
                      className="w-full h-65 rounded-t-lg object-cover"
                    />
                    <div className="p-4 flex items-center justify-between">
                      <h3 className="text-[16px] font-bold text-[#C6C6C6]">
                        {el.name}
                      </h3>
                      <span className="text-[#C6C6C6]">→</span>
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
