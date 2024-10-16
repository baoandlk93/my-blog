import React, { useState } from "react";

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="flex">
			<div></div>
			<main className="flex-1 p-4">{/* Nội dung của bạn ở đây */}</main>
		</div>
	);
}

export default Sidebar;
