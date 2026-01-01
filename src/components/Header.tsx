import { NavHashLink } from "react-router-hash-link";

interface Inav {
  label: string;
  link: string;
}

export default function Header() {
  const nav: Inav[] = [
    {
      label: "Home",
      link: "/#home",
    },
    {
      label: "About me",
      link: "/#about",
    },
    {
      label: "Portfolio",
      link: "/#portfolio",
    },
  ];

  return (
    <header className="">
      <div className="container">
        <div className="p-[20px_0] flex items-center justify-between mb-10">
          <h2 className="text-[30px] font-bold bg-gradient-to-r from-[#FA6E00] to-[#E60026] bg-clip-text text-transparent">
            Logo
          </h2>

          <nav className="">
            {nav.map((el, index) => (
              <NavHashLink
                smooth
                key={index}
                to={el.link}
                className={`${({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "text-[#FD6F00]"
                    : ""} text-[#959595] p-[20px_30px] transition-all duration-300 cursor-pointer  text-[20px] font-medium  hover:text-[#FD6F00]`}
              >
                {el.label}
              </NavHashLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
