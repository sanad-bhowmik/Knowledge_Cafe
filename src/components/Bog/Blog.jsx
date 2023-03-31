import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import './Blog.css'
import Bookmark from '../Bookmark/Bookmark';

const Blog = () => {
    const [blogs, setBlog] = useState([]);

    useEffect(() => {
        fetch('Fakedata.json')
            .then(res => res.json())
            .then(data => setBlog(data))
    }, [])
    return (
        <div className='blog-container'>
            <div className="author-container">
                {
                    blogs.map(blog => <Author key={blog.id} blog={blog}></Author>)
                }
            </div>
            <div className="bookmark-container">
                <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Blog;