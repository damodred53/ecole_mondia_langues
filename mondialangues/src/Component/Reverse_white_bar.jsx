import React from "react";
import ReverseSquare from "./reverseSquare";
import ReverseBigSquare from "./ReverseBigSquare";
import image2 from '../assets/2.jpg';
import image6 from '../assets/6.jpg';


const ReverseWhiteBar = ({isFirstInstance}) => {

   

    return (
        <div className="reversewhitebar">
            <div className="reversebigsquare">
                {isFirstInstance ? (
                  <div className="div_formation">
                  <h2 className="div_formation_title">Les langues enseignées</h2>
                  <p className="div_formation_paragraph">
                    Nous disposons de fomateurs professionnels pou les langues suivantes : 
                    l'Anglais / le français FLE / l'allemand / le russe / l'italien / le portugais et l'espagnol.

                    Pour toute autre demande en langue, vous pouvez nous contacter directement. 
                  </p>
              </div>  
                ) : (
                <div className="div_formation">
                    <h2 className="div_formation_title">Cours individuels et collectifs</h2>
                    <p className="div_formation_paragraph">
                        Mondia-Langues propose aussi bien des formations individuelles que collectives. Pour s'inscrire 
                        à nos cours de langues, vous pouvez nous contacter directement, par mail ou bien par téléphone.
                    </p>
            </div>
                )
                }
            </div>
            <div className="reversesquare">
                {isFirstInstance ? (
                    <img src={image2} ></img>
                )
                :
                (
                    <img src={image6} ></img>
                )}
            </div>
        </div>
    )
}

export default ReverseWhiteBar;