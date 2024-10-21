import {useState} from "react";

export default function CreateBlog(){
    const [blog, setBlog] = useState({
        title: '',
        content: [
            {
                title: '',
                content: '',
            },
        ],
        author: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog((prevBlog) => ({
            ...prevBlog,
            [name]: value,
        }));
    };

    const handleContentChange = (index, e) => {
        const { name, value } = e.target;
        const newContent = blog.content.map((item, i) =>
            i === index ? { ...item, [name]: value } : item
        );
        setBlog({ ...blog, content: newContent });
    };

    const handleAddContentSection = () => {
        setBlog((prevBlog) => ({
            ...prevBlog,
            content: [...prevBlog.content, { title: '', content: '' }],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Xử lý dữ liệu, ví dụ gửi đến API
        console.log(blog);
    };
    return (
        <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Tạo Mới Blog</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="title">
                        Tiêu đề chính
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={blog.title}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                {blog.content.map((section, index) => (
                    <div key={index} className="mb-4">
                        <label className="block text-gray-700 font-semibold mb-2">
                            Tiêu đề phần {index + 1}
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={section.title}
                            onChange={(e) => handleContentChange(index, e)}
                            className="w-full px-3 py-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <label className="block text-gray-700 font-semibold mb-2">
                            Nội dung phần {index + 1}
                        </label>
                        <textarea
                            name="content"
                            value={section.content}
                            onChange={(e) => handleContentChange(index, e)}
                            className="w-full px-3 py-2 h-24 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                ))}
                <button
                    type="button"
                    onClick={handleAddContentSection}
                    className="mb-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                    Thêm Phần
                </button>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2" htmlFor="author">
                        Tác giả
                    </label>
                    <input
                        type="text"
                        name="author"
                        value={blog.author}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Đăng Blog
                </button>
            </form>
        </div>
    );
};
