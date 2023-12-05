import React from "react";
import Header from "../header";
import Footer from "../footer";
import Carousel from "../Carousel";
import DarkBar from "../Dark_bar";
import WhiteBar from "../White_bar";



const LandingPage = () => {

    return (
        <>
        <Header />
        <Carousel />
        <DarkBar />
        <WhiteBar />
        <h2>Ceci est la page principale</h2>
        <Footer />
        </>
    )
}

export default LandingPage;


