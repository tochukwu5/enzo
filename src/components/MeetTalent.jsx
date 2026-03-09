import { useState } from "react";

import person1 from "../assets/img/image1.png";
import person2 from "../assets/img/image2.png";
import person3 from "../assets/img/image3.png";
import person4 from "../assets/img/image4.png";
import person5 from "../assets/img/image5.png";
import person6 from "../assets/img/image6.png";

import logo from "../assets/img/logo.png";
import toptal from "../assets/img/Toptal.svg";

function MeetTalent() {

const [activeCategory, setActiveCategory] = useState("developers");

const talents = [
	{
name: "Paul E.",
image: person1,
category: "finance",
role: "Founder & Growth Strategist",
skills: ["Growth", "Sales funnel", "Email campaign", "LinkedIn outreach"]
},
{
name: "Mark I.",
image: person5,
category: "data",
role: (
    <>
    Global Business Development  <br />Leader
      (Co-founder)
    </>
  ),
skills: ["KPI Tracking", "Coaching", "Team Training", "Lead Generation"]
},
{
name: "David E.",
image: person2,
category: "developers",
role: "Web Developer",
skills: ["Front-end", "Git", "NodeJs", "React"]
},


{
name: "Julius E.",
image: person3,
category: "solidity",
role: "Solidity Developer",
skills: ["Solidity", "Blockchain", "Ethers.js", "Web3"]
},

{
name: "Ezekiel E.",
image: person4,
category: "designers",
role: "Graphic Designer ",
skills: ["Logo design", "Figma", "UX/UX", "Branding"]
},

{
name: "Collins E.",
image: person6,
category: "solidity",
role: "Marketing Expert",
skills: ["SEO", "Ads", "Content", "Growth"]
},
];

const filteredTalents = talents.filter(
talent => talent.category === activeCategory
);

return (

<div className="bg-gray-100 p-11 flex flex-col justify-center items-center">

<div className="max-w-[1200px] overflow-hidden">

<h2 className="text-4xl text-center font-semibold my-20">
Meet Talented Team in Our Network
</h2>

{/* CATEGORY TAGS */}

<ul className="text-gray-700 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 py-5 border-y border-gray-500 text-sm">


<li
onClick={() => setActiveCategory("finance")}
className={`border-r border-gray-500 group py-2 cursor-pointer
${activeCategory === "finance" ? "bg-blue-800 text-white rounded" : ""}
`}
>

<div className="flex items-center justify-center gap-5 px-4">

<h3 className="font-semibold whitespace-nowrap">
Founder
</h3>

</div>

</li>

<li
onClick={() => setActiveCategory("data")}
className={`border-r border-gray-500 group py-2 cursor-pointer
${activeCategory === "data" ? "bg-blue-800 text-white rounded" : ""}
`}
>

<div className="flex items-center justify-center gap-5 px-4">

<h3 className="font-semibold whitespace-nowrap">
Co-Founder
</h3>

</div>

</li>

{/* <li
onClick={() => setActiveCategory("marketing")}
className={`group py-2 cursor-pointer
${activeCategory === "marketing" ? "bg-blue-800 text-white rounded" : ""}
`}
>

<div className="flex items-center justify-center gap-5 px-4">

<h3 className="font-semibold whitespace-nowrap">
Marketing Experts
</h3>

</div>

</li> */}

<li
onClick={() => setActiveCategory("developers")}
className={`border-r border-gray-500 group py-2 cursor-pointer
${activeCategory === "developers" ? "bg-blue-800 text-white rounded" : ""}
`}
>

<div className="flex items-center justify-center gap-4 px-4">


<h3 className="font-semibold whitespace-nowrap">
Developers
</h3>

</div>

</li>


<li
onClick={() => setActiveCategory("designers")}
className={`border-r border-gray-500 group py-2 cursor-pointer
${activeCategory === "designers" ? "bg-blue-800 text-white rounded" : ""}
`}
>

<div className="flex items-center justify-center gap-5 px-4">

<h3 className="font-semibold whitespace-nowrap">
Designers
</h3>

</div>

</li>

<li
onClick={() => setActiveCategory("solidity")}
className={`border-r border-gray-500 group py-2 cursor-pointer
${activeCategory === "solidity" ? "bg-blue-800 text-white rounded" : ""}
`}
>

<div className="flex items-center justify-center gap-5 px-4">

<h3 className="font-semibold whitespace-nowrap">
Solidity Developer
</h3>

</div>

</li>


</ul>


{/* TALENT CARDS */}

<div className="flex justify-center items-center">

<div className="mt-10 grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center">

{filteredTalents.map((talent, index) => (

<div
key={index}
className="shadow-2xl w-[270px] flex justify-center items-center bg-white p-4"
>

<div>

<img
src={talent.image}
alt="developer image"
width="200"
/>

<h3 className="text-blue-700 font-semibold hover:cursor-pointer hover:underline p-1">
{talent.name}
</h3>

<div className='flex gap-1'>
			<svg
		width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='green'
				xmlns='http://www.w3.org/2000/svg'>
				<path
				fill='green'
					d='m2.3438,5.6562l-2.3438,2.3438,2.3438,2.3438v3.3137h3.3137l2.3425,2.3425,2.3425-2.3425h3.315v-3.315l2.3425-2.3425-2.3425-2.3425v-3.3137h-3.3138l-2.3437-2.3438-2.3438,2.3438h-3.3125v3.3125Zm5.0488,2.7528l2.754-2.7654.9705.9739-3.7245,3.7399-.9705-.9739-1.3672-1.3733.9705-.9752,1.3672,1.3739Z'></path>
				<path
				className='text-white dark:text-transparent'
				fillRule='evenodd'
				clipRule='evenodd'
				d='M10.1465 5.64374L7.39254 8.4091L6.02535 7.03518L5.05485 8.01039L6.42204 9.38364L7.39254 10.3575L11.117 6.61761L10.1465 5.64374Z'
				fill='white'></path>
				</svg>
				<h3 className='text-green-800 whitespace-nowrap text-sm'>
				<span className='font-semibold '>{talent.role}</span> 
											
										</h3>
									</div>


<div>

<h3 className="text-sm text-green-800 mt-4">
Expertise
</h3>

<div className="grid grid-cols-2 text-center text-sm">

{talent.skills.map((skill, i) => (

<span
key={i}
className="border border-gray-500 rounded-xl py-1 px-2 m-3 hover:bg-slate-200"
>

{skill}

</span>

))}

</div>

<div className="mt-2">
				<h3 className='uppercase my-2 text-sm'>Currently Working at</h3>
				<img
				src={logo}
				alt='Company logo'
				className='w-32'
				/>
			</div>

</div>

</div>

</div>

))}


{/* CTA CARD */}

{/* <div className="relative shadow-2xl w-[270px] bg-blue-900 rounded">

<div className="h-[477px] px-6 flex items-center justify-center flex-col text-white text-center">

<img
src={toptal}
width="36"
/>

<h3 className="text-2xl font-semibold mt-4">
Discover 20,000+ More Talent
</h3>

<p className="py-3">
in the Network
</p>

<a
href="#"
className="bg-green-500 px-4 py-2 rounded"
>

Discover Talent

</a>

</div>

</div> */}

</div>

</div>

</div>

</div>

);
}

export default MeetTalent;