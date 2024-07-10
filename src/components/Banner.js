import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <div className="banner-text">
                <p>Assista aos melhores filmes de todos os tempos</p>
            </div>
            <img className='banner-img' src='banner.jpg' alt="banner"/>
        </div>
    );
};

export default Banner;
