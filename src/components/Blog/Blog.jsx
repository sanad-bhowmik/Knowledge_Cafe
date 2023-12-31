import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import './Blog.css'
import Bookmark from '../Bookmark/Bookmark';
import { ToastContainer, toast } from "react-toastify";

const Blog = () => {
    const [blogs, setBlog] = useState([]);
    const [time, setTime] = useState(0);
    const [bookmark, setBookmark] = useState([]);

    useEffect(() => {
        fetch('Fakedata.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);
    const handleBookMark = (blog) => {
        const newBookMark = [...bookmark, blog];
        setBookmark(newBookMark);
        // console.log(newBookMark);
        if (bookmark.find((b) => b.id === blog.id)) {
            toast.error("This post already  added.", { autoClose: 1000 });
            const newBookMark = [...bookmark, blog];
            setBookmark(newBookMark);
        } else {
            const newBookMark = [...bookmark, blog];
            setBookmark(newBookMark);
            toast.success("Post added successfully.", { autoClose: 1000 });
        }
    }

    // onclick
    const handleAddtoSpent = (timezone) => {
        // console.log(time);
        if (timezone) {
            const NewTime = time + timezone;
            setTime(NewTime);
        }
        else {
            setTime(time);
        }
    }
    return (
        <div className='blog-container'>
            <div className="author-container">
                {
                    blogs.map(blog => <Author key={blog.id} blog={blog} handleAddtoSpent={handleAddtoSpent} handleBookMark={handleBookMark}></Author>)
                }
            </div>
            <div className="bookmark-container">
                <div className='spentTime'>
                    <h3>Spent time on read : {time} min</h3>
                </div>
                <h1>Bookmarked Blogs :{bookmark.length}</h1>

                {
                    bookmark.map(blog => <Bookmark blog={blog}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Blog;