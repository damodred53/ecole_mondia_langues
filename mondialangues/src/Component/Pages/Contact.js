import React from "react";
import Header from "../header";
import Footer from "../footer";
import DarkBarContact from "../Contact/Dark_bar_contact";
import WhiteBarContact from "../Contact/White_bar_contact";
;
const Contact = () => {

    return (
        <>
        <Header/>
        <h2>Ceci est la page de contact</h2>
        <DarkBarContact />
        <WhiteBarContact />
        <Footer />
        </>
    )
}
export default Contact;