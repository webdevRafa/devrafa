import scene from "../assets/code.jpg";

export const BgImage: React.FC = () => {
  return (
    <>
      <div className="w-full h-[400px] fixed top-0 left-0 z-30">
        <img className="object-cover w-full h-full" src={scene} alt="" />
      </div>
    </>
  );
};
