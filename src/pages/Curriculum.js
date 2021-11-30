import React, { Component } from 'react'
import Swal from "sweetalert2";
import MediaQuery from 'react-responsive'  

import CvParcour from '../components/curriculum/CvParcour';
import Skills from '../components/curriculum/Skills';
// import NavBar from '../components/NavBar';

export default class Curriculum extends Component {
    state = {
        showInfo: false
    }

    handleInfo = () => {
        Swal.fire({
            // title: 'Contact!',
            html:
            "<div className='contact-cv'>" +
                "<h1>Contact</h1>" +
                "<address>" +
                    "<p><a href='mailto:dikize@icloud.com?subject=Contact%20depuis%20Kabore.com'>dikize@icloud.com</a></p>" +
                    "<p><a href='tel:+33650272120'>06 50 27 20 21</a></p>" +
                    "<p>63 Allée Angel Testa</p>" +
                    "<p>93390 Clichy-sous-Bois</p>" +
                    "<p><a href='https://dikize-portfolio.netlify.app/' target='_blank' rel='noopener noreferrer'>Portfolio</a></p>" +
                    "<p><a href='https://www.linkedin.com/in/lucien-kabore-a25102223' target='_blank' rel='noopener noreferrer'>LinkedIn</a></p>" +
                "</address>" +
            "</div>" 
            ,
        })
    }


    render() {
        return (
            <div className="container-curriculum">
                <div className="container-skills">
                    <Skills />
                </div>

                <div className="cvContente">
                    <MediaQuery maxWidth={1108}>
                        <div className="idContent">
                            <img src="./media/profile.png" alt="profil-pic"/>
                            <h3>Kabore Lucien</h3>
                            
                            <button onClick={this.handleInfo}>
                                <span>Contactez-moi</span> 
                                <i className="fas fa-address-book"></i>
                            </button>
                        </div>
                    </MediaQuery>

                    <h1>Expérience professionnelle</h1>
                    <CvParcour />
                </div>

                
            </div>
        )
    }
}
