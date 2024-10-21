import { useState } from "react";

export default function CreateBlog() {
    const [blog, setBlog] = useState({
        image: null,
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

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setBlog({ ...blog, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = () => {
                setBlog({ ...blog, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(blog);
    };

    return (
        <div className="max-w-xl mx-auto mt-10">
            <h1 className="text-2xl font-bold mb-5">Tạo Mới Blog</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
                <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-300 rounded mb-4"
                >
                    {blog.image ? (
                        <img src={blog.image} alt="Preview" className="max-h-full" />
                    ) : (
                        <span>Drag and drop an image here</span>
                    )}
                </div>
                <div className="mb-4">
                    <input
                        id="file-upload"
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                    />
                    <label
                        htmlFor="file-upload"
                        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Chọn hình ảnh
                    </label>
                </div>
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
}
