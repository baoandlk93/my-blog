import React from "react";
import { content } from "../../service/data";

export default function BlogPage() {
	return (
		<div className="bg-white p-4">
			{content.map((item) => (
				<div
					key={item.id}
					className="bg-gray-200 p-4 border-2 border-gray-300 m-3 text-center cursor-pointer">
					<h1 className="text-xl font-bold">{item.title}</h1>
				</div>
			))}
		</div>
	);
}
