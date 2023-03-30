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
                <div>
                    <p>{readTime} min read<FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Author;