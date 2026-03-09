/** @format */

import arrow from '../assets/img/arrow.svg';
import leading from '../assets/img/leading.svg';
import level from '../assets/img/level.svg';
import theTop from '../assets/img/top.svg';
import person1 from '../assets/img/image1.png';
import person2 from '../assets/img/image2.png';
import person5 from '../assets/img/image5.png';
import shopify from '../assets/img/shopify.svg';
import logo from '../assets/img/logo.png';

function BuildTeam() {
	return (
		<div className='bg-gray-100 py-16 px-10 md:p-16 flex justify-center overflow-hidden'>
			<div className='max-w-[1200px]   gap-5 flex flex-col justify-center md:flex-row'>
				<div className=' lg:w-1/2'>
					<div className='mb-16'>
						<h2 className='text-3xl lg:text-5xl text-center sm:text-left font-semibold pb-5'>
							Problem We Solve
						</h2>
						<p className='text-gray-500 text-center sm:text-left'>
							Power Your Business with Expert Teams.
						</p>
					</div>
					<div className='w-full grid md:grid-cols-2 lg:grid-cols-2 gap-5'>
						<div>
							<img
								src={arrow}
								className='mb-6'
								alt='Hire'
							/>
							<h2 className='mb-3 heading-xs font-semibold'>Unreliable Freelancers</h2>
							<p className=' text-gray-700 font-light'>
								Many businesses struggle with freelancers who disappear mid-project or deliver inconsistent quality.
								 Enzo Solutions Group provides carefully vetted professionals and managed teams, ensuring reliability, 
								 accountability, and consistent results on every project
							</p>
						</div>
						<div>
							<img
								src={theTop}
								className='mb-6'
								alt='The top 3%'
							/>
							<h2 className='mb-3 heading-xs font-semibold'>Poor Communication</h2>
							<p className=' text-gray-700 font-light'>
								Working with remote freelancers can lead to slow responses, unclear updates, and misunderstandings 
								about project goals. We ensure clear communication through dedicated coordination, structured updates,
								 and professional project management.
							</p>
						</div>
						<div>
							<img
								src={leading}
								className='mb-6'
								alt='Leading the Future of Work'
							/>
							<h2 className='mb-3 heading-xs font-semibold'>
								Missed Deadlines
							</h2>
							<p className=' text-gray-700 font-light'>
								Freelancers often juggle multiple clients, which can lead to missed deadlines and delayed business
								 progress. Our managed teams follow structured workflows and clear timelines to ensure projects
								  are delivered on schedule.
							</p>
						</div>
						<div>
							<img
								src={level}
								className='mb-6'
								alt='A Level Above'
							/>
							<h2 className='mb-3 heading-xs font-semibold'>Managing Multiple Specialists</h2>
							<p className=' text-gray-700 font-light'>
								Modern projects require different experts like developers, designers, marketers, and content creators, 
								which can be difficult to manage individually. Enzo Solutions Group brings together the right 
								specialists into one coordinated team, so businesses can focus on growth while we handle the execution.
							</p>
						</div>
					</div>
				</div>

				<div className='w-1/2  hidden lg:block'>
					<div className='grid grid-cols-2 justify-center items-center'>
						<div className='h-1/2 relative left-10 bg-white w-60 border 7 shadow-2xl'>
							<div className='group overflow-hidden relative'>
								{/* <div className='bg-blue-900 opacity-70 w-full h-full absolute z-10 hidden group-hover:block'></div> */}
								{/* <div className='absolute z-20 w-full h-full hidden group-hover:flex justify-center items-center text-white text-xl font-semibold'>
									View Full Profile
								</div> */}
								<img
									src={person5}
									alt=''
									className='scale-150 '
								/>
							</div>

							<div className='p-3'>
								<h3 className='text-blue-700 font-semibold hover:cursor-pointer hover:underline p-1'>
									Mark I.
								</h3>

								<div className='flex gap-1 mb-3'>
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
										<span className='font-semibold '>  Global Business Development <br /> leader (Co-founder)</span> 
									</h3>
								</div>
								{/* <div className='flex gap-1 my-2'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='16'
										height='16'
										fill='none'
										data-testid='developers_icon'
										className='text-brand-blue' // assuming you have defined brand-blue color in Tailwind config
									>
										<path
											fill='#204ECF' // This color may be overridden by the CSS class, you can remove it if not needed
											fillRule='evenodd'
											d='M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z'
											clipRule='evenodd'></path>
									</svg>
									<h3 className='text-sm'>Co-founder </h3>
								</div> */}
								<div>
									<h3 className='uppercase my-2 text-sm'>Currently Working at</h3>
									<img
										src={logo}
										alt='Company logo'
										className='w-32'
									/>
								</div>
							</div>
						</div>
						<div>
							<div className=' relative top-5 right-10 bg-white w-60 border  shadow-2xl z-20'>
								<div className='overflow-hidden relative group'>
									{/* <div className='bg-blue-900 opacity-70 w-full h-full absolute z-10 hidden group-hover:block'></div>
									<div className='absolute z-20 w-full h-full hidden group-hover:flex justify-center items-center text-white text-xl font-semibold'>
										View Full Profile
									</div> */}
									<img
										src={person1}
										alt=''
										className='scale-150'
									/>
								</div>
								<div className='p-3'>
									<h3 className='text-blue-700 font-semibold hover:cursor-pointer hover:underline p-1'>
										Paul E.
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
											<span className='font-semibold '>Founder & Growth Strategist</span> 
											
										</h3>
									</div>
									<div className='flex gap-1 my-2'>
									{/* <svg
 										 xmlns="http://www.w3.org/2000/svg"
											width="16"
											height="16"
											fill="none"
											className="text-brand-blue"
											>
											<path
												fill="#204ECF"
												fillRule="evenodd"
												d="M8 1a7 7 0 100 14A7 7 0 008 1Zm0 2a5 5 0 110 10A5 5 0 018 3Zm0 2a3 3 0 100 6A3 3 0 008 5Z"
												clipRule="evenodd"
											/>
											</svg>
										<h3 className='text-sm'> Founder & Growth Strategist </h3> */}
									</div>
									<div>
										<h3 className='uppercase my-2 text-sm'>Currently Working at</h3>
										<img
											src={logo}
											alt='Company logo'
											className='w-32'
										/>
									</div>
								</div>
							</div>

							<div className='bg-white w-60 border  shadow-2xl z-0'>
								<div className='overflow-hidden relative group'>
									{/* <div className='bg-blue-900 opacity-70 w-full h-full absolute z-10 hidden group-hover:block'></div> */}
									{/* <div className='absolute z-20 w-full h-full hidden group-hover:flex justify-center items-center text-white text-xl font-semibold'>
										View Full Profile
									</div> */}
									<img
										src={person2}
										alt=''
										className='scale-150'
									/>
								</div>
								<div className='p-3'>
									<h3 className='text-blue-700 font-semibold hover:cursor-pointer hover:underline p-1'>
										David E.
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
											<span className='font-semibold '>Expert </span>
											in Web Development
										</h3>
									</div>
									<div className='flex gap-1 my-2'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='16'
											height='16'
											fill='none'
											data-testid='developers_icon'
											className='text-brand-blue' // assuming you have defined brand-blue color in Tailwind config
										>
											<path
												fill='#204ECF' // This color may be overridden by the CSS class, you can remove it if not needed
												fillRule='evenodd'
												d='M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z'
												clipRule='evenodd'></path>
										</svg>
										<h3 className='text-sm'>Web Developer </h3>
									</div>
									<div>
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default BuildTeam;
