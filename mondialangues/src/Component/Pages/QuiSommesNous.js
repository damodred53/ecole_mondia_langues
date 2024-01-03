import React from "react";
import Header from "../header";
import Footer from "../footer";
import mondiaLangues from "../../assets/mondiaLangues.webp";
import Carousel2 from "../Qui-sommes-nous/Carousel_qui_sommes_nous";

const QuiSommesNous = () => {

    return (
        <>
        <Header />
        <h2>De la création de Mondia-Langues à aujourd'hui</h2>
        
        <div className="div_story_mondialangues">
        <img src={mondiaLangues} className="pic_mondialangues" alt="école de langue mondia-langues"></img>
        <div className="div_story_mondialangues_paragraph">
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem et tortor consequat id porta. Eget velit aliquet sagittis id consectetur purus
             ut faucibus. Pellentesque habitant morbi tristique senectus. Adipiscing tristique risus nec feugiat in. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Augue ut lectus arcu bibendum at varius vel. 
             Consectetur libero id faucibus nisl tincidunt eget. Ultricies integer quis auctor elit sed. Placerat orci nulla pellentesque dignissim enim. Etiam dignissim diam quis enim. Ornare arcu dui vivamus arcu felis bibendum ut.
              At risus viverra adipiscing at in. Mi ipsum faucibus vitae aliquet nec.</p>
            </div>
        </div>
        <div className="div_carousel">
        <Carousel2 />
        </div>
        <Footer />
        </>
    )
}
export default QuiSommesNous;