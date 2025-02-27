import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getBlogs, selectBlogs} from "../../../features/blogSlice.js";
import ScrollToTop from "../../common/ScrollToTop.jsx";
import {changeDate} from "../../../ultilities/convertData.js";


export default function NewsPage() {
    const [blogs, setBlogs] = useState([]);
    const dispatch = useDispatch();
    const blogList = useSelector(selectBlogs);
    const goToExternalSite = (url) => {
        window.open(url, "_blank");
    };

    useEffect(() => {
        if (!blogList) {
            dispatch(getBlogs({keyword: "all"}));
        }
        setBlogs(blogList);
    }, [blogList]);

    return (
        <>

            <div className="bg-white p-4 w-full">
                <ScrollToTop/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-hidden">
                    {blogs?.map((item, index) => (
                        <div key={index}
                             onClick={() => goToExternalSite(item.url)}
                             className="bg-gray-200 p-4 border-2 border-gray-300 m-3 text-center cursor-pointer">
                            <div>
                                <img src={item.urlToImage} alt="" className="w-full h-64"/>
                                <span>Ngày đăng: {changeDate(item.publishedAt)}</span>
                            </div>
                            <h1 className="text-xl font-bold">{item.title}</h1>
                            <div className="text-sm text-left">
                                <span className="font-bold">Tác giả :</span> {item.author}
                            </div>
                            <div className="text-left">
                                <span className="font-bold">Mô tả :</span> {item.description}
                            </div>
                            <div className="text-left">
                                <span className="font-bold">Nội dung :</span> {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
