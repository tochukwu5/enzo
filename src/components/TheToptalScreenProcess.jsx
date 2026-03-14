export const TheToptalScreenProcess = () => {
  const features = [
    {
      title: "Access to Vetted Global Experts",
      text: "Work with experienced professionals across sales, marketing, technology, and operations without the complexity of hiring individually."
    },
    {
      title: "Strategic Project Oversight",
      text: "Every project is guided by experienced leadership to ensure alignment with your business goals and long-term growth."
    },
    {
      title: "Faster Execution",
      text: "Our teams are structured to execute quickly, helping businesses launch projects faster without the delays of traditional hiring."
    },
    {
      title: "Flexible Teams",
      text: "We assemble the right specialists for your project so you always have the skills needed to deliver results."
    },
    {
      title: "Reliable Communication",
      text: "Clear communication and structured workflows ensure transparency and consistent delivery."
    }
  ];

  return (
    <div className="py-24 px-6 bg-white flex justify-center">
      <div className="max-w-[1100px] w-full">
        <h2 className="text-4xl font-semibold text-center mb-16">
          Why Businesses Work With Enzo
        </h2>

        <div className="relative">
          <div className="absolute left-5 md:left-1/2 transform md:-translate-x-1/2 h-full border-l-2 border-blue-200"></div>

          <div className="space-y-5 ">
            {features.map((item, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-6  ${
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