/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import developer from '../assets/img/developer icon.svg';
import writing from '../assets/img/writing-icon.svg';
import finance from '../assets/img/finance.svg';
import product from '../assets/img/artificial.svg';
import project from '../assets/img/project.svg';
import data_an from '../assets/img/data_analysis.svg';
import solidity from '../assets/img/solidity.svg';
import seo from '../assets/img/website_seo.svg';
import video_ed from '../assets/img/video_ed.svg';
import graphic from '../assets/img/graphic_des.svg';
import virtual_ass from '../assets/img/virtual_assis.svg';
import ecommerce from '../assets/img/cart_icon.svg';

function Developer() {
	return (
		<div className='py-20 px-10 md:p-20 bg-white flex justify-center items-center overflow-hidden'>
			<div className='max-w-[1200px]'>
				<div className=' flex flex-col justify-center items-center mb-4 '>
					<h2 className='text-3xl md:text-5xl text-gray-900 font-semibold text-center'>
						Unlock Elite Global Expertise
					</h2>
					<p className=' m-6 text-center text-gray-500 max-w-[600px]'>
						Enzo Solution Groups connects you with a carefully selected network of exceptional
						 professionals in business, design, and technology — ready to deliver excellence 
						 on your most mission-critical projects
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 max-w-[1300px]'>
					<div className='bg-gray-100 p-10 hover:cursor-pointer  hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={developer}
							alt='Developer'
							className='w-12  mb-8 group-hover:bg-gray-100 '
						/>
						<h3 className='text-xl my-4'>Website Design & App Development</h3>
						<p>
							Build powerful digital products including WordPress websites, Shopify stores, landing pages,
							 Webflow sites, ecommerce platforms, and mobile apps for iOS, Android, and Flutter.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								View Developer
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

					<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={writing}
							alt='writing'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>Content Writing & Copywriting</h3>
						<p>
							Professional writing services including blog articles, website copy, persuasive sales copy, email marketing campaigns,
							 and LinkedIn content designed to strengthen your brand voice, engage your audience, and drive more conversions.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								Content Writing & Copywriting
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

					<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={finance}
							alt='Finance Expert'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>Sales & Lead Generation</h3>
						<p>
							Helping businesses scale through targeted B2B lead generation, strategic 
							LinkedIn and email outreach, appointment setting, cold calling, and optimized sales
							 funnel development.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								Finance Expert
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

					<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={project}
							alt='Project Manager'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'> Digital Marketing Services</h3>
						<p>
							Experts in social media marketing, Facebook and Instagram advertising, Google Ads,
							 marketing strategy, campaign management, and influencer marketing to help brands 
							 grow their online presence.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible `}>
							<a
								href=''
								className='hover:underline text-lg'>
								View Project Manager
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

					<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={product}
							alt='Product Manager'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>AI Automation Services</h3>
						<p>
							Delivering smart automation solutions including AI chatbots, automated customer support, 
							AI-driven lead generation, ChatGPT integrations, and workflow automation to streamline business operations.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								View Product Manager
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

						<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={graphic}
							alt='graphic design'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>Graphic Design</h3>
						<p>
							Skilled designers delivering logo design, brand identity, social media graphics, 
							pitch decks, and visually compelling marketing materials.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								Graphic Design
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

						<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={data_an}
							alt='Marketing Expert'
							className='w-16 bg-grey mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>Data & Analytics Services</h3>
						<p>
							Helping organizations unlock insights through data analysis, interactive dashboards, 
							data visualization, machine learning solutions, and advanced analytics.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								Data & Analytics Services
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

						<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={ecommerce}
							alt='ecommerce'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>Ecommerce Services</h3>
						<p>
							Build and scale your online store with services including Shopify store setup, 
							Amazon listing optimization, and ecommerce management to help businesses sell and grow successfully online
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								ecommerce
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

					<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={video_ed}
							alt='video_editing'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>Video Editing</h3>
						<p>
							Experts in YouTube video editing, short-form content, Reels/TikTok editing, 
							podcast video editing, and ads editing, creating engaging videos that capture attention and drive results.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
									video_editing
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

						<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={virtual_ass}
							alt='Virtual Assistant'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>Virtual Assistant Services</h3>
						<p>
							Skilled professionals providing email management, CRM management, data entry, research, 
							and calendar management, helping businesses stay organized and efficient.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								Virtual Assistant
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

						<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={seo}
							alt='SEO Expert'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>SEO (Search Engine Optimization)</h3>
						<p>
							Experts in website SEO audits, on-page SEO, technical SEO, backlink building, and local SEO, 
							helping businesses improve visibility and rank higher on search engines.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								SEO (Search Engine Optimization)
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>

						<div className='bg-gray-100 p-10 hover:cursor-pointer hover:bg-blue-600 hover:text-white group transition'>
						<img
							src={solidity}
							alt='solidity'
							className='w-12 mb-8 group-hover:bg-gray-100'
						/>
						<h3 className='text-xl my-4'>Solidity Developer</h3>
						<p>
							Blockchain developers specializing in smart contract development, DeFi protocols, token creation, 
							NFT platforms, and secure Web3 applications on Ethereum and other EVM-compatible networks.
						</p>
						{/* <div
							className={`flex justify-between items-center my-4 invisible group-hover:visible`}>
							<a
								href=''
								className='hover:underline text-lg'>
								Solidity Developer
							</a>
							<FontAwesomeIcon icon={faArrowRight} />
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Developer;
