/** @format */

import arrow from '../assets/img/arrow.svg';
import leading from '../assets/img/leading.svg';
import level from '../assets/img/level.svg';
import theTop from '../assets/img/top.svg';
import person1 from '../assets/img/image1.png';
import person2 from '../assets/img/image2.png';
import person3 from '../assets/img/image3.png';
import shopify from '../assets/img/shopify.svg';
import logo from '../assets/img/logo.png';

function BuildTeam() {
	return (
		<div className='bg-gray-100 py-16 px-10 md:p-16 flex justify-center overflow-hidden'>
			<div className='max-w-[1200px]   gap-5 flex flex-col justify-center md:flex-row'>
				<div className=' lg:w-1/2'>
					<div className='mb-16'>
						<h2 className='text-3xl lg:text-5xl text-center sm:text-left font-semibold pb-5'>
							Build Exceptional Teams, On Demand
						</h2>
						<p className='text-gray-500 text-center sm:text-left'>
							Build Exceptional Teams, On Demand.
						</p>
					</div>
					<div className='w-full grid md:grid-cols-2 lg:grid-cols-2 gap-5'>
						<div>
							<img
								src={arrow}
								className='mb-6'
								alt='Hire'
							/>
							<h2 className='mb-3 heading-xs font-semibold'>Fast Hiring</h2>
							<p className=' text-gray-700 font-light'>
								Find the right talent in less than 48 hours. Whether you need short-term help 
								or long-term collaboration, our flexible hiring model adapts to your business needs.
							</p>
						</div>
						<div>
							<img
								src={theTop}
								className='mb-6'
								alt='The top 3%'
							/>
							<h2 className='mb-3 heading-xs font-semibold'>The Top 1%</h2>
							<p className=' text-gray-700 font-light'>
								Every professional in the Enzo Solution Groups network goes through a strict 
								screening process to evaluate expertise, reliability, and communication.
								 Only the top 1% of global talent make it into our network.
							</p>
						</div>
						<div>
							<img
								src={leading}
								className='mb-6'
								alt='Leading the Future of Work'
							/>
							<h2 className='mb-3 heading-xs font-semibold'>
								Shaping the Future of Work
							</h2>
							<p className=' text-gray-700 font-light'>
								Our global network is prepared for the next generation of business challenges, 
								bringing expertise in modern technologies, innovation, and emerging fields like AI and blockchain.
							</p>
						</div>
						<div>
							<img
								src={level}
								className='mb-6'
								alt='A Level Above'
							/>
							<h2 className='mb-3 heading-xs font-semibold'>A Higher Standard</h2>
							<p className=' text-gray-700 font-light'>
								All professionals in our network are selected for their technical excellence, 
								professionalism, and commitment to delivering high-quality results on every project.
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
									src={person2}
									alt=''
									className='scale-150 '
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
										<span className='font-semibold '> Expert</span> in Web Development
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
									<svg
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
										<h3 className='text-sm'> Growth Strategist </h3>
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
										src={person3}
										alt=''
										className='scale-150'
									/>
								</div>
								<div className='p-3'>
									<h3 className='text-blue-700 font-semibold hover:cursor-pointer hover:underline p-1'>
										Julius E.
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
											<span className='font-semibold '>Verified </span> 
											Solidity Developer
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
										<h3 className='text-sm'>Solidity Developer </h3>
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
