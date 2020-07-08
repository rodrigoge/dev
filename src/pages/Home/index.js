import React from 'react';
import './styles.css';
import Menu from '../Menu';

export default function Home(){
    return(
        <div className="container">
            <Menu />

            <main className="home-content">
                <div className="title">
                    <h1>
                        Olá, eu sou o <span>Rodrigo.</span>
                    </h1>
                    <p>Desevolvedor FullStack JavaScript</p>
                </div>

                <div className="social-medias">
                    <a href="https://github.com/rodrigoge" target="blank">
                        GitHub
                    </a>

                    <a href="https://www.linkedin.com/in/rgestevao/" target="blank">
                        LinkedIn
                    </a>

                    <a href="https://mailto:rgestevao@gmail.com" target="blank">
                        Email
                    </a>

                    <a href="https://facebook.com" target="blank">
                        Medium
                    </a>
                </div>
            </main>
        </div>
    );
}