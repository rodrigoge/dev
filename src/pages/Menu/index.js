import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

export default function Menu(){
    function menu(){
        let show = true; 

        const menuSection = document.querySelector(".menu-section")
        const menuToggle = menuSection.querySelector(".menu-toggle")
        
        if(menuToggle.click){
            if(!menuSection.classList.contains("on")){
                menuSection.classList.add("on", show)
                show = !show;
            } else {
                menuSection.classList.remove("on", !show)
            }
        } 
    }

    return(
        <header>
            <div className="menu-section">
                <div className="menu-toggle" onClick={menu}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <nav>
                    <ul>
                        <li><Link className="link" to="/">Início</Link></li>
                        <li><Link className="link" to="/sobre">Sobre</Link></li>
                        <li><Link className="link" to="/projetos">Projetos</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}