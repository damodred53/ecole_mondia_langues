import React from "react";
import {Link} from "react-router-dom";
import Facebook from "../../assets/logo_facebook.webp";
import Instagram from '../../assets/logo instagram.png';
import Twitter from '../../assets/logo_twitter.avif';



const BigSquareEntreprise = () => {

    return (

        <div className="bigsquare" >
            <div className="div_formation">
                <h2 className="div_formation_title">Retrouvez-nous sur les réseaux sociaux</h2>
                <ol className="list_link div_formation_paragraph">
                    <li>
                        <a href="#" title="Notre compte est en construction sur ce réseau social" ><img src={Facebook} className="list_link_network" alt="logo de Facebook"></img></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/mondia_langues/"><img src={Instagram} className="list_link_network" alt="logo d'Instagram"></img></a>
                    </li>
                    <li>
                        <a href="#" title="Notre compte est en construction sur ce réseau social"><img src={Twitter} className="list_link_network " alt="logo de Twitter"></img></a>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default BigSquareEntreprise;