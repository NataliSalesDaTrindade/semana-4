import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <h1>Galeria de Filmes</h1>
            <nav>
                <ul className="nav-links">
                    <li><a href="#home">Início</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#movies">Filmes</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
