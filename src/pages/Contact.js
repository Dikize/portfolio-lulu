import React from 'react';
import NavBar from '../components/NavBar';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
    return (
        <div className="contact">
            <NavBar />
            <div className="contactContent">
                <div className="header"></div>
                <div className="contactBox">
                    <h1>Contactez-moi</h1>
                    <ul>
                        <li>
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Paris</span>
                        </li>
                        <li>
                            <i className="fas fa-mobile-alt"></i>
                            <CopyToClipboard text="0650272021">
                                <span
                                    className="clickInput"
                                    onClick={() => { alert("Téléphone copié")}}
                                >
                                    06 50 27 20 21
                                </span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <i className="fas fa-envelope"></i>
                            <CopyToClipboard text="dikize@icloud.com">
                                <span
                                    className="clickInput"
                                    onClick={() => { alert("E-mail copié")}}
                                >
                                    dikize@icloud.com
                                </span>
                            </CopyToClipboard>
                        </li>                       
                    </ul>
                </div>

                <div className="socialNetwork">
                    <ul>
                        <a href="https://www.linkedin.com/in/lucien-kabore/" target="_blank" rel="noopener noreferrer">
                            <h4>LinkedIn</h4>
                            <i className="fab fa-linkedin"></i>
                        </a>

                        <a href="https://github.com/Dikize" target="_blank" rel="noopener noreferrer">
                            <h4>Github</h4>
                            <i className="fab fa-github"></i>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;