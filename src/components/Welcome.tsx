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
      <div className="relative z-40 pt-20 flex flex-col md:flex-row gap-20 mx-auto items-center justify-between w-[90%] max-w-[1200px]">
        <div
          className={`p-4 transition-colors duration-300 ${
            scrolled ? "text-white" : "text-dark-green"
          }`}
        >
          <h1 className="text-6xl font-bold mb-3">WELCOME</h1>
          <p>
            I’m a web developer who’s all about creating sleek, interactive
            websites. While I specialize in front-end development, I’m also into
            building secure login systems and managing data with Firebase. I
            love bringing ideas to life with clean designs and smooth user
            experiences. Thanks for dropping by!
          </p>
        </div>

        <div className="w-full">
          <img className="max-w-[300px]" src={softlogo} alt="" />
        </div>
      </div>
    </>
  );
};
