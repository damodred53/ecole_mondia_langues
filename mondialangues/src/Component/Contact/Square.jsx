import React from "react";
import image4 from "../../assets/4.jpeg";

const LittleSquare = ({isFirstInstanceContact}) => {


    return(
        <div className="square squarecontact" >
           
            <>
            <h4>Nos coordonnées</h4>
            <div>
                <p>20 Quai Jehan Fouquet</p>
                <p>53000 Laval</p>
                <p>02 43 53 54 17</p>
                <p>info@mondia-langues.fr</p>
                <p>Nous écrire ? <a href="mailto: info@mondia-langues.fr">cliquez ici</a></p>
            </div>
            
            </>
            
           
        </div>
    )
}

export default LittleSquare;