import softlogo from "../assets/softdr.png";
export const Welcome: React.FC = () => {
  return (
    <>
      {" "}
      <div className=" bg-white relative z-40 mt-20">
        {/* FLEX CONTAINER */}
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mx-auto max-w-[1200px]">
          {/* IMAGE LEFT */}
          <div className="w-full mb-0">
            <img className="min-w-[300px]" src={softlogo} alt="" />
          </div>

          {/* WELCOME MESSAGE RIGHT */}
          <div className="shadow-md md:pb-[30px] w-[90%] mx-auto md:w-full">
            {/* WELCOME */}
            <h1 className="py-2 bg-soft-green text-center text-3xl mb-5 font-bold text-dark-green">
              WELCOME
            </h1>
            {/* PARAGRAPH */}
            <p className="mx-[60px]">
              Hey! I’m a web developer who’s all about creating sleek,
              interactive websites. While I specialize in front-end development,
              I’m also into building secure login systems and managing data with
              Firebase. I love bringing ideas to life with clean designs and
              smooth user experiences. Thanks for dropping by!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
