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
		<div className="flex gap-10">
			<div className="content ">
				<h1 className="not-italic font-semibold text-5xl text-white tracking-wide leading-relaxed ">
					You do the business, we’ll handle the money.
				</h1>
				<p
					style={contentP}
					className=" h-24 not-italic font-normal text-lg text-gray-200">
					With the right credit card, you can improve your financial life by
					building credit, earning rewards and saving money. But with hundreds
					of credit cards on the market.
				</p>
				<button style={button} className=" w-40 h-16 rounded-xl">
					Get Started
				</button>
			</div>
			<div className="cards">
				<div className="reward-card">
					<img src={RewardImg} alt="reward img" />
					<h2>Rewards</h2>
					<p>
						The best credit cards offer some tantalizing combinations of
						promotions and prizes
					</p>
				</div>
				<div className="secure-card">
					<img src={SecureImg} alt="Secure img" />
					<h2>100% Secured</h2>
					<p>
						We take proactive steps make sure your information and transactions
						are secure.
					</p>
				</div>
				<div className="balance-card">
					<img src={BalanceImg} alt="balance img" />
					<h2>Balance Transfer</h2>
					<p>
						A balance transfer credit card can save you a lot of money in
						interest charges.
					</p>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
