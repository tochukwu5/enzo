/** @format */

import Hiring from "./Hiring";
import image1 from "../assets/img/image1.png";
import image5 from "../assets/img/image5.png";

export const LeadershipTeam = () => {
	return (
		<>
			{/* Hero / About Intro */}
			<section className='bg-gray-100 py-20 flex justify-center'>
				<div className='max-w-[1200px] px-6 text-center'>
					<h1 className='text-2xl lg:text-5xl font-semibold text-gray-800 mb-6'>
						About Enzo Solutions Group
					</h1>

						<p className='text-gray-600 text-left leading-relaxed max-w-3xl mx-auto'>
						Enzo Solutions Group is a business solutions agency that helps organizations solve critical challenges by
						 connecting them with the right expertise. Instead of navigating the complexity of hiring and managing
						  multiple freelancers, businesses work with us to access a curated network of skilled professionals across 
						  sales, marketing, technology, design, and business operations. <br /> <br />
						  Our approach combines strategic leadership, expert talent, and structured project oversight to ensure
						   every engagement delivers meaningful results. We take the time to understand each client’s goals,
						    assemble the right specialists, and manage the execution so projects are completed efficiently and 
							professionally.
							<br /> <br />
							By bridging the gap between business needs and world-class expertise, Enzo Solutions Group enables
							 companies to move faster, scale smarter, and focus on growth while we handle the delivery of
							  high-impact solutions.
								<p className="text-gray-600 font-bold text-left leading-relaxed max-w-3xl mx-auto">Strategic Solutions. Expert Talent. Real Results</p>


					</p>

					<div className='mt-10 flex justify-center gap-6'>
						<button className='bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600'>
							Start Hiring
						</button>

						<button className='border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-200'>
							Tell Us About Your Project
						</button>
					</div>
				</div>
			</section>

			{/* What We Do */}
			<section className='py-20 flex justify-center'>
				<div className='max-w-[1100px] px-6 text-center'>
					<h2 className='text-2xl lg:text-4xl font-semibold text-gray-800 mb-6'>
						What We Do
					</h2>
					<p className='text-gray-600 text-left leading-relaxed max-w-3xl mx-auto'>
					Many businesses struggle with unreliable freelancers, poor communication, and missed deadlines when working with 
									remote talent. Enzo Solutions Group removes this complexity by providing carefully selected professionals and 
									structured team management that ensures every project runs smoothly from start to finish.
					</p>
				


				</div>
			</section>

			{/* How We Work */}
			{/* <section className='bg-gray-50 py-20 flex justify-center'>
				<div className='max-w-[1200px] px-6'>
					<h2 className='text-center text-4xl font-semibold text-gray-800 mb-12'>
						How We Work
					</h2>

					<div className='grid md:grid-cols-4 gap-8 text-center'>
						<div>
							<h3 className='font-semibold text-lg mb-3'>
								1. Tell Us About Your Project
							</h3>
							<p className='text-gray-600'>
								Share your goals, requirements, and timeline so we can
								understand exactly what your business needs.
							</p>
						</div>

						<div>
							<h3 className='font-semibold text-lg mb-3'>
								2. We Assemble the Right Experts
							</h3>
							<p className='text-gray-600'>
								Our team selects the right professionals across sales,
								marketing, technology, and operations.
							</p>
						</div>

						<div>
							<h3 className='font-semibold text-lg mb-3'>
								3. We Manage Execution
							</h3>
							<p className='text-gray-600'>
								We coordinate the team, maintain communication, and ensure
								every milestone is delivered on schedule.
							</p>
						</div>

						<div>
							<h3 className='font-semibold text-lg mb-3'>
								4. You Get Results
							</h3>
							<p className='text-gray-600'>
								With the right specialists working together, your business gets
								high-quality results and scalable growth.
							</p>
						</div>
					</div>
				</div>
			</section> */}

			{/* <Hiring /> */}

			{/* Leadership Section */}
			<section className='py-20 flex justify-center'>
				<div className='max-w-[1200px] px-6'>
					<h2 className='text-center text-2xl  lg:text-4xl font-semibold text-gray-800 mb-14'>
						Leadership Team
					</h2>

					<div className='grid md:grid-cols-2 gap-10'>
						{/* Founder */}
						<div className='bg-white shadow-lg rounded-lg p-6 text-center'>
							<img
								src={image1}
								alt='Founder'
								className='w-40 h-40 object-cover rounded-full mx-auto mb-6'
							/>

							<h3 className='text-xl font-semibold'>Paul Ebehiremen</h3>
							<p className='text-green-600 font-medium mb-4'>
								Founder & Growth Strategist
							</p>

							<p className='text-gray-600 text-left'>
								Paul is a seasoned Sales Consultant, Business Development Manager, and Go-To-Market Strategist
								 with over 18 years of experience helping organizations drive revenue and build sustainable growth
								  systems.

								Throughout his career, he has worked with companies across industries including technology, SaaS, 
								digital marketing, real estate, and professional services, helping them generate new business
								 opportunities through strategic sales processes, lead generation systems, and market expansion 
								 strategies.

								At Enzo Solutions Group, Paul leads the company’s growth strategy, client acquisition, and solution 
								development, ensuring that every project aligns with the client’s business goals and delivers measurable 
								results.
							</p>
						</div>

						{/* Co Founder */}
						<div className='bg-white shadow-lg rounded-lg p-6 text-center'>
							<img
								src={image5}
								alt='Co Founder'
								className='w-40 h-40 object-cover rounded-full mx-auto mb-6'
							/>

							<h3 className='text-xl font-semibold'>Mark Ighinye</h3>
							<p className='text-green-600 font-medium mb-4'>
								Co-Founder | Global Business Development Leader
							</p>

							<p className='text-gray-600 text-left'>
								Mark is a Global Business Development Leader with strong expertise in client acquisition, strategic 
								partnerships, and international business expansion. His experience working with businesses across 
								different markets enables him to identify growth opportunities and build strong relationships that 
								drive long-term success.

								At Enzo Solutions Group, Mark oversees global business development initiatives, strategic partnerships,
								 and client relationships, helping the company expand its reach and deliver value to clients worldwide.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='bg-gray-100 py-20 text-center'>
				<h2 className='text-2xl  lg:text-3xl font-semibold text-gray-800 mb-6'>
					Ready to Work With Expert Teams?
				</h2>

				<p className='text-gray-600 max-w-2xl mx-auto mb-8 '>
					Whether you need help with sales, marketing, development, or
					operations, Enzo Solutions Group can assemble the right team to help
					your business grow.
				</p>

				<div className='flex justify-center gap-6'>
					<button className='bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600'>
						Book a Strategy Call
					</button>

					<button className='border  border-gray-400 px-6 py-3 rounded-md hover:bg-gray-200'>
						Submit Your Business Challenge
					</button>
				</div>
			</section>

			
		</>
	);
};