import React, { useEffect, useState } from 'react';
import './Blog.css'

const Blog = () => {
    const [blog, setBlog] = useState([]);

    useEffect( () => {
        fetch('Fakedata.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div className='blog-container'>
            <div className="author-container">
                <h2>Blog gose here</h2>
            </div>
            <div className="bookmark-container">
                <h3>Bookmark here....</h3>
            </div>
        </div>
    );
};

export default Blog;