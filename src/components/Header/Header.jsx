import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h2>Knowledge Cafe</h2>
            <div>
                <a href="/blog">Blog</a>
                <a href="/write">Write</a>
                <a href="/login">Login</a>
                <a href="/image"><img src="https://media.licdn.com/dms/image/D5603AQEOjP3ON2knRg/profile-displayphoto-shrink_800_800/0/1677507598430?e=2147483647&v=beta&t=G-6CChYSPDCnu-Hl5VBqfgSQax6aZaCfkOnQWVm_584" alt="Avatar"  className='avatar'/></a>
            </div>
        </nav>
    );
};

export default Header;