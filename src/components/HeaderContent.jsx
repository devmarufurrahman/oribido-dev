import React from "react";

const HeaderContent = () => {
	// Custom style
	const style = {
		lineHight: "82px",
		width: "897px",
		height: "306px",
		background:
			"linear-gradient(90deg, #1FD895 10.14%, #1CD2A2 10.15%, #17C7C0 10.16%, #12BADF 49.71%, #C5018E 84.62%)",
		webkitBackgroundClip: "text",
		webkitTextFillColor: "transparent",

		textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
	};

	return (
		<div className="">
			<div
				style={style}
				className="header-content m-auto my-52 not-italic font-bold flex items-center text-center uppercase  text-7xl  overflow-hidden bg-clip-text border border-black border-solid fill-transparent ">
				make your dream website Stand out in a crowd
			</div>
		</div>
	);
};

export default HeaderContent;
