import React from "react";
import Header from "../common/Header";
import Navbar from "../common/Navbar";

export default function UserLayout({ children }) {
	return (
		<div className="bg-gray-100 h-screen w-full">
			<Header />
			<Navbar />
			{children}
		</div>
	);
}
