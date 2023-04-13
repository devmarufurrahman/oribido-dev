import Netflix from "../asset/netflix.png";
import Manulife from "../asset/manulife.png";
import Dribbble from "../asset/dribbble.png";
import NagativeBl from "../asset/nagative-bl.png";
import PositiveBl from "../asset/positive-bl.png";
import Checkout from "./Checkout";
import PlayStore from "../asset/googleplay.png";
import AppleStore from "../asset/appstore.png";

const Payment = () => {
	return (
		<div>
			<Checkout />
			<div className="payment-container">
				<div className="transactions">
					<h3>Last Transaction</h3>
					<div className="transaction">
						<div className="transaction-name">
							<img src={Dribbble} alt="dribble img" />
							<h5>Dribbble Pro</h5>
							<p>15 Days ago</p>
						</div>
						<div className="transaction-balance">
							<img src={NagativeBl} alt="negative" />
							<p>-$250,93</p>
						</div>
					</div>

					<div className="transaction">
						<div className="transaction-name">
							<img src={Netflix} alt="netflix img" />
							<h5>Netflix</h5>
							<p>4 Days ago</p>
						</div>
						<div className="transaction-balance">
							<img src={NagativeBl} alt="negative" />
							<p>-$250,93</p>
						</div>
					</div>

					<div className="transaction">
						<div className="transaction-name">
							<img src={Manulife} alt="manulife img" />
							<h5>Manulife Cash</h5>
							<p>4 Days ago</p>
						</div>
						<div className="transaction-balance">
							<img src={PositiveBl} alt="positive" />
							<p>$250,93</p>
						</div>
					</div>
				</div>
				<article className="article-content">
					<h1>Easily control your billing & invoicing.</h1>
					<p>
						Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
						aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
						placerat.
					</p>
					<div className="play-store">
						<img src={AppleStore} alt="play store " />
						<img src={PlayStore} alt="apple store" />
					</div>
				</article>
			</div>
		</div>
	);
};

export default Payment;
