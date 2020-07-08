import React from 'react';
import './styles.css';
import Menu from '../Menu';

export default function Projects(){
    return(
        <div className="container">
            <Menu />

            <main className="projects-content">
                <div>
                    <h1>Projetos</h1>
                </div>

                <section className="section-projects">
                    <p>
                        Grande parte destes projetos se encontra disponível
                        em meu <a href="https://github.com/rodrigoge" target="blank">GitHub.</a> Clique 
                        em cada cartão para acessar o repositório específico do projeto.
                    </p>

                    <a href="https://github.com/rodrigoge/help-the-next" target="blank" className="card">
                        <div>
                            <h2>Help The Next</h2>
                            <br/>
                            <p>
                                Projeto criado com o objetivo de se tornar um caminho mais fácil
                                entre as instituições e ONG's com as pessoas que podem ajudá-las. O intuito
                                é fazer com que os usuários possam encontrar as ONG's que necessitam de ajuda
                                e entrar em contato com elas por meio de E-mail ou WhatsApp. Foi desenvolvido 
                                com Node.js, ReactJS e React Native.
                            </p>
                        </div>
                    </a>

                    <a href="https://github.com/rodrigoge/comunica-app" target="blank" className="card">
                        <div>
                            <h2>Comunica App</h2>
                            <br/>
                            <p>
                                Projeto criado para a finalidade de ajudar as pessoas, principalmente crianças
                                que possuem o TEA (Transtorno do Espectro Autista). Essas crianças necessitam de
                                uma ajuda maior na comunicação e na realização das tarefas, e esse projeto auxilia
                                elas a estarem realizando isso de uma forma melhor e com mais facilidade ao demonstrar
                                para as outras pessoas. Desenvolvido com Java JSF, Primefaces e Hibernate. 
                            </p>
                        </div>
                    </a>

                    <a href="https://github.com/rodrigoge/snake-game-js" target="blank" className="card">
                        <div>
                            <h2>Snake Game</h2>
                            <br/>
                            <p>
                                Um simples jogo da cobrinha na qual o usuário deve encontra a maçã
                                que surge aleatoriamente no tabuleiro. Desenvolvido com HTML5, CSS3 e JS. 
                            </p>
                        </div>
                    </a>
                </section>
            </main>
        </div>
    );
}