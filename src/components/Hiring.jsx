import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Hiring() {
  return (
    <>
      <div className="bg-white p-11 flex flex-col justify-center items-center overflow:hidden">
        <div className="max-w-[1200px]">
          <h2 className="text-4xl text-center font-semibold">
            Hiring Made Simple
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
                Speak With Our Talent Specialists
              </h3>
              <p className="text-gray-500">
                Contact us through our website form, email, or social media, and our team will review your 
                project requirements to connect you with the right experts for your needs.
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
                Get Matched With Elite Talent
              </h3>
              <p className="text-gray-500">
                Within a short time, we introduce you to carefully selected professionals who match your project 
                requirements. Our matching process is fast and efficient
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
                Hire With Confidence
              </h3>
              <p className="text-gray-500">
                Start working with your chosen professional on a trial basis to ensure the perfect fit before
                 committing long term.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hiring;
