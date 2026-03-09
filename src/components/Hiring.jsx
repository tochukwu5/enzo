import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hiring() {
  return (
    <>
      <div className="bg-white p-11 flex flex-col justify-center items-center overflow:hidden">
        <div className="max-w-[1200px]">
          <h2 className="text-4xl text-center font-semibold">
            How It Works
          </h2>

          <div className="flex flex-col gap-6 md:flex-row">
            <div>
              <div className="flex items-center my-11">
                <hr className="w-full border-t border-blue-500 flex items-center justify-center" />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-20 h-20 bg-white text-blue-500"
                />
                <hr className="w-full border-1 border-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 text-center">
                Tell Us Your Project
              </h3>
              <p className="text-gray-500">
                Share your goals and business challenges.
              </p>
            </div>
            <div>
              <div className="flex items-center  my-11">
                <hr className="w-full border-t border-blue-500 flex items-center justify-center" />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-20 h-20 bg-white text-blue-500"
                />
                <hr className="w-full border-1 border-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 text-center">
                We Assemble the Right Experts
              </h3>
              <p className="text-gray-500">
                We select the best professionals from our vetted network.
              </p>
            </div>
             <div>
              <div className="flex items-center  my-11">
                <hr className="w-full border-t border-blue-500 flex items-center justify-center" />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-20 h-20 bg-white text-blue-500"
                />
                <hr className="w-full border-1 border-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 text-center">
                We Manage Execution
              </h3>
              <p className="text-gray-500">
                Our team oversees communication, delivery, and quality.
              </p>
            </div>
            <div>
              <div className="flex items-center  my-11">
                <hr className="w-full border-t border-blue-500 flex items-center justify-center" />
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="w-20 h-20 bg-white text-blue-500"
                />
                <hr className="w-full border-1 border-blue-500" />
              </div>
              <h3 className="font-semibold text-xl text-gray-800 text-center">
                You Get Results
              </h3>
              <p className="text-gray-500">
                Your project is delivered efficiently and professionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiring;
