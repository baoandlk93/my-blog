import React from "react";
import Header from "../common/Header";
import Navbar from "../common/Navbar";

export default function UserLayout({ children }) {
	return (
		<div>
			<Header />
			<Navbar />
			{children}
		</div>
	);
}
