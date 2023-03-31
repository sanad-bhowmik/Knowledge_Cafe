import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import './Blog.css'
import Bookmark from '../Bookmark/Bookmark';

const Blog = () => {
    const [blogs, setBlog] = useState([]);
    const [time, setTime] = useState([])

    useEffect(() => {
        fetch('Fakedata.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, []);

    // Bookmarked Blogs 
    const handleAddtoBookmark = (blog) => {
        console.log(blog);
    }
    // onclick
    const handleAddtoSpent = (blog) => {
        // console.log(blog);
        const newTime = [...time, blog];
        setTime(newTime);
    }
    return (
        <div className='blog-container'>
            <div className="author-container">
                {
                    blogs.map(blog => <Author key={blog.id} blog={blog} handleAddtoSpent={handleAddtoSpent} handleAddtoBookmark={handleAddtoBookmark}></Author>)
                }
            </div>
            <div className="bookmark-container">
                <Bookmark time={time}></Bookmark>
            </div>
        </div>
    );
};

export default Blog;