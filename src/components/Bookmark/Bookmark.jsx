import React from 'react';
import './Bookmark.css';

const Bookmark = ({ blog }) => {
    // const {bookmark} = props;
    // console.log(bookmark);

   
    return (
        <div className='bookmark-info-container'>
            {/* <div className='spendTime'>
                
            </div> */}
            <h2>Bookmarked Blogs:{blog.title}</h2>
        </div>
    );
};

export default Bookmark;