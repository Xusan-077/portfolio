import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface Props {
  name: string;
  percentage: number;
}

function CircularSkill({ name, percentage }: Props) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 mb-4">
        <CircularProgressbar
          value={percentage}
          text={percentage + "%"}
          styles={buildStyles({
            pathColor: "#FD6F00",
            textColor: "#FD6F00",
            trailColor: "#333333",
            textSize: "25px",
          })}
        />
      </div>
      <span className="text-[#959595] font-bold">{name}</span>
    </div>
  );
}

export default CircularSkill;
