/** @format */
import { faSearch, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import blogbg from '../assets/img/Certificates/BlogBg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import FlipCard1 from './FlipCard1';
import FlipCard2 from './FlipCard2';
export const BlogHeader = () => {
	return (
		<>
			<div className='w-full h-[450px] lg:h-[650px]  overflow-hidden flex flex-col items-center justify-center'>
				<img
					src={blogbg}
					alt=''
					className='object-cover relative min-h-[750px] lg:min-h-[500px] 2xl:h-[600px]'
				/>
				<div className='absolute top-0 text-white  max-w-[1200px]  '>
					<div className='w-full '>
						<div className='flex flex-col justify-between text-center my-5 lg:my-12'>
							<h2 className='text-4xl md:text-6xl font-normal py-3 '>
								Let’s Talk About Your Project
							</h2>
							<div className='flex justify-between gap-32 '>
								<div className=''>
									<p className='py-6 px-5 lg:block text-left lg:px-20'>
										Have a project in mind or a business challenge you need help solving?
										The team at Enzo Solutions Group is here to help.

											We work with businesses to assemble and manage expert teams across sales, marketing, technology,
											 and operations to deliver real results. Share a few details about your project and our team will
											  get back to you shortly.
									</p>
								
								</div>
							
							</div>
						</div>
						
					</div>
			
				</div>
			</div>
		</>
	);
};
