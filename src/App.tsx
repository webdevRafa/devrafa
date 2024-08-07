import { BgImage } from "./components/BgImage";
import { Navbar } from "./components/Navbar";

import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-[400px]">
        <BgImage />
      </div>

      <div className="h-[4000px] bg-white relative z-40 mt-20">
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mx-auto max-w-[1200px]">
          <div className="w-full">
            <img className="min-w-[300px]" src={logo} alt="" />
          </div>
          <div className="shadow-md py-[50px]">
            <h1 className="text-center text-3xl mb-5 font-bold text-dark-green">
              WELCOME
            </h1>
            <p className="mx-[60px]">
              This is my first project. I am excited to showcase what I am
              capable of and contributing to the world.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
