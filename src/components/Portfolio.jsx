import { useState } from "react";
import { ExternalLink } from "lucide-react";
import tochimanna from '../assets/img/Portfolio/tochimanna.png';
import unnestate from '../assets/img/Portfolio/unnestate.png';
import ezek1 from '../assets/img/Portfolio/ezek1.jpeg';
import ezek2 from '../assets/img/Portfolio/ezek2.png';
import ezek3 from '../assets/img/Portfolio/ezek3.jpeg';
import ezek4 from '../assets/img/Portfolio/ezek4.jpeg';
import ezek5 from '../assets/img/Portfolio/ezek5.jpeg';
import b2b from '../assets/img/Portfolio/B2B_Lead.png';
import highticket from '../assets/img/Portfolio/high_ticket.png';
import crmautomation from '../assets/img/Portfolio/CRMAutomation.png';



export const PortfolioSection = () => {

  const categories = [
    "All",
    "Sales & Marketing",
    "Web Development",
    "Graphic Design",
  ];

  const projects = [
    {
      title: "Food Delivery Web Application",
      description: "A responsive food ordering website that allows users to browse meals and place orders easily online.",
      category: "Web Development",
      image: tochimanna,
      link: "https://food-delivery-frontend-qogu.onrender.com/"
    },
    {
      title: "Laptop & Phone Repair Design",
      description: "A modern promotional graphic for laptop and smartphone repair services, highlighting fast and reliable solutions.",
      category: "Graphic Design",
      image: ezek3,
      link: "https://drive.google.com/drive/folders/1s4ZAyrMeQNYno6R_0Wo6QG-nb7kBLwdO"
    },
    {
      title: "Cryptocurrency Awareness Design",
      description: "A bold graphic designed to promote cryptocurrency education and digital finance opportunities.",
      category: "Graphic Design",
      image: ezek5,
      link: "https://drive.google.com/drive/folders/1s4ZAyrMeQNYno6R_0Wo6QG-nb7kBLwdO"
    },
    {
      title: "Student Rental Management Platform",
      description: "A web platform designed to help students find and list rental properties around the university.",
      category: "Web Development",
      image: unnestate,
      link: "https://unnestate-sabe.onrender.com/"
    },
    {
      title: "Lip Gloss Product Design",
      description: "A stylish beauty graphic created to promote a lip gloss brand with attractive product visuals.",
      category: "Graphic Design",
      image: ezek1,
      link: "https://drive.google.com/drive/folders/1s4ZAyrMeQNYno6R_0Wo6QG-nb7kBLwdO"
    },
        {
      title: "B2B Lead Generation for SaaS",
      description: "A structured lead generation system created to help SaaS companies attract and convert high-quality business prospects.",
      category: "Sales & Marketing",
      image: b2b,
      link: "https://www.upwork.com/freelancers/~019de7efe85477966a"
    },
    {
      title: "CRM Automation & Cold Email System",
      description: "A system designed to automate CRM workflows and cold email outreach for efficient B2B lead generation and client acquisition.",
      category: "Sales & Marketing",
      image: crmautomation,
      link: "https://www.upwork.com/freelancers/~01deca9980c2e8d7ee"
    },
    {
      title: "Scholarship Opportunity Campaign",
      description: "An informative graphic designed to promote scholarship opportunities for students.",
      category: "Graphic Design",
      image: ezek4,
      link: "https://drive.google.com/drive/folders/1s4ZAyrMeQNYno6R_0Wo6QG-nb7kBLwdO"
    },
    {
      title: "High-Ticket B2B Sales Strategy",
      description: "A sales strategy focused on acquiring and converting high-value B2B clients through targeted outreach and proven sales processes.",
      category: "Sales & Marketing",
      image: highticket,
      link: "https://www.upwork.com/freelancers/~019de7efe85477966a"
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
          {/* <h2 className="text-4xl font-semibold text-gray-900 mb-4">
            Our Portfolio
          </h2> */}

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