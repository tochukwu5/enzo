export const Why3 = () => {
  return (
    <>
      <div className="bg-blue-900 p-11 flex flex-col justify-center items-center overflow-hidden">
        <div className="max-w-[1200px] w-full flex flex-col justify-center items-center">
          <div className="pt-20 pb-10 text-white text-center w-2/3">
            <h2 className=" text-5xl p-4">Why US ?</h2>
            <div className="p-5 text-xl">
              <p>
                We combine global expertise with a deep understanding of your business needs. 
                From software development to creative design and strategic planning, Enzo Solutions Group
                 delivers professionals who are ready to tackle your most critical projects. 
                 
              </p>
              <br />
              <p>
                Our focus is simple: quality, reliability, and measurable results for every client we serve.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10">
            <button className="bg-green-400 hover:bg-opacity-80 rounded px-16 py-2 w-fit text-white text-center text-xl ">
              Hire Talent
            </button>
            {/* <button className="border rounded px-12 py-2 w-fit text-white text-center text-xl ">
              Apply as a Freelance
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};
