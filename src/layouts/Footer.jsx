import {
	faFacebookF,
	faInstagram,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import logoSvg from '../assets/img/logo_svg.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
	return (
		<>
			<div className="bg-blue-900 p-11 flex flex-col justify-center items-center overflow-hidden">
				<div className="max-w-[1200px] text-white ">
					<div className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32">
						<div>
							<h3 className="font-semibold text-lg border-b border-gray-500 py-4 ">
								Hire Talent
							</h3>
							<ul>
								<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Digital Marketers
									</a>
								</li>

								<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Web & Mobile Developers
									</a>
								</li>
								<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Virtual Assistants
									</a>
								</li>
								<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Graphic Designers
									</a>
								</li>
								<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Video Editors
									</a>
								</li>
			
							
							</ul>
						</div>

							<div>
							<h3 className=" font-semibold lg:mt-7 text-lg lg:border-b border-gray-500 lg:py-4 ">
								{/* End-to-End Solutions */}
							</h3>
							<ul>
									<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Automation Testers
									</a>
								</li>
								<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Data Anaysist 
									</a>
								</li>
									<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Content Writers
									</a>
								</li>
							
									<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Hire Seo Specialists 
									</a>
								</li>
							</ul>
						</div>


						<div>
							<h3 className="font-semibold  text-lg border-b border-gray-500 py-4 ">
								About
							</h3>
							<ul>
								<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Why Us
									</a>
								</li>
							<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										Contact Us 
									</a>
								</li>
								
							
								<li className="pt-3">
									<a
										href=""
										className=" hover:text-gray-400 my-3">
										About Us
									</a>
								</li>
							</ul>
						</div>

						

					
					</div>
					<div className="py-6 my-11 border-y border-gray-500">
						<div className="flex flex-col gap-5 justify-between items-center  md:flex-row">
							<div className=" flex items-center gap-6 flex-col md:flex-row">
								<a
									href=""
									className="pr-4 flex md:border-r border-gray-500">
									<img
										src={logoSvg}
										alt=""
										className="w-48 h-16 mr-2 fill-white"
									/>
								
								</a>
								<div>
									The World’s Top Talent, On Demand&nbsp;<span>®</span>
								</div>
							</div>
							<ul className="flex items-center gap-6">
								<li className="">
									<a
										href="https://www.linkedin.com/company/enzo-digital-world/"
										className="border rounded-full border-gray-400 hover:cursor-pointer hover:text-gray-400 flex justify-center items-center">
										<FontAwesomeIcon
											icon={faLinkedinIn}
											className="p-3"
										/>
									</a>
								</li>
								{/* <li>
									<a
										href=""
										className="flex justify-center items-center border rounded-full border-gray-400 hover:cursor-pointer hover:text-gray-400 ">
										<FontAwesomeIcon
											icon={faTwitter}
											className="p-3"
										/>
									</a>
								</li> */}
								<li>
									<a
										href="https://www.facebook.com/profile.php?id=61579241692961"
										className="flex justify-center items-center border rounded-full border-gray-400 hover:cursor-pointer hover:text-gray-400 ">
										<FontAwesomeIcon
											icon={faFacebookF}
											className="py-3 px-[15px]"
										/>
									</a>
								</li>
								{/* <li>
									<a
										href=""
										className="flex justify-center items-center border rounded-full border-gray-400 hover:cursor-pointer hover:text-gray-400">
										<FontAwesomeIcon
											icon={faInstagram}
											className="p-3"
										/>
									</a>
								</li> */}
							</ul>
						</div>
					</div>
					<div className="flex gap-4 justify-center flex-col md:flex-row">
						<p className=" md:border-r border-gray-400 pr-3 text-center">
							Copyright 2026 Enzo, LLC
						</p>
						<ul className="grid gap-3 text-center grid-cols-1  md:grid-cols-3 hover:cursor-pointer">
							<li className="hover:text-gray-400 hover:cursor-pointer">
								<a>Privacy Policy</a>
							</li>
							<li className="hover:text-gray-400 hover:cursor-pointer">
								<a href="">Website Terms</a>
							</li>
							<li className="hover:text-gray-400 hover:cursor-pointer">
								<a href="">Accessibility</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}

export default Footer;
