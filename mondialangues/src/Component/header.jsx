import React from "react";
import Logo from '../assets/logo_mondia_langues.webp';

const Header = () => {


    return (
        <div className="header">
            <img src={Logo} alt="logo de mondia-langue"></img>

            <div className="header_title_navbar">
                <h1>Mondia-Langues</h1>
                <nav className="header_navbar">
                    <ul>

                        <a href="#"><li>Accueil</li></a>
                        <a href="#"><li>Qui sommes-nous ?</li></a>
                        <a href="#"><li>Votre formation</li></a>
                        <a href="#"><li>Traduction/Interprétation</li></a>
                        <a href="#"><li>Vie de l'entreprise</li></a>
                        <a href="#"><li>Contact</li></a>
                    </ul>
                </nav>

            </div>


        </div>
    )
}

export default Header;