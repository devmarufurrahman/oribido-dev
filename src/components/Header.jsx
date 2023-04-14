import Logo from "../asset/orbido-logo.png";

const Header = () => {
	return (
		<header className="container flex gap-64 justify-around items-center">
			<div className="logo-wrapper ">
				<div className="logo flex gap-1 items-center">
					<img src={Logo} alt="orbido logo" />
					<h2 className="font-semibold text-lg text-white ">
						OR<span style={{ color: "#D69300" }}>BIDO</span>
					</h2>
				</div>
			</div>
			<div className="menu">
				<ul className=" flex gap-14">
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About Us</a>
					</li>
					<li>
						<a href="#">Feature</a>
					</li>
					<li>
						<a href="#">Solution</a>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
