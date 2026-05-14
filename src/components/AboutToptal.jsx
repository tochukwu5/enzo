/** @format */
import about from '../assets/img/About/about-background.avif';
import aboutbg from '../assets/img/About/aboutbg.jpg';


// import about from '../assets/img/About/abt1_bg.png';

export const AboutToptal = () => {
	return (
		<>
			<div className='pt-16 flex justify-center items-center '>
				<div className='relative '>
					<div className="bg-[rgba(0,0,0,0.8)] absolute  z-10"></div>
					<div className="w-[100vw] h-[300px] lg:h-[400px]  z-20">
					<img
						src={aboutbg}
						className=' w-full h-full object-cover'
					/>
					</div>
					<div className='absolute bottom-8 lg:bottom-24 text-white mx-20 z-20'>
						<h2 className='tex-sm lg:text-lg pb-10 '>Home / about </h2>
						<h3 className=' text-sm lg:text-5xl lg:w-2/3 leading-tight '>
							We build and manage expert teams that drive business growth.
						</h3>
					</div>
				</div>
			</div>
		</>
	);
};
