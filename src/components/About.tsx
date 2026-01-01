import downloadIcon from "../assets/icons/Download.svg";
import person from "../assets/images/person-2.png";
import SkillBar from "./SkillBar";

interface Ipercentages {
  name: string;
  percentage: number;
}

export default function About() {
  const percentages: Ipercentages[] = [
    {
      name: "HTML",
      percentage: 75,
    },
    {
      name: "CSS",
      percentage: 70,
    },
    {
      name: "SCSS",
      percentage: 75,
    },
    {
      name: "BOOTSTRAP",
      percentage: 60,
    },
    {
      name: "JAVASCRIPT",
      percentage: 70,
    },
    {
      name: "TAILWIND",
      percentage: 85,
    },
    {
      name: "REACT.JS",
      percentage: 80,
    },
    {
      name: "NEXT.JS",
      percentage: 80,
    },
    {
      name: "REACT NATIVE",
      percentage: 50,
    },
  ];

  return (
    <section id="about" className="">
      <div className="container">
        <div className="mb-38">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-[40px] font-bold text-[#FEFEFE]">About Me</h2>
            <p className="text-[20px] font-medium text-[#707070]">
              User Interface and User Experience and Also video editing
            </p>
          </div>
          <div className="flex items-center justify-between mb-25">
            <div className="relative">
              <div className="absolute top-0 left-0">
                <img className=" w-138 h-200" src={person} alt="" />
              </div>
              <div className="bg-[#1B1B1BFF] w-138 h-200 rounded-t-[40%]"></div>
            </div>
            <div className="">
              <p className="text-[20px] max-w-155 font-medium text-[#959595] mb-10">
                A software engineer, the modern-day architect of digital realms,
                navigates the ethereal landscapes of code, sculpting intangible
                structures that shape our technological world. With fingers
                poised over keyboards like virtuoso pianists, they compose
                symphonies of logic, their minds a labyrinth of algorithms and
                solutions.Their canvas is a screen, a vast expanse where lines
                of code dance in intricate patterns, weaving the fabric of
                programs and applications. Each keystroke is a brushstroke,
                crafting intricate architectures and breathing life into
                innovative designs.In this digital atelier, they don the mantle
                of problem solvers, confronting bugs and glitches like valiant
                knights in an ever-evolving quest for perfection. Debugging
                becomes a noble pursuit, unraveling the mysteries hidden within
                the tangled webs of code. designs.In this digital atelier.
              </p>
              <button className="flex items-center rounded-lg p-[12px_30px] bg-gradient-to-r from-[#FD6F00] to-[#E46400]">
                <img src={downloadIcon} alt="" />
                <span className="text-white ml-2.5 block text-[20px] font-bold">
                  Download CV
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-9">
            {percentages.map((el, index) => (
              <SkillBar
                key={`${index}-${el.name}`}
                name={el.name}
                percentage={el.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
