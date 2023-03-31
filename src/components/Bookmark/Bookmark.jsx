import React from 'react';
import './Bookmark.css'

const Bookmark = () => {
    return (
        <div className='bookmark-info-container'>
            <div className='spendTime'>
                <h3>Spent time on read : 177 min</h3>
            </div>
            <div className='bookmarkBlog'>
                <h2>Bookmarked Blogs : 8</h2>
            </div>
        </div>
    );
};

export default Bookmark;