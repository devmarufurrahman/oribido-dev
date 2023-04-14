import RewardImg from "../asset/rewards.png";
import SecureImg from "../asset/secuerd.png";
import BalanceImg from "../asset/balance.png";

const MainContent = () => {
	const button = {
		background:
			"linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
	};
	return (
		<div className="flex flex-col md:flex-row gap-20 lg:gap-0 items-center px-8">
			<div className="content flex flex-col md:w-2/5 mx-auto">
				<h1 className=" font-semibold text-2xl sm:text-3xl md:text-5xl text-white  text-justify mb-6">
					You do the business, we’ll handle the money.
				</h1>
				<p className="  not-italic font-normal text-sm sm:text-base md:text-lg text-gray-200 text-left  md:mb-24 lg:mb-12">
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<button
					style={button}
					className=" w-20 sm:w-32 md:w-40 h-14 sm:h-16 rounded-xl font-medium text-sm sm:text-base md:text-lg capitalize text-black ">
					Get Started
				</button>
			</div>

			{/* card content here  */}

			<div className="cards flex flex-col gap-5">
				{/* reward card  */}

				<div className="reward-card flex  gap-5 cursor-pointer hover:bg-gradient-to-r from-gray-800 to-gray-900   rounded-md justify-center items-center">
					<div className="img">
						<img src={RewardImg} alt="reward img" />
					</div>
					<div className="card-text flex flex-col items-start">
						<h2 className="font-semibold text-sm sm:text-base md:text-lg capitalize text-white leading-snug	tracking-wide ">
							Rewards
						</h2>
						<p className=" not-italic font-normal text-xs sm:text-sm md:text-base leading-6  text-left text-gray-300">
							The best credit cards offer some tantalizing combinations of
							promotions and prizes
						</p>
					</div>
				</div>

				{/* secure card  */}

				<div className="secure-card flex  gap-5 cursor-pointer hover:bg-gradient-to-r from-gray-800 to-gray-900 h-24  rounded-md justify-center items-center">
					<div className="img">
						<img src={SecureImg} alt="Secure img" />
					</div>
					<div className="card-text flex flex-col items-start">
						<h2 className="font-semibold text-sm sm:text-base md:text-lg capitalize text-white leading-snug	tracking-wide ">
							100% Secured
						</h2>
						<p className="h-12 not-italic font-normal text-xs sm:text-sm md:text-base leading-6  text-left text-gray-300">
							We take proactive steps make sure your information and
							transactions are secure.
						</p>
					</div>
				</div>

				{/* balance card  */}

				<div className="balance-card flex  gap-5 cursor-pointer hover:bg-gradient-to-r from-gray-800 to-gray-900 h-24  rounded-md justify-center items-center">
					<div className="img">
						<img src={BalanceImg} alt="balance img" />
					</div>
					<div className="card-text flex flex-col items-start">
						<h2 className="font-semibold text-sm sm:text-base md:text-lg capitalize text-white leading-snug	tracking-wide ">
							Balance Transfer
						</h2>
						<p className="h-12 not-italic font-normal text-xs sm:text-sm md:text-base leading-6  text-left text-gray-300">
							A balance transfer credit card can save you a lot of money in
							interest charges.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
