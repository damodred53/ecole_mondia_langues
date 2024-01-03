import React from "react";
import Header from "../header";
import Footer from "../footer";
import Carousel from "../Carousel";
import DarkBarEntreprise from "../Entreprise/DarkBarEntreprise";
import WhiteBarEntreprise from "../Entreprise/WhiteBarEntreprise";
import WhiteBarEntreprise2 from "../Entreprise/WhiteBarEntreprise2";
import TemoignagesStagiaires from "../../témoignages_étudiants.pdf";

const Entreprise = () => {

    return (
        <>
        <Header/>
        <Carousel />
        <DarkBarEntreprise />
        <WhiteBarEntreprise />
        <DarkBarEntreprise />
        <WhiteBarEntreprise2 />
        <DarkBarEntreprise />
        <>
            <section className="white_big_part">
                <div className="white_big_part_temoignages_students">
                    <h2>Indices de satisfaction 2022</h2>
                    <h3>Anglais </h3>
                    <ol>
                        <li>95% des stagiaires se disent satisfaits ou très satisfaits de nos formateurs.</li>
                        <li>95% des stagiaires se disent satisfaits ou très satisfaits de la formation.</li>
                        <li>90% de nos stagiaires ont trouvé leur progression satisfaisante.</li>
                    </ol>

                    <h3>Espagnol </h3>
                    <ol>
                        <li>96% des stagiaires se disent satisfaits ou très satisfaits de nos formateurs.</li>
                        <li>94% des stagiaires se disent satisfaits ou très satisfaits de la formation.</li>
                        <li>99% de nos stagiaires ont trouvé leur progression satisfaisante.</li>
                    </ol>

                    <h3>Français Langues Étrangères</h3>
                    <ol>
                        <li>99% des stagiaires se disent satisfaits ou très satisfaits de nos formateurs.</li>
                        <li>99% des stagiaires se disent satisfaits ou très satisfaits de la formation.</li>
                        <li>99% de nos stagiaires ont trouvé leur progression satisfaisante.</li>
                    </ol>

                    <h3>Italien</h3>
                    <ol>
                    <li>99% des stagiaires se disent satisfaits ou très satisfaits de nos formateurs.</li>
                        <li>99% des stagiaires se disent satisfaits ou très satisfaits de la formation.</li>
                        <li>99% de nos stagiaires ont trouvé leur progression satisfaisante.</li>
                    </ol>

                    <h3>Russe</h3>
                    <ol>
                        <li>99% des stagiaires se disent satisfaits ou très satisfaits de nos formateurs.</li>
                        <li>99% des stagiaires se disent satisfaits ou très satisfaits de la formation.</li>
                        <li>99% de nos stagiaires ont trouvé leur progression satisfaisante.</li>
                    </ol>
                </div>
            </section>
                <div className="div_temoignages">
                    <a className="div_temoignages_link" download href={TemoignagesStagiaires}>Cliquer ici pour consulter les témoignages de nos stagiaires</a>
                </div>

        </>
        <Footer />
        </>
    )
}

export default Entreprise;