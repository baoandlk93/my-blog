import React from "react";
import {TfiSearch} from "react-icons/tfi";
import {IoIosLogIn} from "react-icons/io";
import {Link, useNavigate} from "react-router-dom";
import logo from "../../assets/logo.svg";

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
                    <div className="text-yellow-500 text-xl  cursor-pointer"
                         onClick={() => navigate("/")}>
                        <svg version="1.1" viewBox="0 0 2000 2000" width="50" height="50" xmlns="http://www.w3.org/2000/svg">
                            <path transform="translate(0)" d="m0 0h2e3v2e3h-2e3z" fill="#FDFDFD"/>
                            <path transform="translate(1206,582)" d="m0 0h261v82l-2 165-2 194-1 124-1 64-1 1-21-1 4 6 9 10 9 15 7 16 4 16 1 10v20l-3 19-3 11-2 1-5-24-5-15-10-19-10-13-9-10-9-9-14-11-13-9-13-8-8-4-16-2 4 4 21 11 15 10 16 12 13 12 7 7 10 14 8 16 5 14 3 16v21l-4 20-4 16h-2l-4-16-7-20-8-16-7-11-9-11-11-12-13-13-17-13-14-10-12-8-18-11-10-6-11-6-18-10-11-6-14-8-28-17-11-8-16-13-12-13-8-14-4-12-1-5v-13l4-17 4-10 3 1 4 15 7 14 9 11 9 10 16 13 26 17 23 12h2v-5l-9-6-16-9-12-8-14-10-11-9-14-16-7-11-5-12-2-9v-15l3-12-1-5-18-20-12-14-12-13-3-3v-2l141-1 1-12 3-93 3-132v-13l-4 1-2 5-14 34-12 30-33 81-10 25-16 39-5 12-1 1-114 1 6 7 9 11 10 11 9 11 13 15 9 10 9 11 12 14-1 7-9 20-13 31-13 30-17 40-7 16h-170l-1-2 11-25 14-33 24-56 11-26 20-47 23-54 18-42 11-26 15-35 14-33 48-112 13-31 39-91z" fill="#1291C9"/>
                            <path transform="translate(894,582)" d="m0 0h242l-1 11-15 68-25 115-6 22-10 25-22 51-11 26-17 40-15 35-17 40-15 35-46 108-17 40-6 12-2 1h-68l1-9 12-54 38-174 4-17h-40l-16-16-7-8-7-7-7-8-12-13-11-12-14-15-24-26-9-10-4-4v-2l177-1 4-16 15-68 14-64 3-15-1-5-10-12-12-16-14-18-12-16-10-13-7-9z" fill="#010101"/>
                            <path transform="translate(609,582)" d="m0 0h243l-5 26-18 83-21 96-5 23-2 1h-117l3 5 16 16 7 8 8 8 7 8 9 9 7 8 12 13 7 7 7 8 11 11 1 2-1 11-26 119-29 133-7 32-2 2h-150l-6-1 1-8 19-87 23-105 32-146 20-91 21-96 1-7-4-6-10-13-14-18-12-16-16-21-10-13z" fill="#010101"/>
                            <path transform="translate(1417,903)" d="m0 0h2l4 21-2 10-4 11-4 8-8 11-9 10-10 10-14 11-16 11-21 12-31 16-30 15-7 3-24 11-16 8-4-2-6-12-3-15 1-4 7-4 12-6 20-8 15-7 26-12 8-5 25-13 20-12 19-12 17-12 13-12 8-9 8-13z" fill="#8A8686"/>
                            <path transform="translate(1429,935)" d="m0 0h2l5 15 1 6v12l-3 12-9 17-9 12-19 19-19 14-18 11-11 7-11 6-21 11-19 9-16 8-15 7h-6l-5-4-7-4-9-7-2-1v-2l-4-2-1-4 24-10 11-5 7-2 1-2 13-5 19-10 14-7 10-6 11-6 16-10 13-9 19-14 15-14 10-13 8-14z" fill="#8A8686"/>
                            <path transform="translate(743,1275)" d="m0 0h20l8 3 7 8 1 3v8l-4 7h-2l1 5 7 6 2 5-1 8-3 6-8 6-10 4-8 2-10 1h-18v-67l13-4z" fill="#010101"/>
                            <path transform="translate(1090,1275)" d="m0 0h18l10 4 7 6 5 10 1 3v14l-4 13-6 10-10 7-10 4-13 2-13-1-1-2-1-19v-35l1-10 4-3z" fill="#1291C9"/>
                            <path transform="translate(716,1274)" d="m0 0h2v70l-3 1h-18l-1-17h-7l-3 1-1 18-7 1h-14l-1-26v-42l10-2h12l1 28h10l1-29 1-1z" fill="#010101"/>
                            <path transform="translate(823,1274)" d="m0 0h7l6 15 16 47v5l-5 2-10 2h-6l-3-6-17 1-3 7h-19l-1-4 12-45 6-20 2-2z" fill="#010101"/>
                            <path transform="translate(1182,1276)" d="m0 0 2 1v18l-6 2-21 2-1 6 27-2 1 2v14l-1 2-12 2-15 1 1 5 14-1 13-1v19l-13 2-35 2-1-29v-29l1-10 7-2z" fill="#1292CA"/>
                            <path transform="translate(1233,1277)" d="m0 0h22l-1 8-15 54-4 8-5 2-6 1h-10l-4-5-9-25-11-33 1-4 9-3 5-1h7l8 26 2 8h2l6-23z" fill="#1292CA"/>
                            <path transform="translate(1265,1015)" d="m0 0h3l-2 4h-3l-2 4-4 4h-2l-1 4v13h4v2h10l4 3-16 8-29 14-4-2-6-12-3-15 1-4 7-4 12-6 20-8z" fill="#FEFEFE"/>
                            <path transform="translate(1276,1059)" d="m0 0 2 1 1 4-4 2v2h-2l-2 7-1 2v9l2 2 9 3-2 4-12 6h-6l-5-4-7-4-9-7-2-1v-2l-4-2-1-4 24-10 11-5z" fill="#FEFEFE"/>
                            <path transform="translate(1095,1296)" d="m0 0 9 1 5 4 2 5-1 10-5 6-6 3-7-1v-24l1-3z" fill="#FEFEFE"/>
                            <path transform="translate(745,1318)" d="m0 0h13l1 1v6l-4 3-4 1h-8l-1-1v-8z" fill="#eee"/>
                            <path transform="translate(1213,1066)" d="m0 0 7 6 11 12 11 11 1 3-6-2-10-9-8-8-5-7z" fill="#FEFEFE"/>
                            <path transform="translate(751,1292)" d="m0 0 5 2v6l-8 3h-5l-1-1v-8l1-1z" fill="#E5E4E4"/>
                            <path transform="translate(817,1309)" d="m0 0 3 1 3 10-1 1h-6v-8z" fill="#DCDBDB"/>
                        </svg>

                    </div>
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
                            <TfiSearch color="blue"/>
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
                        <button
                            className=" flex  gap-1 items-center justify-center ml-4 relative text-blue-600 text-sm">
                            <IoIosLogIn/>
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
