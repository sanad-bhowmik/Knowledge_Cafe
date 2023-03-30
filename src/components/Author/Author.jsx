import React from 'react';
import './Author.css'

const Author = (props) => {
    const {author,title,coverImageUrl,authorImageUrl,readTime,publishDate} = props.blog;
    return (
        <div className='author-details'>
            <img src={coverImageUrl} alt="" />
        </div>
    );
};

export default Author;