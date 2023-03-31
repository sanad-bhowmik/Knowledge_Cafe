import React from 'react';
import './Author.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Author = (props) => {
    // console.log(props);
    const { author, title, coverImageUrl, authorImageUrl, readTime, publishDate } = props.blog;
    // Spent time on read
    const handleAddtoSpent = props.handleAddtoSpent;

    return (
        <div className='author-details-container'>
            <img src={coverImageUrl} alt="" className='coverImg' />
            <div className='blog-details'>
                <div className='author-details'>
                    <img src={authorImageUrl} alt="" />
                    <div className='Name'>
                        <h5>{author}</h5>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <div className='readingTime'>
                    <button>{readTime} min read<FontAwesomeIcon icon={faBookmark} /></button>
                </div>
            </div>
            <h2 className='title'>{title}</h2>

            <p style={{ color: "gray", fontSize: "15px" }}>#beginners #programming</p>

            <button className='markasBtn'onClick={() => handleAddtoSpent(props.blog)}>Mark as Read</button>
            <hr />
        </div>
    );
};

export default Author;