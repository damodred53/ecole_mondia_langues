import React from "react";
import image7 from '../../assets/7.jpg';


const ReverseMediumSquareTraduction = ({instance}) => {

let textContent = "";

switch (instance) {
    case 1: textContent = 
    <div className="div_formation">
        <p className="div_formation_paragraph">Le soin apporté au choix de notre traducteur garantit la qualité linguistique ainsi que la pertinence technique de notre traduction.</p>
        <p className="div_formation_paragraph">La langue maternelle de nos traducteurs est celle de la langue cible de votre document.</p>
        <p className="div_formation_paragraph">Leurs compétences techniques sont en adéquation avec la nature du travail demandé.</p>
    </div>

    break;

    case 2 : textContent = <img src={image7} alt="bonjour en beaucoup de langues différentes"/>;
    break;

    case 3 :textContent = 
    <div className="div_formation">
            <h2 className="div_formation_title">
                Interprétation simultanée
            </h2>
            <p className="div_formation_paragraph">
                Pour vos conférences, congrès, séminaires, formation en salle...;
            </p>
            <p className="div_formation_paragraph">
                L'interpète restitue le message presque instantanément par microphione pendant que l'orateur s'exprime.
            </p>
    </div>
    break;

    default : textContent = "Il y a une erreur texte non disponible";

}


    return (

            <div className="reversemediumsquare">
                {textContent}
            </div>

    )
}

export default ReverseMediumSquareTraduction;