interface Iicons {
  src: string;
  name: string;
}

export default function TechOrbit() {
  const icons: Iicons[] = [
    { src: "https://cdn.worldvectorlogo.com/logos/html-1.svg", name: "HTML" },
    { src: "https://cdn.worldvectorlogo.com/logos/css-3.svg", name: "CSS" },
    {
      src: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
      name: "JS",
    },
    { src: "https://cdn.worldvectorlogo.com/logos/typescript.svg", name: "TS" },
    { src: "https://cdn.worldvectorlogo.com/logos/react-2.svg", name: "React" },
    { src: "https://cdn.worldvectorlogo.com/logos/next-js.svg", name: "Next" },
    {
      src: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
      name: "Tailwind",
    },
    {
      src: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
      name: "Native",
    },
  ];

  return (
    <div className="max-[1024px]:w-full relative w-[60%] h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Markazdagi doira - 320px uchun kichraytirildi */}
      <div className="relative z-10 w-[140px] h-[140px] md:w-[300px] md:h-[300px] bg-[#FD6F00]/10 rounded-full flex items-center justify-center animate-pulse">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FD6F00"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-[80px] h-[80px] md:w-[200px] md:h-[200px]"
        >
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      </div>

      {/* Orbit chizig'i - 320px uchun o'lchami 280px ga tushirildi */}
      <div className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] border border-dashed border-[#575757] rounded-full animate-[spin_20s_linear_infinite] hover:[animation-play-state:paused]">
        {icons.map((el, index) => {
          const angle = (index * 360) / icons.length;

          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-10 h-10 md:w-14 md:h-14 -ml-5 -mt-5 md:-ml-7 md:-mt-7"
              style={{
                // translate(130px) - 320px ekranlar uchun (280px / 2 dan biroz kamroq)
                // Katta ekranlarda (md) translate(175px) yoki 225px ishlatiladi
                transform: `rotate(${angle}deg) translate(${
                  window.innerWidth < 768 ? "130px" : "175px"
                }) rotate(-${angle}deg)`,
              }}
            >
              <div className="bg-[#1B1B1B] p-1.5 md:p-2 rounded-lg border border-[#575757] shadow-lg hover:border-[#FD6F00] transition-colors duration-300">
                <img
                  src={el.src}
                  className="w-full h-full object-contain"
                  alt={el.name}
                  title={el.name}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
