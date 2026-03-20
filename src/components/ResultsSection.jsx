export const ResultsSection = () => {
  const results = [
    {
      title: "Sales Development Projects",
      text: "Implemented outbound outreach strategies that helped generate consistent meetings with qualified prospects."
    },
    {
      title: "Lead Generation Systems",
      text: "Built scalable lead generation processes using email outreach and LinkedIn prospecting."
    },
    {
      title: "Website Optimization Projects",
      text: "Improved website structure and user experience to increase engagement and conversions."
    }
  ];

  const metrics = [
    { number: "10+", label: "Years Experience" },
    { number: "120+", label: "Projects Completed" },
    { number: "30+", label: "Team Experts" },
    { number: "95%", label: "Client Satisfaction" }
  ];

  return (
    <div className="w-full">

      {/* Metrics Banner */}
      <div className="bg-blue-900 text-white py-14 px-6 flex justify-center">
        <div className="max-w-[1200px] w-full grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {metrics.map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-bold">{item.number}</h3>
              <p className="mt-2 text-lg text-blue-200">{item.label}</p>
            </div>
          ))}
        </div>
      </div>


      {/* Results Section */}
      <div className="py-24 px-6 bg-gray-50 flex justify-center">
        <div className="max-w-[1200px] w-full">

          <h2 className="text-4xl font-semibold text-center mb-16">
            Results That Drive Business Growth
          </h2>


          {/* Charts */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">

            {/* Performance Chart */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Project Performance
              </h3>

              <div className="space-y-6">

                <div>
                  <p className="mb-2 font-medium">Sales Development</p>
                  <div className="w-full bg-gray-200 h-3 rounded">
                    <div className="bg-blue-600 h-3 rounded w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-medium">Lead Generation Systems</p>
                  <div className="w-full bg-gray-200 h-3 rounded">
                    <div className="bg-blue-500 h-3 rounded w-[78%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-medium">Website Optimization</p>
                  <div className="w-full bg-gray-200 h-3 rounded">
                    <div className="bg-blue-400 h-3 rounded w-[72%]"></div>
                  </div>
                </div>

              </div>
            </div>


            {/* Client Satisfaction */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Client Success
              </h3>

              <div className="bg-white p-8 rounded-lg shadow">

                <p className="text-gray-600 mb-6">
                  At Enzo Solutions Network, we focus on delivering measurable
                  results for businesses through strategic development,
                  lead generation, and digital solutions that help companies
                  scale and grow.
                </p>

                <div className="mb-4">
                  <p className="mb-2 font-medium">Client Satisfaction</p>
                  <div className="w-full bg-gray-200 h-4 rounded">
                    <div className="bg-blue-600 h-4 rounded w-[95%]"></div>
                  </div>
                </div>

                <div>
                  <p className="mb-2 font-medium">Project Success Rate</p>
                  <div className="w-full bg-gray-200 h-4 rounded">
                    <div className="bg-blue-500 h-4 rounded w-[92%]"></div>
                  </div>
                </div>

              </div>
            </div>

          </div>


          {/* Result Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {results.map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
};