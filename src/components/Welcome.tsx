import { useEffect, useState } from "react";
import softlogo from "../assets/devblock.svg";

export const Welcome: React.FC = () => {
  // STATE
  const [scrolled, setScrolled] = useState(false);
  // TOGGLE SCROLL W USEEFFECT
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // ADD EVENT LISTENER
    window.addEventListener("scroll", handleScroll);

    // CLEAN UP EVENT LISTENER
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="relative z-40 pt-20 flex gap-20 mx-auto items-center justify-between w-[90%] max-w-[1200px]">
        <div>
          <img className="w-full h-full" src={softlogo} alt="" />
        </div>
        <div
          className={`p-4 transition-colors duration-300 ${
            scrolled ? "text-white" : "text-dark-green"
          }`}
        >
          <h1 className="text-6xl font-bold">WELCOME</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            cumque, quisquam beatae asperiores nihil molestiae. Libero nemo
            sapiente impedit dignissimos!
          </p>
        </div>
      </div>
    </>
  );
};
