import React from 'react';
import MediaQuery from 'react-responsive'

const Skills = () => {

    return (
        <div className="skills">
            <div className="id">
                {/* <MediaQuery minWidth={1108}> */}
                    <div className="idContent">
                        <img src="./media/profile.png" alt="profil-pic"/>
                        <h3>Kabore Lucien</h3>
                        <p>Electrotechnique</p>
                        <p>Développeur web Full Stack</p>
                    </div>
                    <div className="contact-cv">
                        <h2 className="">Contact</h2>
                        <address>
                            <p><a href="mailto:dikize@icloud.com?subject=Contact%20depuis%20Kabore.com" target="_blank" rel="noopener noreferrer">dikize@icloud.com</a></p>
                            <p><a href="tel:+33650272120">06 50 27 20 21</a></p>
                            <p>63 Allée Angel Testa</p>
                            <p>93390 Clichy-sous-Bois</p>
                            {/* <p><a href="https://curriculum-vitae-react.herokuapp.com/" target="_blank" rel="noopener noreferrer">Portfolio</a></p> */}
                            <p><a href="https://www.linkedin.com/in/lucien-kabore/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                                <h4>LinkedIn</h4>
                            </a></p>
                        </address>
                    </div>
                {/* </MediaQuery> */}

                <div className="formation">
                    <h2>DIPLOME</h2>
                    <p><u> Développeur Web</u> <br/> <cite>OpenClassRooms</cite></p>
                    <p><u>Formateur relais</u> <br/> <cite>Enedis CAMPUS DE LA PEROLLIERE</cite></p>
                    <p><u>Bac pro Electrotechnique</u> <br/> <cite>CFA Gustave Eiffel Chilly-Mazarin</cite></p>
                    <p><u>CAP Réal ouvrage électriques</u> <br/> <cite>CFA Gustave Eiffel Chilly-Mazarin</cite></p>
                </div>

                <div className="hard-skills">
                    <h2>HARD SKILLS</h2>
                    <h3><i className="fas fa-laptop"></i> <span>Développeur Web</span></h3>
                    <p>JavaScript | ReactJS | Node.js</p>
                    <p>HTML | CSS | Bootstrap </p>
                    <p>SQL | sequelize | MongoDB </p>
                    <p>Json | Python | Django </p>
                    <h3><i className="fas fa-tools"></i> <span>Electrotechnique</span></h3>
                    <p>Habilitation B2T, BC, BR</p>
                    <p>Deploi Sat/C E-Plan</p>
                    <p>Chaumeil badge Enedis</p>
                    <p>Microsoft professional</p>
                </div>

                <div className="soft-skills">
                    <h2>SOFT SKILLS</h2> 
                    <p>Capacité d’analyse</p>
                    <p>Écoute active</p>
                    <p>Collaboration</p>
                    <p>Adaptabilité | Autonome</p>
                    <p>Persévérance | Créativité</p>
                    <p>Sens de l'organisation</p>
                </div>
            
            </div>
        </div>
    );
};

export default Skills;