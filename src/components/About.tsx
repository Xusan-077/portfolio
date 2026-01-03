import downloadIcon from "../assets/icons/Download.svg";
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

  const style =
    "bg-gradient-to-r font-semibold from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent cursor-pointer";

  const style2 =
    "bg-gradient-to-r font-semibold from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent";

  return (
    <section id="about" className="scroll-mt-30">
      <div className="container">
        <div className="mb-30 max-[768px]:mb-25">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-[40px] font-bold text-[#FEFEFE]">About Me</h2>
            <p className="text-[20px] font-medium text-gray-400 max-w-137.5 text-center">
              {" "}
              Front-End Developer with a strong focus on building clean,
              responsive, and user-friendly interfaces.
            </p>
          </div>
          <div className="max-[1024px]:block flex items-center justify-between mb-25 gap-10">
            <div className="max-[1024px]:mb-20">
              <p className="text-[20px] max-[1024px]:max-w-full max-w-155 font-medium text-[#959595] mb-10">
                Hi, I’m Xusan Yarashov, a Front-End Developer. I studied one
                year web development at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit to pdp school website`}
                  href="https://school.pdp.uz"
                  className={style}
                >
                  PDP School
                </a>
                , where I built a strong foundation in modern front-end
                technologies. After that, I continued my education at{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit to najottalim website`}
                  href="https://najottalim.uz"
                  className={style}
                >
                  Tajot Ta’lim
                </a>
                , further enhancing my practical skills through real-world
                projects.
                <br />
                <br />
                Currently, I am working as a{" "}
                <span className={style2}>Junior Front-End Developer</span> ,
                specializing in building responsive, user-friendly, and
                high-performance web applications. I have hands-on experience
                with <span className={style2}>HTML</span> ,{" "}
                <span className={style2}>CSS</span> ,{" "}
                <span className={style2}>Sass</span> ,{" "}
                <span className={style2}>Bootstrap</span> ,
                <span className={style2}>JavaScript</span> ,{" "}
                <span className={style2}>TypeScript</span> ,{" "}
                <span className={style2}>React</span> ,{" "}
                <span className={style2}>Next.js</span> , and{" "}
                <span className={style2}>React Native</span> .
                <br />
                <br />I am passionate about writing clean, maintainable code,
                following best practices, and continuously learning new
                technologies to improve my development skills and deliver better
                user experiences.
              </p>
              <div className="max-[1024px]:flex max-[1024px]:justify-end">
                <button className="flex items-center rounded-lg p-[12px_30px] bg-gradient-to-r from-[#FD6F00] to-[#E46400]">
                  <img src={downloadIcon} alt="" />
                  <span className="text-white ml-2.5 block text-[20px] font-bold">
                    Download CV
                  </span>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-8 max-[450px]:grid-cols-2 max-[768px]:grid-cols-3">
              {percentages.map((el, index) => (
                <div
                  key={`${index}-${el.name}`}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <SkillBar name={el.name} percentage={el.percentage} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
