import Paypal from "../asset/payple.png";

const Checkout = () => {
	return (
		<div>
			<div className="checkout-wrapper">
				<div className="checkout-head">
					<img src={Paypal} alt="Paypal" />
					<div className="div">
						<h2>Paypal</h2>
						<p>Checkout</p>
					</div>
				</div>
				<div className="checkout-content">
					<div className="amount">
						<p>Total</p>
						<h5>$210</h5>
					</div>
					<button>Change</button>
				</div>
				<button>Make Payment</button>
			</div>
		</div>
	);
};

export default Checkout;
