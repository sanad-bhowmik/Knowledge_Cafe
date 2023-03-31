import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import './Blog.css'
import Bookmark from '../Bookmark/Bookmark';

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
        console.log(newBookMark);
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
                <div>
                    {/* <Bookmark time={time}></Bookmark> */}
                    <h3>Spent time on read : {time} min</h3>
                </div>
                <h1>{bookmark.length}</h1>

                {
                    bookmark.map(blog => <Bookmark blog={blog}></Bookmark>)
                }
            </div>
        </div>
    );
};

export default Blog;