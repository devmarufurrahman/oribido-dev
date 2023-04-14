import Logo from "../asset/footer-logo.png";
import SocialLogo from "../asset/social-logo.png";

const Footer = () => {
	return (
		<div className="flex flex-col gap-20">
			<div className="footer-top flex flex-col md:flex-row md:justify-evenly  ">
				<div className="band-logo flex flex-col items-center">
					<div className="logo flex items-center pb-8">
						<img src={Logo} alt="Logo" />
						<h1 className="font-semibold text-xl sm:text-3xl md:text-5xl leading-snug">
							OR<span style={{ color: "#D69300" }}>BIDO</span>
						</h1>
					</div>
					<p className=" text-center md:text-left text-gray-500 font-normal text-lg leading-8 ">
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>

				{/* useful links here  */}

				<div className="useful-links items-center">
					<h6 className="font-medium text-lg text-center leading-normal pb-6 mt-6">
						Useful Links
					</h6>
					<ul>
						<li className="font-normal text-base leading-normal text-gray-500">
							Content
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							How it Works
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							{" "}
							Create
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							{" "}
							Explore
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							Terms & Services
						</li>
					</ul>
				</div>

				{/* community links here  */}

				<div className="community">
					<h6 className="font-medium text-lg text-center leading-normal pb-6 mt-6">
						Community
					</h6>
					<ul>
						<li className="font-normal text-base leading-normal text-gray-500">
							Help Center
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							Partners
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							Suggestions
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							Blog
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							Newsletters
						</li>
					</ul>
				</div>

				{/* partner links here  */}

				<div className="partner">
					<h6 className="font-medium text-lg text-center leading-normal pb-6 mt-6">
						Partner
					</h6>
					<ul>
						<li className="font-normal text-base leading-normal text-gray-500">
							Our Partner
						</li>
						<li className="font-normal text-base leading-normal text-gray-500">
							Become a Partner
						</li>
					</ul>
				</div>
			</div>
			<div className="bordr border-t-2 border-gray-700 border-solid mx-auto"></div>
			<div className="footer-bottom flex gap-20 sm:gap-36 md:gap-80 justify-around pb-5 px-5">
				<p className="font-light sm:font-normal text-xs sm:text-sm md:text-lg leading-normal text-gray-500 ">
					Copyright &copy; 2023 Orbido. All Rights Reserved.
				</p>
				<p>
					<img
						className="w-24 sm:w-36 md:w-56"
						src={SocialLogo}
						alt="Social logo here"
					/>
				</p>
			</div>
		</div>
	);
};

export default Footer;
