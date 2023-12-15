import React from "react";
import Header from "../header";
import Footer from "../footer";
import Carousel from "../Carousel";
import DarkBar from "../Dark_bar";
import WhiteBar from "../White_bar";
import ReverseWhiteBar from "../Reverse_white_bar";
import BigSquare from "../BigSquare";
import ReverseBigSquare from "../ReverseBigSquare";
import ReverseSquare from "../reverseSquare";
import Square from '../Square';
import { Link } from "react-router-dom";




const LandingPage = () => {

   


    return (
        <>
        <Header />
        <Carousel />
        <DarkBar />
        <WhiteBar isFirstInstance={true}/>
        <DarkBar />
        <ReverseWhiteBar isFirstInstance={true}/>
        <DarkBar />
        <WhiteBar />
        <DarkBar />
        <ReverseWhiteBar />
        <Footer />
        </>
    )
}

export default LandingPage;


