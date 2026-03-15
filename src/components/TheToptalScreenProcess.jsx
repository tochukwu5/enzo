export const TheToptalScreenProcess = () => {
  const features = [
   {
    title: "Access to Vetted Experts",
    text: "We work with skilled professionals across sales, marketing, technology, design, and business operations."
  },
  {
    title: "Strategic Project Oversight",
    text: "Every project is guided with structured management to ensure quality delivery and measurable outcomes."
  },
  {
    title: "Flexible Teams for Any Project",
    text: "Whether you need a single specialist or a team of experts, we assemble the right talent for your needs."
  },
  {
    title: "Faster Execution",
    text: "Our streamlined process allows businesses to launch and complete projects quickly without the stress of hiring."
  },
  {
    title: "Reliable Communication and Delivery",
    text: "We prioritize transparency, professionalism, and consistent communication throughout every engagement."
  }
  ];

 return (
  <div className="py-24 px-6 bg-white flex justify-center">
    <div className="max-w-[1100px] w-full">
      <h2 className="text-4xl font-semibold text-center mb-4">
        Why Businesses Work With Enzo
      </h2>

      <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
        Businesses work with Enzo Solutions Group because we combine strategic leadership with expert talent to deliver reliable, high-quality solutions.
      </p>

      <div className="relative">
        <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-blue-200"></div>

        <div className="space-y-5">
          {features.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center z-10">
                {i + 1}
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-md max-w-md">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);
};