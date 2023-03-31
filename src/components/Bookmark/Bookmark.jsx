import React from 'react';
import './Bookmark.css';

const Bookmark = ({time}) => {

    console.log(time);
    let total = 0;
    for(const blog of time){
        total = total + blog.readTime;
    }
    return (
        <div className='bookmark-info-container'>
            <div className='spendTime'>
                <h3>Spent time on read : {total} min</h3>
            </div>
            <div className='bookmarkBlog'>
                <h2>Bookmarked Blogs : 8</h2>
            </div>
        </div>
    );
};

export default Bookmark;