import React from "react";

export default function HomePage() {
    return (
        <>
            <div className="flex flex-col gap-4 p-4 text-center">
                <h1 className="text-3xl font-bold underline">Đây là video mình làm hướng dẫn mọi người tạo ứng dụng MVC
                    với JDBC</h1>
                <div className="flex justify-center items-center">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/jUuSjMdpjpw"
                            title="Build-JDBC-with-MVC"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>

        </>
    );
}
