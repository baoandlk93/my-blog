import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		toast.success("Chức năng này để cho vui thôi chứ tôi không lấy thông tin của bạn đâu !", {
			position: "top-right",
		});
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50">
			<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-96">
				<h2 className="text-2xl font-bold mb-6 text-center">Đăng ký tài khoản cho HBA-DEV</h2>
				<p className="text-gray-700 mb-4">
					Chào mừng bạn đến với <span className="font-bold">Nền tảng HBA-DEV</span>! Tham gia cùng
					chúng tôi để tìm kiếm thông tin hữu ích cần thiết để cải thiện kỹ năng IT của bạn. Vui
					lòng điền thông tin của bạn vào biểu mẫu bên dưới để tiếp tục.
				</p>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="name">
							Tên của bạn
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="text"
							placeholder="Tên của bạn"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="email">
							Địa chỉ email của bạn
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Địa chỉ email của bạn"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="username">
							Tên tài khoản
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="username"
							type="text"
							placeholder="Tên tài khoản"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="password">
							Mật khẩu
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="Mật khẩu"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="mb-4">
						<label
							className="block text-gray-700 text-sm font-bold mb-2"
							htmlFor="confirm-password">
							Xác nhận mật khẩu của bạn
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="confirm-password"
							type="password"
							placeholder="Xác nhận mật khẩu"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<div className="mb-6">
						<input
							type="checkbox"
							id="agree"
							className="mr-2"
						/>
						<label
							htmlFor="agree"
							className="text-sm">
							Tôi đồng ý với{" "}
							<a
								href="#"
								className="text-blue-500">
								Điều khoản dịch vụ
							</a>{" "}
							của HBA-DEV
						</label>
					</div>
					<div className="flex items-center justify-between">
						<button
							className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							type="submit">
							Đăng ký
						</button>
					</div>
				</form>
				<p className="text-center text-gray-500 text-xs mt-8">Hoặc đăng nhập với</p>
				<div className="flex items-center justify-center mt-4 space-x-4">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
						<FaFacebook />
					</button>
					<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
						<FaGoogle />
					</button>
					<button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center">
						<FaGithub />
					</button>
				</div>
			</div>
		</div>
	);
}

export default Register;
