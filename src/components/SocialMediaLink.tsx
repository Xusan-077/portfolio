import type { ISocialMedia } from "../constants";

export default function SocialMediaLink({ item }: { item: ISocialMedia }) {
  return (
    <div className="bg-[#1C1A19FF] flex items-center justify-center w-10 h-10 rounded-[50%] border border-[#575757]">
      <a
        key={item.id}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit my ${item.label} profile`}
        className={`transition-colors duration-300`}
      >
        <i className={`${item.icon} text-white`}></i>
      </a>
    </div>
  );
}
