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
        <div className="pt-8 mb-30">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-[40px] font-bold text-[#FEFEFE]">About Me</h2>
            <p className="text-[20px] font-medium text-[#707070] max-w-137.5 text-center">
              Front-End Developer with a strong focus on building clean,
              responsive, and user-friendly interfaces.
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
                Hi, I’m Xusan Yarashov, a Front-End Developer. I studied web
                development at PDP School, where I built a strong foundation in
                modern front-end technologies. After that, I continued my
                education at Tajot Ta’lim, further enhancing my practical skills
                through real-world projects.
                <br />
                <br />
                Currently, I am working as a Junior Front-End Developer,
                specializing in building responsive, user-friendly, and
                high-performance web applications. I have hands-on experience
                with HTML, CSS, Sass, Bootstrap, JavaScript, TypeScript, React,
                Next.js, and React Native.
                <br />
                <br />I am passionate about writing clean, maintainable code,
                following best practices, and continuously learning new
                technologies to improve my development skills and deliver better
                user experiences.
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
