import React from "react";

const blogs = [
    {
        id: 1,
        title: "Đây là video mình làm hướng dẫn mọi người tạo ứng dụng MVC\n" +
            "                    với JDBC",
        content: `<iframe width="853" height="480" src="https://www.youtube.com/embed/jUuSjMdpjpw"
                            title="Build-JDBC-with-MVC"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>`,
    }
]

export default function HomePage() {
    const renderVideo = (content) => {
        return <div dangerouslySetInnerHTML={{__html: content}}/>;
    }
    return (
        <>

            {blogs.map((blog) => (
                <div
                    key={blog.id}
                    className="flex flex-col gap-4 bg-gray-200 p-4 border-2 border-gray-300 m-3 text-center cursor-pointer">
                    <h1 className="text-3xl font-bold underline">{blog.title}</h1>
                    <div className="flex justify-center items-center">
                        {renderVideo(blog.content)}
                    </div>
                </div>
            ))}
        </>
    );
}
