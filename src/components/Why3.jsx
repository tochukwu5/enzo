import { ProjectModal } from "./StartProjectModal";
import { useState } from "react";
export const Why3 = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-blue-900 px-6 py-20 flex justify-center items-center">
      <div className="max-w-[1100px] text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-left lg:text-center">
          Why Businesses Choose Enzo Solutions Group
        </h1>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed text-left lg:text-center">
          Enzo Solutions Group helps businesses solve complex challenges by
          assembling and managing expert teams across sales, marketing,
          technology, and operations.
        </p>

        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mt-4 leading-relaxed text-left lg:text-center">
          Instead of struggling to hire and manage multiple freelancers,
          companies partner with Enzo to access experienced professionals,
          strategic oversight, and reliable project execution.
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-6">
                     <ProjectModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
          <button
          onClick={() => setOpen(true)}
          className="bg-green-500 hover:bg-green-600 px-10 py-3 rounded text-lg font-medium">
           Start Your Project
          </button>
     
            <a href="https://meetings-eu1.hubspot.com/paul-ebehiremen" target="_blank" rel="noopener noreferrer">
              <button className="border border-white hover:bg-white hover:text-blue-900 px-10 py-3 rounded text-lg">
                Book a Strategy Call
              </button>
            </a>
        </div>
      </div>
    </div>
  );
};