import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Login() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		toast.success("Đăng ký tài khoản cho HBA-DEV làm gì đây chỉ là trang blog của tôi thôi =))", {
			position: "top-right",
		});
		// Xử lý đăng nhập ở đây
	};

	return (
		<div className="flex justify-center items-center h-screen bg-gray-100">
			<div className="bg-white rounded-lg shadow-lg p-8">
				<h2 className="text-2xl font-bold text-center mb-4">
					<span className="text-blue-500">HBA</span>-DEV
				</h2>
				<h3 className="text-lg font-medium text-gray-700 text-center mb-6">
					Đăng nhập vào HBA-DEV
				</h3>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-gray-700 text-sm font-bold mb-2">
							<i className="fas fa-user mr-2"></i> Tên người dùng
						</label>
						<input
							type="text"
							id="username"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Nhập tên người dùng"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-gray-700 text-sm font-bold mb-2">
							<i className="fas fa-lock mr-2"></i> Mật khẩu
						</label>
						<input
							type="password"
							id="password"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							placeholder="Nhập mật khẩu"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<div className="flex items-center justify-between mb-6">
						<div className="flex items-center">
							<input
								id="remember-me"
								type="checkbox"
								className="form-checkbox h-4 w-4 text-blue-500 transition"
							/>
							<label
								htmlFor="remember-me"
								className="ml-2 block text-sm leading-5 text-gray-900">
								Ghi nhớ đăng nhập
							</label>
						</div>
						<div>
							<a
								href="#"
								className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
								Quên mật khẩu?
							</a>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<button
							type="submit"
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Đăng nhập
						</button>
						<button
							onClick={() => navigate("/register")}
							type="button"
							className="border border-gray-300 hover:border-gray-400 text-gray-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
							Tạo tài khoản
						</button>
					</div>
				</form>
				<div className="mt-8 text-center">
					<p className="text-gray-500">Hoặc đăng nhập bằng</p>
					<div className="flex items-center justify-center mt-4 space-x-4">
						<a
							href="#"
							className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-400 hover:bg-blue-500 text-white">
							<FaFacebook />
						</a>
						<a
							href="#"
							className="flex items-center justify-center h-10 w-10 rounded-full bg-red-500 hover:bg-red-600 text-white">
							<FaGoogle />
						</a>
						<a
							href="#"
							className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-900 text-white">
							<FaGithub />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
