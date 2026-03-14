import { useState } from "react";
import { ExternalLink } from "lucide-react";

export const PortfolioSection = () => {

  const categories = [
    "All",
    "Sales & Marketing",
    "Web Development",
    "Graphic Design",
  ];

  const projects = [
    {
      title: "Food Delivery Website",
      description: "Modern responsive business website built with React and Tailwind.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",
      link: "https://food-delivery-frontend-qogu.onrender.com/"
    },
    {
      title: "Brand Identity Design",
      description: "Complete branding package including logo, colors, and brand system.",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      link: "#"
    },
    {
      title: "Lead Generation Campaign",
      description: "Sales funnel and outreach strategy that increased qualified leads.",
      category: "Sales & Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full eCommerce solution with payment integration and analytics.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#"
    },
    {
      title: "Social Media Graphics",
      description: "Creative marketing graphics designed for digital campaigns.",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      link: "#"
    },
        {
      title: "Lead Generation Campaign",
      description: "Sales funnel and outreach strategy that increased qualified leads.",
      category: "Sales & Marketing",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full eCommerce solution with payment integration and analytics.",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      link: "#"
    },
    {
      title: "Social Media Graphics",
      description: "Creative marketing graphics designed for digital campaigns.",
      category: "Graphic Design",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      link: "#"
    },
    {
      title: "Growth Marketing Strategy",
      description: "Strategic marketing plan designed to scale business growth.",
      category: "Sales & Marketing",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984",
      link: "#"
    }
  ];

  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="bg-white py-24 px-6 flex justify-center">
      <div className="max-w-[1200px] w-full">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Our Portfolio
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Explore some of the projects we have delivered for businesses
            across web development, design, and marketing.
          </p>
        </div>

        {/* Filters */}
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm transition
              ${
                active === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

          {filteredProjects.map((project, index) => (

            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                />

                {/* Link icon */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute top-4 right-4 bg-white shadow p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-3">
                  {project.description}
                </p>

                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};