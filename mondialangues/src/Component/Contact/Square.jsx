import React from "react";
import image4 from "../../assets/4.jpeg";

const LittleSquare = ({isFirstInstanceContact}) => {


    return(
        <div className="square squarecontact div_formation" >
           

            <h2 className="div_formation_title">Nos coordonnées</h2>

                <p>20 Quai Jehan Fouquet<br/>
                53000 Laval<br/>
                02 43 53 54 17<br/>
                info@mondia-langues.fr </p>
                <p>Nous écrire ? <a href="mailto: info@mondia-langues.fr">cliquez ici</a></p>

            

            
           
        </div>
    )
}

export default LittleSquare;