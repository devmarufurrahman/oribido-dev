const Service = () => {
	// service wrapper css
	const bg = {
		background:
			"linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%)",
	};

	// button css
	const button = {
		background:
			"linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
	};
	return (
		<div className="flex justify-center items-center">
			<div
				style={bg}
				className="service-wrapper backdrop-blur-sm rounded-3xl  flex flex-col gap-7 md:flex-row md:justify-between  items-center px-12 m-32 sm:m-48 py-10 ">
				<div className="services ">
					<h2 className=" font-semibold text-xl sm:text-3xl md:text-5xl text-left">
						Let’s try our service now!
					</h2>
					<p className="font-normal text-sm sm:text-base md:text-lg leading-relaxed	tracking-wider text-gray-500 text-left">
						Everything you need to accept card payments and grow your business
						anywhere on the planet.
					</p>
				</div>
				<button
					style={button}
					className="w-20 h-10 md:w-40 md:h-16 rounded-xl font-light text-sm md:font-normal md:text-base lg:font-medium lg:text-lg capitalize text-black  px-2">
					Get Started
				</button>
			</div>
		</div>
	);
};

export default Service;
