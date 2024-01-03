import React from "react";
import image1 from '../../assets/1.webp';


const MediumSquareTraduction = ({instance}) => {
let textContent = ""
    switch (instance) {

        case 1: textContent = <img src={image1} alt="une femme parlant plusieurs langues" />;
        break;
        case 2: textContent =  
        <div className="div_formation">
            <h2 className="div_formation_title">Vous avez un besoin précis ?</h2>
            <p className="div_formation_paragraph">
            Nous vous conseillons dans le choix du mode d'interprétation le mieux adapté. <br />
            Si vous le souhaitez, nous vous fournissons et nous mettons en place le matériel nécessaire.
            </p>
        </div>
        break;
        case 3: textContent = 
        <div className="div_formation">
            <h2 className="div_formation_title">
                Interprétation consécutive
            </h2>
            <p className="div_formation_paragraph">
                Pour vos négociations, réunions restreintes, visites, formations... L'orateur s'exprime et s'interrompt à intervalles réguliers pour que l'interprète prenne la parole à son tour et reformule ce qui vient d'être dit
            </p>
        </div>;
        break;
        default: textContent= "texte par défault";

    }


    return (

            <div className="mediumsquare">
                {textContent}
            </div>

    )
}

export default MediumSquareTraduction;