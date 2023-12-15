import React from "react";
import Logo from '../assets/logo_mondia_langues.webp';
import { Link } from "react-router-dom";

const Header = () => {


    return (
        <div className="header">
            <img src={Logo} alt="logo de mondia-langue"></img>

            <div className="header_title_navbar">
                <h1>Mondia-Langues</h1>
                <nav className="header_navbar">
                    <ul>

                        <li><Link to="/" >Accueil</Link></li>
                        <li><Link to="/presentation" >Qui sommes-nous ?</Link></li>
                        <li><Link to="/formation" >Votre formation</Link></li>
                        <li><Link to="/traduction" >Traduction/Interprétation</Link></li>
                        <li><Link to="/entreprise" >Vie de l'entreprise</Link></li>
                        <li><Link to="/contact" >Contact</Link></li>
                    </ul>
                </nav>

            </div>


        </div>
    )
}

export default Header;