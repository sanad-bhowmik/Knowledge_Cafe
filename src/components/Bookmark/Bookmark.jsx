import React from 'react';
import './Bookmark.css';

const Bookmark = ({ blog }) => {
    return (
        <div className='bookmark-info-container'>
            <h2>{blog.title}</h2>
        </div>
    );
};

export default Bookmark;