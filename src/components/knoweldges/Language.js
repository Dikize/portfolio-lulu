import React, { Component } from 'react'
import ProgressBar from './ProgressBar';

export default class Language extends Component {
    state = {
        languages: [
            {id: 1, value: "Javascript", xp:1.5},
            {id: 2, value: "Css", xp:1.8},
            {id: 3, value: "Python", xp:0.8},
            {id: 4, value: "Sql", xp:0.8},
            {id: 5, value: "Git", xp:0.8},
            {id: 6, value: "Php", xp:0.4},
        ],
        frameworks: [
            {id: 1, value: "React", xp:1.5},
            {id: 2, value: "Bootstap", xp:1.9},
            {id: 3, value: "Sass", xp:1.5},
            {id: 4, value: "Matérial UI", xp:0.5},
            // {id: 4, value: "Django", xp:0.5}
        ]
    }
    render() {
        let { languages, frameworks } = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar 
                    language={languages}
                    className="languageDisplay"
                    title="Language"
                />
                <ProgressBar 
                    language={frameworks}
                    title="Frameworks & bibliothèques"
                    className="frameworkDisplay"
                />
            </div>
        )
    }
}
