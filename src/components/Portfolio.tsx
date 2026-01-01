import portfolioImg from "../assets/images/portfolioImg.png";

interface Iportfolios {
  image: string;
  name: string;
  category: string;
}

export default function Portfolio() {
  const portfolios: Iportfolios[] = [
    {
      image: portfolioImg,
      name: "Name Project",
      category: "category",
    },
    {
      image: portfolioImg,
      name: "Name Project",
      category: "category",
    },
    {
      image: portfolioImg,
      name: "Name Project",
      category: "category",
    },
    {
      image: portfolioImg,
      name: "Name Project",
      category: "category",
    },
    {
      image: portfolioImg,
      name: "Name Project",
      category: "category",
    },
    {
      image: portfolioImg,
      name: "Name Project",
      category: "category",
    },
  ];

  return (
    <section id="portfolio" className="">
      <div className="container">
        <div className="mb-38">
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
                  className="bg-[#252525FF] rounded-t-[30px] rounded-b-xl"
                >
                  <img src={el.image} alt="" className="w-full h-120" />
                  <div className="p-4 flex items-center justify-between">
                    <h3 className="text-[16px] font-bold text-[#C6C6C6]">
                      {el.name}
                    </h3>
                    <span className="text-[16px] font-semibold text-[#959595]">
                      {el.category}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
