import Logo from "../asset/footer-logo.png";
import SocialLogo from "../asset/social-logo.png";

const Footer = () => {
	return (
		<div>
			<div className="footer-top">
				<div className="band-logo">
					<div className="logo">
						<img src={Logo} alt="Logo" />
						<h1>
							OR<span>BIDO</span>
						</h1>
					</div>
					<p>A new way to make the payments easy, reliable and secure.</p>
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
			<div className="footer-bottom">
				<p>Copyright &copy; 2023 Orbido. All Rights Reserved.</p>
				<p>
					<img src={SocialLogo} alt="Social logo here" />
				</p>
			</div>
		</div>
	);
};

export default Footer;
