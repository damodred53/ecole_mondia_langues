import React from "react";
import LittleSquare from "./Square";
import BigSquare from "./BigSquare";
import image3 from "../assets/3.jpg";
import image5 from "../assets/5.jpg";


const WhiteBar = ({isFirstInstance}) => {

    const text = isFirstInstance
    ? "Ceci est un test pour la première instance"
    : "Ceci est un test pour la deuxième instance";

    return (
        <div className="whitebar">
          <div className="bigsquare">
            {isFirstInstance ? (
            <div className="div_firstinstance">
                <h1 className="title_firstinstance">Place au e-learning !!</h1>
                <p className="paragraph_firstinstance">Les solutions E-learning permettent d’acquérir et de compléter ses connaissances et ses compétences sans avoir à se déplacer. L’accès au savoir est permanent (au bureau, à domicile….).

                    Choisir la formation à distance engendre de nombreux avantages :

                    - grande souplesse d’organisation
                    - optimisation du temps
                    - grande flexibilité pour se former à son rythme
                    - disponibilité sans contrainte de temps et de lieu
                    - convivialité et simplicité d’utilisation
                </p>
            </div> )
             : (
                <div className="div_firstinstance">
                <h1 className="title_firstinstance">Financement CPF</h1>
                <p className="paragraph_firstinstance">
                    L'ensemble de nos formations sont désormais financable via votre compte 
                    compte personnel de formation (CPF).

                    Pour ensavoir si votre compte CPF, cliquez ici : <a href="https://www.moncompteformation.gouv.fr/espace-prive/html/#/">Lien vers le site officiel</a>.

                </p>
            </div> 
             )

            }
          
          </div>
            <div className="square">
                {isFirstInstance ? 
                (<img src={image3}></img>)
                :
                (<img src={image5}></img>)}
            </div>
        </div>
    )
}

export default WhiteBar;