import scene from "../assets/code.jpg";

export const BgImage: React.FC = () => {
  return (
    <>
      <div className="w-full h-[500px] sticky top-0 left-0 z-30 mt-[-56px]">
        <img
          className="object-cover w-full h-full blur-[2pt]"
          src={scene}
          alt=""
        />
      </div>
    </>
  );
};
