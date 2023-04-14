import { useState } from "react";
import Paypal from "../asset/payple.png";
import Modal from "./Modal";

const Checkout = () => {
	// modal state here
	const [modal, setModal] = useState(false);

	// close modal function
	const closeModal = () => {
		setModal(false);
	};

	// gradient color css
	const gradientColor = {
		background: "linear-gradient(113.08deg, #FFFFFF -242.51%, #14101D 85.56%)",
		boxShadow: "inset -0.243217px -0.243217px 0.364826px rgba(0, 0, 0, 0.36)",
	};

	// button color css
	const button = {
		background:
			"linear-gradient(157.81deg, #DEF9FA -43.27%, #BEF3F5 -21.24%, #9DEDF0 12.19%, #7DE7EB 29.82%, #5CE1E6 51.94%, #33BBCF 90.29%)",
	};

	return (
		<div>
			{/* modal show here & close modal props pass  */}

			{modal && <Modal closeModal={closeModal} />}

			<div
				style={gradientColor}
				className="checkout-wrapper w-40 sm:w-56 h-56 rounded-xl p-3 relative mx-auto sm:mx-0 -top-8 sm:top-14 sm:left-60  md:left-1/4 z-10">
				<div className="checkout-head flex gap-3">
					<img
						className="w-10 sm:w-14 h-10 sm:h-14"
						src={Paypal}
						alt="Paypal"
					/>
					<div className="div">
						<h2 className="font-semibold text-xl sm:text-2xl text-white">
							Paypal
						</h2>
						<p className="font-normal text-xs leading-4	tracking-wide text-gray-500 text-left">
							Checkout
						</p>
					</div>
				</div>
				<div className="checkout-content flex justify-around pt-6">
					<div className="amount">
						<p className="text-xs leading-4	tracking-wide text-gray-500 text-left">
							Total
						</p>
						<h5 className="text-left">$210</h5>
					</div>
					<button className="w-16 h-8 border border-cyan-300 font-normal text-xs leading-5 text-cyan-300 rounded-md">
						Change
					</button>
				</div>
				<div className="btn w-32 sm:w-48 h-8 mt-6 ">
					<button
						onClick={() => setModal(true)} // modal show onClick
						style={button}
						className="rounded-lg p-2 sm:py-2 sm:px-10 font-normal sm:font-medium text-xs leading-5 tracking-wide text-black">
						Make Payment
					</button>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
