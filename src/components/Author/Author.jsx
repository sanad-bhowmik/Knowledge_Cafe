import React from 'react';
import './Author.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Author = (props) => {
    const { author, title, coverImageUrl, authorImageUrl, readTime, publishDate } = props.blog;
    return (
        <div className='author-details-container'>
            <img src={coverImageUrl} alt="" className='coverImg'/>
            <div className='blog-details'>
                <div className='author-details'>
                    <img src={authorImageUrl} alt="" />
                    <div className='Name'>
                        <h5>{author}</h5>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <div className='readingTime'>
                    <p>{readTime} min read<FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>
            <h2 className='title'>{title}</h2>
            <p style={{color: "gray" , fontSize:"15px"}}>#beginners #programming</p>
            <a href="">Mark as read</a>
            <hr />
        </div>
    );
};

export default Author;