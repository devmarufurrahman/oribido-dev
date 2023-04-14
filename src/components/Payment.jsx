import Netflix from "../asset/netflix.png";
import Manulife from "../asset/manulife.png";
import Dribbble from "../asset/dribbble.png";
import NagativeBl from "../asset/nagative-bl.png";
import PositiveBl from "../asset/positive-bl.png";
import Checkout from "./Checkout";
import PlayStore from "../asset/googleplay.png";
import AppleStore from "../asset/appstore.png";

const Payment = () => {
	// gradient color style
	const gradientColor = {
		background: "linear-gradient(113.08deg, #FFFFFF -242.51%, #14101D 85.56%)",
		boxShadow: "inset -0.243217px -0.243217px 0.364826px rgba(0, 0, 0, 0.36)",
	};

	return (
		<div className="my-60 ">
			<Checkout />
			<div className="payment-container flex flex-col gap-5 lg:flex-row sm:justify-around">
				<div
					style={gradientColor}
					className="transactions  sm:w-80 h-72 backdrop-blur-lg rounded-xl px-5 py-7 mx-auto sm:ml-10 md:m-0">
					<h3 className="font-semibold text-xl leading-5 text-left pb-8">
						Last Transaction
					</h3>

					{/* transaction-1  */}

					<div className="transaction flex justify-around pb-8">
						<div className="transaction-name flex gap-4">
							<div className="img">
								<img src={Dribbble} alt="dribble img" />
							</div>
							<div className="text">
								<h5 className="font-semibold text-base leading-5">
									Dribbble Pro
								</h5>
								<p className="font-normal text-xs leading-5 text-gray-500 text-left">
									15 Days ago
								</p>
							</div>
						</div>
						<div className="transaction-balance flex gap-1">
							<div className="img mt-1">
								<img src={NagativeBl} alt="negative" />
							</div>
							<p className="font-normal text-sm leading-5">-$250,93</p>
						</div>
					</div>

					{/* transaction-2  */}

					<div className="transaction flex justify-around pb-8">
						<div className="transaction-name flex gap-4">
							<div className="img">
								<img src={Netflix} alt="netflix img" />
							</div>
							<div className="text">
								<h5 className="font-semibold text-base leading-5">Netflix</h5>
								<p className="font-normal text-xs leading-5 text-gray-500 text-left">
									4 Days ago
								</p>
							</div>
						</div>
						<div className="transaction-balance flex gap-1">
							<div className="img mt-1">
								<img src={NagativeBl} alt="negative" />
							</div>
							<p className="font-normal text-sm leading-5">-$250,93</p>
						</div>
					</div>

					{/* transaction-3  */}

					<div className="transaction flex justify-around pb-8">
						<div className="transaction-name flex gap-4">
							<div className="img">
								<img src={Manulife} alt="manulife img" />
							</div>
							<div className="text">
								<h5 className="font-semibold text-base leading-5">
									Manulife Cash
								</h5>
								<p className="font-normal text-xs leading-5 text-gray-500 text-left">
									4 Days ago
								</p>
							</div>
						</div>
						<div className="transaction-balance flex gap-1">
							<div className="img mt-1">
								<img src={PositiveBl} alt="positive" />
							</div>
							<p className="font-normal text-sm leading-5">$250,93</p>
						</div>
					</div>
				</div>

				{/* article start here  */}

				<article className="article-content mx-auto lg:mx-0 w-2/5">
					<h1 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl	 leading-relaxed   text-left">
						Easily control your billing & invoicing.
					</h1>
					<p className="font-normal text-lg leading-7 text-gray-500  text-left mb-7">
						Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
						aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
						placerat.
					</p>
					<div className="play-store flex ml-0 gap-10 w-16 h-7 sm:w-32 sm:h-12">
						<img src={AppleStore} alt="play store " />
						<img src={PlayStore} alt="apple store" />
					</div>
				</article>
			</div>
		</div>
	);
};

export default Payment;
