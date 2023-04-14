import RewardImg from "../asset/rewards.png";
import SecureImg from "../asset/secuerd.png";
import BalanceImg from "../asset/balance.png";

const MainContent = () => {
	const contentP = {
		width: "570px",
	};
	const button = {
		background:
			"linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
	};
	return (
		<div className="flex justify-between ">
			<div className="content flex flex-col">
				<h1
					style={{ width: "622px", height: "154px" }}
					className="not-italic font-semibold text-5xl text-white tracking-wide leading-relaxed text-justify mb-6">
					You do the business, we’ll handle the money.
				</h1>
				<p
					style={contentP}
					className=" h-24 not-italic font-normal text-lg text-gray-200">
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<button
					style={button}
					className=" w-40 h-16 rounded-xl font-medium text-lg capitalize text-black">
					Get Started
				</button>
			</div>

			{/* card content here  */}

			<div className="cards flex flex-col gap-5">
				<div
					style={{ width: "500px" }}
					className="reward-card flex gap-5 cursor-pointer hover:bg-gradient-to-r from-gray-800 to-gray-900 h-24  rounded-md justify-center items-center">
					<div className="img">
						<img src={RewardImg} alt="reward img" />
					</div>
					<div className="card-text flex flex-col items-start">
						<h2 className="font-semibold text-lg capitalize text-white leading-snug	tracking-wide ">
							Rewards
						</h2>
						<p className="h-12 not-italic font-normal text-base leading-6 w-96 text-left text-gray-300">
							The best credit cards offer some tantalizing combinations of
							promotions and prizes
						</p>
					</div>
				</div>
				<div
					style={{ width: "500px" }}
					className="secure-card flex gap-5 cursor-pointer hover:bg-gradient-to-r from-gray-800 to-gray-900 h-24  rounded-md justify-center items-center">
					<div className="img">
						<img src={SecureImg} alt="Secure img" />
					</div>
					<div className="card-text flex flex-col items-start">
						<h2 className="font-semibold text-lg capitalize text-white leading-snug	tracking-wide ">
							100% Secured
						</h2>
						<p className="h-12 not-italic font-normal text-base leading-6 w-96 text-left text-gray-300">
							We take proactive steps make sure your information and
							transactions are secure.
						</p>
					</div>
				</div>
				<div
					style={{ width: "500px" }}
					className="balance-card flex gap-5 cursor-pointer hover:bg-gradient-to-r from-gray-800 to-gray-900 h-24  rounded-md justify-center items-center">
					<div className="img">
						<img src={BalanceImg} alt="balance img" />
					</div>
					<div className="card-text flex flex-col items-start">
						<h2 className="font-semibold text-lg capitalize text-white leading-snug	tracking-wide ">
							Balance Transfer
						</h2>
						<p className="h-12 not-italic font-normal text-base leading-6 w-96 text-left text-gray-300">
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
