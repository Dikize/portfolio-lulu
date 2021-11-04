import React from 'react';
import NavBar from '../components/NavBar';
import Language from '../components/knoweldges/Language';
import Hobbies from '../components/knoweldges/Hobbies';
import OtherSkills from '../components/knoweldges/OtherSkills';
import Experience from '../components/knoweldges/Experience';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <NavBar />
            <div className="knowledgesContent">
                <Language />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;