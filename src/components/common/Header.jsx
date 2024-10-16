import React from "react";
import { FaInfo } from "react-icons/fa6";
import { TfiSearch } from "react-icons/tfi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BsVectorPen } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
const Header = () => {
	const navigate = useNavigate();
	const menu = [
		{
			title: "Bài viết",
			link: "/blogs",
		},
		{
			title: "Hỏi đáp",
			link: "/questions",
		},
		{
			title: "Thảo luận",
			link: "/discussions",
		},
	];
	return (
		<header className="bg-white shadow-md">
			<div className="container mx-auto px-4 py-2 flex items-center justify-between">
				{/* Phần bên trái */}
				<div className="flex items-center">
					<div className="text-yellow-500 text-xl font-bold">HBA-DEV</div>
					<ul className="flex space-x-4 ml-8 text-gray-500">
						{menu.map((item, index) => (
							<li
								key={index}
								className="cursor-pointer  p-2 rounded hover:text-black"
								onClick={() => navigate(item.link)}>
								{item.title}
							</li>
						))}
					</ul>
				</div>

				<div className="flex items-center">
					<div className="relative">
						<input
							type="text"
							placeholder="Tìm kiếm trên HBA-DEV"
							className="border border-gray-300 rounded-md px-3 py-2 pr-8 focus:outline-none focus:border-blue-500"
						/>
						<button className="absolute right-2 top-1/2 transform -translate-y-1/2">
							<TfiSearch color="blue" />
						</button>
					</div>

					{/* Các icon thông báo */}
					{/* <div className="flex items-center ml-8 space-x-4">
						<div className="relative">
							<button className="p-2 rounded-full hover:bg-gray-100">
								<FaInfo />
							</button>
							<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
								39
							</span>
						</div>
						<div className="relative">
							<button className="p-2 rounded-full hover:bg-gray-100">
								<IoMdNotificationsOutline />
							</button>
							<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
								48
							</span>
						</div>
						<button className="p-2 rounded-full hover:bg-gray-100">
							<BsVectorPen />
						</button>
					</div> */}

					{/* Quốc gia và avatar */}
					<div className="flex items-center ml-8">
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png"
							alt="Vietnam flag"
							className="w-6 h-4"
						/>
						<span className="ml-2 text-gray-500">VI</span>
						<button className=" flex  gap-1 items-center justify-center ml-4 relative text-blue-600 text-sm">
							<IoIosLogIn />
							<Link to="/login">Đăng nhập / Đăng ký</Link>
						</button>
						{/* <button className="ml-4 relative">
							<img
								src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
								alt="Avatar"
								className="w-8 h-8 rounded-full"
							/>
							<span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
								new
							</span>
						</button> */}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
