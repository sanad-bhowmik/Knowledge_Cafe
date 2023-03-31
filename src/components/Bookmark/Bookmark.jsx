import React from 'react';
import './Bookmark.css';
import Titleblog from '../Titleblog/Titleblog';

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
               <Titleblog></Titleblog>
            </div>
        </div>
    );
};

export default Bookmark;