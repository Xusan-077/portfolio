import { useEffect, useState } from "react";

export function NativeMouseBlur() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none opacity-30 bg-gradient-to-r from-[#984300] via-[#FD6F00] to-[#CA5900] fixed rounded-full transition-transform duration-200 ease-out"
      style={{
        width: "100px",
        height: "100px",
        filter: "blur(60px)",
        left: 0,
        top: 0,
        transform: `translate(${position.x - 50}px, ${position.y - 50}px)`,
      }}
    />
  );
}
