import React from 'react';

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Intérêts</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-running"></i>
                    <span>Boxe Anglaise</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-hiking"></i>
                    <span>Footing</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;