/** @format */

import { useState } from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DiscoverOurSkills() {

const [leftOpen, setLeftOpen] = useState(null);
const [rightOpen, setRightOpen] = useState(null);

const leftSkills = [
    {
title: "Sales & Lead Generation",
items: [
"B2B lead generation",
"Appointment setting",
"Cold calling",
"LinkedIn outreach",
"Email outreach campaigns",
"Sales funnel building"
]
},

{
title: "Digital Marketing Services",
items: [
"Social media marketing",
"Facebook / Instagram ads",
"Google Ads",
"Marketing strategy",
"Campaign management",
"Influencer marketing"
]
},

{
title: "Website Design & Development",
items: [
"WordPress website design",
"Shopify stores",
"Landing page design",
"Webflow development",
"Ecommerce website development",
"Full-stack development",
"Front-end development",
"Web design"
]
},

{
title: "Graphic Design",
items: [
"Logo design",
"Brand identity",
"Social media graphics",
"Pitch decks",
"Marketing materials"
]
},

{
title: "Content Writing & Copywriting",
items: [
"Blog writing",
"Website copy",
"Sales copy",
"Email marketing copy",
"LinkedIn content"
]
},

{
title: "Data & Analytics Services",
items: [
"Data analysis",
"Dashboard creation",
"Data visualization",
"Machine learning projects",
"Data analytics"
]
},

{
title: "Ecommerce Services",
items: [
"Shopify store setup",
"Amazon listing optimization",
"Ecommerce management"
]
}
];

const rightSkills = [
    {
title: "SEO (Search Engine Optimization)",
items: [
"Website SEO audits",
"On-page SEO",
"Technical SEO",
"Backlink building",
"Local SEO"
]
},
{
title: "Mobile App Development",
items: [
"iOS apps",
"Android apps",
"Flutter apps",
"MVP app development"
]
},

{
title: "AI Automation Services",
items: [
"AI chatbots",
"AI customer support",
"AI lead generation automation",
"ChatGPT integration",
"AI workflow automation",
"AI business automation",
"AI marketing automation"
]
},

{
title: "Video Editing",
items: [
"YouTube video editing",
"Short-form content editing",
"Reels / TikTok editing",
"Podcast video editing",
"Ads editing"
]
},

{
title: "Virtual Assistant Services",
items: [
"Email management",
"CRM management",
"Data entry",
"Research",
"Calendar management"
]
},

{
title: "UI / UX Design",
items: [
"Mobile app UI",
"SaaS dashboard design",
"Website UX improvement",
"Product design"
]
}
];

const toggleLeft = (index) => {
setLeftOpen(leftOpen === index ? null : index);
};

const toggleRight = (index) => {
setRightOpen(rightOpen === index ? null : index);
};

return (
<div className="bg-gray-100 p-10 lg:p-20 flex justify-center items-center overflow-hidden">

<div className="max-w-[1200px] w-full">

{/* Title */}

<div className="flex justify-center items-center my-4">
<h2 className="text-3xl sm:text-5xl text-gray-900 font-semibold text-center">
The Services We Offer
</h2>
</div>

{/* Skills Container */}

<div className="bg-white shadow-2xl mt-16 py-2 border w-full font-semibold grid grid-cols-1 md:grid-cols-2 md:gap-10">

{/* LEFT COLUMN */}

<div>
{leftSkills.map((skill, index) => (
<div key={index} className="pr-4">

<div
onClick={() => toggleLeft(index)}
className="py-3 px-4 border-b flex justify-between items-center hover:text-blue-800 cursor-pointer"
>

<span>{skill.title}</span>

<FontAwesomeIcon
icon={leftOpen === index ? faMinus : faPlus}
/>

</div>

<div
className={`overflow-hidden transition-all duration-500 ease-in-out ${
leftOpen === index
? "max-h-48 opacity-100"
: "max-h-0 opacity-0"
}`}
>

<div className="px-6 py-2 text-gray-600 space-y-1 text-sm">

{skill.items.map((item, i) => (
<p key={i}>{item}</p>
))}

</div>

</div>

</div>
))}
</div>

{/* RIGHT COLUMN */}

<div>
{rightSkills.map((skill, index) => (
<div key={index} className="pr-4">

<div
onClick={() => toggleRight(index)}
className="py-3 px-4 border-b flex justify-between items-center hover:text-blue-800 cursor-pointer"
>

<span>{skill.title}</span>

<FontAwesomeIcon
icon={rightOpen === index ? faMinus : faPlus}
/>

</div>

<div
className={`overflow-hidden transition-all duration-500 ease-in-out ${
rightOpen === index
? "max-h-48 opacity-100"
: "max-h-0 opacity-0"
}`}
>

<div className="px-6 py-2 text-gray-600 space-y-1 text-sm">

{skill.items.map((item, i) => (
<p key={i}>{item}</p>
))}

</div>

</div>

</div>
))}
</div>

</div>

</div>

</div>
);
}

export default DiscoverOurSkills;