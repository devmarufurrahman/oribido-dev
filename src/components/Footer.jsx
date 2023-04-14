import Logo from "../asset/footer-logo.png";
import SocialLogo from "../asset/social-logo.png";

const Footer = () => {
	return (
		<div className="flex flex-col gap-20">
			<div className="footer-top flex justify-between  ">
				<div className="band-logo flex flex-col">
					<div className="logo flex items-center pb-8">
						<img src={Logo} alt="Logo" />
						<h1 className="font-semibold text-5xl leading-snug">
							OR<span style={{ color: "#D69300" }}>BIDO</span>
						</h1>
					</div>
					<p className="w-80 h-16 text-left text-gray-500 font-normal text-lg leading-8">
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>
				<div className="useful-links">
					<h6>Useful Links</h6>
					<ul>
						<li>
							<a href="#">Content</a>
						</li>
						<li>
							<a href="#">How it Works</a>
						</li>
						<li>
							<a href="#">Create</a>
						</li>
						<li>
							<a href="#">Explore</a>
						</li>
						<li>
							<a href="#">Terms & Services</a>
						</li>
					</ul>
				</div>
				<div className="community">
					<h6>Community</h6>
					<ul>
						<li>
							<a href="#">Help Center</a>
						</li>
						<li>
							<a href="#">Partners</a>
						</li>
						<li>
							<a href="#">Suggestions</a>
						</li>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Newsletters</a>
						</li>
					</ul>
				</div>
				<div className="partner">
					<h6>Partner</h6>
					<ul>
						<li>
							<a href="#">Our Partner</a>
						</li>
						<li>
							<a href="#">Become a Partner</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="bordr border-t-2 border-gray-700 border-solid"></div>
			<div className="footer-bottom flex justify-between px-5 ">
				<p>Copyright &copy; 2023 Orbido. All Rights Reserved.</p>
				<p>
					<img src={SocialLogo} alt="Social logo here" />
				</p>
			</div>
		</div>
	);
};

export default Footer;
