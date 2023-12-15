import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {


    return (

        <footer className="footer">
            <section className="footer_column">
                <h3>Nos coordonnées</h3>
                <ul>
                    <li>20 quai Jehan Fouquet</li>
                    <li>53000 Laval</li>
                    <li>02 43 53 54 17</li>
                    <li>info@mondia-langues.fr</li>
                </ul>
            </section>

            <hr className="footer_bar"></hr>

            <section className="footer_column">
                <h3>Nos prestations</h3>
                <ul>
                    <a href="#"><li>Financement</li></a>
                    <a href="#"><li>Nos cours de langues</li></a>
                    <a href="#"><li>Séjours linguistiques</li></a>
                    <Link to="/traduction"><li>Traduction / Interprétation</li></Link>
                </ul>
            </section>

            <hr className="footer_bar"></hr>

            <section className="footer_column">
                <h3>Vie de l'entreprise</h3>
                <ul>
                    <a href="#"><li>Newsletter</li></a>
                    <Link to="/entreprise"><li>Nos actualités</li></Link>
                    <a href="#"><li>Réseaux sociaux</li></a>
                    <a href="#"><li>Témoignages</li></a>
                </ul>
            </section>


        </footer>
    )
}

export default Footer;