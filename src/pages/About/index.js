import React from 'react';
import './styles.css';
import Menu from '../Menu';
import Profile from '../../assets/profile.jpg';
import { DiJavascript1, DiReact, DiNodejsSmall, DiJava } from "react-icons/di";

export default function About(){
    return(
        <div className="container">
            <Menu />

            <main className="about-content">
                <div>
                    <h1>Sobre</h1>
                </div>

                <section>
                    <figure>
                        <img src={Profile} alt="" className="pic"/>
                    </figure>

                    <div className="content">
                        <p>
                            Sou desenvolvedor e apaixonado por programação desde 2013, quando 
                            comecei a estudar e entender mais sobre a área da tecnologia.
                        </p>

                        <p>
                            Sou formado como Técnico de Informática em 2013, onde aprendi os conceitos básicos
                            sobre a área, pode-se dizer que foi o <i>start</i> em minha carreira.
                        </p>

                        <p>
                            Também sou formado como Analista de Sistemas em 2019, onde consegui ir mais
                            a fundo nos conhecimentos e aprender um pouco mais sobre as linguagens de programação,
                            além de entender e conhecer como funciona a área de TI em âmbito organizacional.
                        </p>

                        <p>
                            Abaixo, seguem as linguagens de programação e tecnologias que mais conheço:
                        </p>

                        <div className="techs">
                            <div>
                                <DiJavascript1 className="icon" />
                                JavaScript
                            </div>

                            <div>
                                <DiReact className="icon"/>
                                ReactJS
                            </div>

                            <div>
                                <DiNodejsSmall className="icon"/>
                                Node.js
                            </div>

                            <div>
                                <DiJava className="icon"/>
                                Java
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}