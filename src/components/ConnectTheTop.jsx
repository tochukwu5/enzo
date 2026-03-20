import bg from "../assets/img/ConnectTheTopBG.png";
export const ConnectTheTop = () => {
  return (
    <>
      <div className="bg-blue-700 px-3 md:px-16 flex justify-center overflow-hidden">
        <div className="max-w-[1200px] flex justify-center items-center relative ">
          <img
            src={bg}
            alt="background image"
            className="absolute w-full h-full"
          />
          <p className="text-2xl  md:text-5xl text-white text-center py-10 md:p-32 leading-normal">
            Enzo Solutions Network Empowers Businesses with Innovative Digital Solutions Worldwide.
          </p>
        </div>
      </div>
    </>
  );
};
