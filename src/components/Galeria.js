import React from 'react';
import Card from './Card';
import './Galeria.css';

const filmes = [
    { image: 'filme-1.webp' },
    { image: 'filme-2.jpg' },
    { image: 'filme-3.webp' },
];

const Galeria = () => {
    return (
        <div className="galeria">
            {filmes.map((movie, index) => (
                <Card key={index} image={movie.image} />
            ))}
        </div>
    );
};

export default Galeria;
