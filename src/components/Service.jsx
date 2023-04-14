const Service = () => {
	// service wrapper css
	const bg = {
		width: "79%",
		height: "293px",

		background:
			"linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
	};

	// button css
	const button = {
		background:
			"linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
	};
	return (
		<div>
			<div
				style={bg}
				className="service-wrapper backdrop-blur-sm rounded-3xl mx-auto flex justify-between  items-center px-12 mb-56">
				<div className="services ">
					<h2 className="leading-normal font-semibold text-5xl text-left">
						Let’s try our service now!
					</h2>
					<p
						style={{ width: "500px" }}
						className="font-normal text-lg leading-relaxed	tracking-wider text-gray-500 h-16 text-left">
						Everything you need to accept card payments and grow your business
						anywhere on the planet.
					</p>
				</div>
				<button
					style={button}
					className="w-40 h-16 rounded-xl font-medium text-lg capitalize text-black">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Service;
