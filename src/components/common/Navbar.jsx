import React from "react";
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const menu = [
        {
            title: "NHÀ SÁNG TẠO",
            link: "/content-create",
        },
        {
            title: "DANH MỤC",
            link: "/content",
        },
        {
            title: "XU HƯỚNG THEO DÕI",
            link: "/content",
        },
        {
            title: "MỚI NHẤT",
            link: "/content",
        },
        {
            title: "KHÁM PHÁ",
            link: "/content",
        },
        {
            title: "EDITOR'S CHOICE",
            link: "/content",
        },
        {
            title: "TRENDING",
            link: "/content",
        },
        {
            title: "VIDEOS",
            link: "/content",
        },
    ];
    const clickWrite = () => {
        // toast.success("Bạn không có viết bài được đâu, đây là blog của tôi mà =))", {
        // 	position: "top-right",
        // });
        navigate("/content-create");

    };
    return (
        <nav className="bg-blue-950 p-4">
            <div className="container mx-auto flex items-center justify-between">
                <ul className="flex space-x-8">
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a
                                href={item.link}
                                className="text-white font-bold hover:text-blue-500  hover:overline">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={clickWrite}>
                    VIẾT BÀI
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
