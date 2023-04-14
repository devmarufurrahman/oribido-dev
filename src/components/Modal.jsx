import ModalImg from "../asset/modalimg.png";

const Modal = ({ closeModal }) => {
	return (
		<div>
			<div
				onClick={closeModal}
				className="modal w-52 p-2 sm:w-80 h-14 flex gap-2 bg-white items-center z-30 rounded-xl justify-center relative left-8 sm:left-1/3 -top-16 sm:top-16 cursor-pointer">
				<img className="w-6 h-6" src={ModalImg} alt="Modal Img" />
				<p className="font-medium text-sm leading-5 tracking-wide text-black">
					Great! Your Payment is successfully.
				</p>
			</div>
		</div>
	);
};

export default Modal;
