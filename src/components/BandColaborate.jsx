import Airbnb from "../asset/airbnb.png";
import Binance from "../asset/binance.png";
import Coinbase from "../asset/coinbase.png";
import Dropbox from "../asset/dropbox.png";

const BandColaborate = () => {
	return (
		<div>
			<div className="brand-name flex justify-evenly mb-40">
				<a href="#">
					<img src={Airbnb} alt="airbnb" />
				</a>
				<a href="#">
					<img src={Binance} alt="Binance" />
				</a>
				<a href="#">
					<img src={Coinbase} alt="Coinbase" />
				</a>
				<a href="#">
					<img src={Dropbox} alt="Dropbox" />
				</a>
			</div>
		</div>
	);
};

export default BandColaborate;
