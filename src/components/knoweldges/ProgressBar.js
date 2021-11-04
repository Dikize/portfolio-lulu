import React from 'react';

const ProgressBar = (props) => {
    // console.log(props)
    return (
        <div className={props.className}>
            <h3>{props.title}</h3>

            <div>
                {
                    props.language.map((item) =>{
                        let xpYear = 2;
                        let progressBar = item.xp / xpYear * 100 + '%';

                        return (
                            <div key={item.id} className="languagesList">
                                <div className="container-progressBar">
                                    <li>{item.value}</li>
                                    <span>{progressBar}</span>
                                </div>
                                    <div key={item.id} className="progressBar" style={{width:progressBar}}></div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    );
};

export default ProgressBar;