import {
	faFacebookF,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import logoSvg from '../assets/img/logo_svg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
	return (
		<>
			<div className="bg-blue-900 p-11 flex flex-col justify-center items-center overflow-hidden">
				<div className="max-w-[1200px] text-white w-full">
					<div className="text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-32">

						{/* Hire Talent - Column 1 */}
						<div>
							<h3 className="font-semibold text-lg border-b border-gray-500 py-4">
								Hire Talent
							</h3>
							<ul>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default ">Hire Digital Marketers</span>
								</li>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default">Hire Web & Mobile Developers</span>
								</li>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default">Hire Virtual Assistants</span>
								</li>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default">Hire Graphic Designers</span>
								</li>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default">Hire Video Editors</span>
								</li>
							</ul>
						</div>

						{/* Hire Talent - Column 2 (continued) */}
						<div>
							<h3 className="font-semibold lg:mt-7 text-lg lg:border-b border-gray-500 lg:py-4">
							</h3>
							<ul>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default">Hire Automation Testers</span>
								</li>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default">Hire Data Analysts</span>
								</li>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default">Hire Content Writers</span>
								</li>
								<li className="pt-3">
									<span className="text-gray-300 cursor-default">Hire SEO Specialists</span>
								</li>
							</ul>
						</div>

						{/* About - Column 3 */}
						<div>
							<h3 className="font-semibold text-lg border-b border-gray-500 py-4">
								Important Links
							</h3>
							<ul>
											<li className='pt-3'>
							<Link
								to='/'
								onClick={() => {
								window.scrollTo({
								top: 0,
								behavior: "smooth",
								});
							}}
								>
								Home
							</Link>
						</li>
								<li className="pt-3">
									<Link
										onClick={() => {
								window.scrollTo({
								top: 0,
								behavior: "smooth",
								});
							}}
										to="/top"
										className="hover:text-yellow-400 transition-colors duration-200">
										Why Us
									</Link>
								</li>
							
								<li className="pt-3">
									<Link
										onClick={() => {
								window.scrollTo({
								top: 0,
								behavior: "smooth",
								});
							}}
										to="/about-us"
										className="hover:text-yellow-400 transition-colors duration-200">
										About Us
									</Link>
								</li>
						
									<li className="pt-3">
									<Link
										onClick={() => {
								window.scrollTo({
								top: 0,
								behavior: "smooth",
								});
							}}
										to="/clients"
										className="hover:text-yellow-400 transition-colors duration-200">
										Portfolio
									</Link>
								</li>
									<li className="pt-3">
									<Link
										onClick={() => {
								window.scrollTo({
								top: 0,
								behavior: "smooth",
								});
							}}
										to="/blog"
										className="hover:text-yellow-400 transition-colors duration-200">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>

					</div>

					{/* Logo + Social Row */}
					<div className="py-6 my-11 border-y border-gray-500">
						<div className="flex flex-col gap-5 justify-between items-center md:flex-row">
							<div className="flex items-center gap-6 flex-col md:flex-row">
								<Link
									to="/"
									className="pr-4 flex md:border-r border-gray-500">
									<img
										src={logoSvg}
										alt="Enzo logo"
										className="w-48 h-16 mr-2"
									/>
								</Link>
								<div>
									The World's Top Talent, On Demand&nbsp;<span>®</span>
								</div>
							</div>
							<ul className="flex items-center gap-6">
								<li> <a
									
										href="https://www.linkedin.com/company/enzo-digital-world/"
										target="_blank"
										rel="noopener noreferrer"
										className="border rounded-full border-gray-400 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200 flex justify-center items-center">
										<FontAwesomeIcon icon={faLinkedinIn} className="p-3" />
									</a>
								</li>
								<li> <a	
									
										href="https://www.facebook.com/profile.php?id=61579241692961"
										target="_blank"
										rel="noopener noreferrer"
										className="flex justify-center items-center border rounded-full border-gray-400 hover:border-yellow-400 hover:text-yellow-400 transition-colors duration-200">
										<FontAwesomeIcon icon={faFacebookF} className="py-3 px-[15px]" />
									</a>
								</li>
							</ul>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="flex gap-4 justify-center flex-col md:flex-row">
						<p className="md:border-r border-gray-400 pr-3 text-center text-gray-300">
							Copyright 2026 Enzo, LLC
						</p>
						<ul className="grid gap-3 text-center grid-cols-1 md:grid-cols-3 text-gray-300">
							<li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
								<span>Privacy Policy</span>
							</li>
							<li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
								<span>Website Terms</span>
							</li>
							<li className="hover:text-yellow-400 transition-colors duration-200 cursor-pointer">
								<span>Accessibility</span>
							</li>
						</ul>
					</div>

				</div>
			</div>
		</>
	);
}

export default Footer;