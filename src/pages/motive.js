import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';

const motive = () => {
    return (
        <div className="container">
            <div className="row px-5">
                <div className="col-12 header mt-5 d-flex justify-content-between mb-5">
                    <div className="title fs-4">
                        <h1>KABORE LUCIEN</h1>
                        <p>Développer full stack</p>
                    </div>
                    <address className="col-6">
                        <div className="col address-item d-flex">
                            <div className="col-6">
                                <p><a href="mailto:dikize@icloud.com">dikize@icloud.com</a></p>
                                <p><a className="mt-3" href="tel:+650272021">50 27 20 21</a></p>
                            </div>
                            <div className="col-6 ms-auto">
                                <p>63 Allée Angel Testa 93390</p>
                                <p><a href="@"> Portfolio</a> <img src="./media/portfolio.png" className="img-responsive" alt="tof"/></p>
                            </div>
                        </div>
                    </address>
                </div>

                {/* <div className="col-12 fs-5 d-flex flex-column mb-5">
                    <p className=" ms-auto mb-0">Nom de l'entreprise</p>
                    <p className=" ms-auto mb-0">A l'attention de ...</p>
                    <p className=" ms-auto mb-0">Adresse complète</p>
                </div> */}
                <div className="col-12 d-flex justify-content-center fs-5">
                    <p className="p-2 bd-highlight">
                        Clichy-Sous-Bois, le 28 Juillet 2020
                    </p>
                </div>
                <div className="col-12 fs-5">
                    <p className="mb-3">Madame, Monsieur,</p>
                    <p className="my-3">Passionné par la réalisation et le développement de projets web, je me suis tout
                        naturellement tourné vers une carrière de développeur web. Aujourd'hui je souhaite intégrer une entreprise dynamique,
                        aussi je serai ravi de rejoindre votre équipe en tant que développeur web.
                    </p>
                    <p className="my-3">Titulaires de plusieurs certificats Udemy car j'ai commencé en auto didacte avant de
                        rejoindre une formation de développer web en distancielle du 1 Avril au 10 Octobre 2021. Je sais
                        désormais faire preuve d'un esprit d'initiative et de rigueur. Fort de ma passion pour ce domaine,
                        je suis très investi dans mon travail et je prends grand plaisir à exercer, aussi cet engouement se
                        reflète largement dans la qualité de mon travail.
                    </p>
                    <p className="my-3">Si vous me laissez intégrer votre société, je mettrai mon savoir-faire en pratique,
                        ainsi que mes bonnes connaissances en HTML, Css, javascript, React, Mongodb et du SQL. Travailleur, efficace,
                        sociable, organisé et doté d'un esprit d'analyse, je prendrai soin d'assimiler les différents besoins de votre groupe et
                        saurai facilement m'intégrer. Très à l'aise dans mon métier, je pourrai développer des applications
                        web modernes et tendances ainsi qu'en assurer la maintenance.
                    </p>
                    <p className="my-3">Estimant posséder les compétences et qualités essentielles d'un bon développeur web, je suis persuadé que je saurai dûment compléter votre équipe et monter en compétence. En outre j'espère sincèrement que ma candidature retiendra votre attention et que j'aurai l'honneur de compter parmi vos employés.</p>
                    <p className="my-3">Je vous joins mon curriculum vitae qui soulignera mon parcours et me tiens à votre entière disposition pour vous révéler mes vives motivations.</p>
                    <p className="my-3">Je vous prie de croire, Madame, Monsieur, à l'assurance de ma profonde respect.</p>
                </div>

                <div className="col-12">
                    <div className="rectangle my-3 fs-5 d-flex justify-content-center">
                        <div className="rectangle-item">
                            <p className="mt-3">Cordialement</p>
                            <p className="mt-3">Kabore Lucien</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default motive;