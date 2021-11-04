import React, { Component } from 'react';
import { dataCurriculum } from '../../data/dataCurriculum';
// import Project from './Project';

class CvParcour extends Component {
    state = {
        dataCv: dataCurriculum,
    }

    render() {
        let { dataCv } = this.state;
        return (
            <div className="content-parcour">
                {
                    dataCv
                        .map(item => {

                            return (
                                <div key={item.id} className="data-cv">
                                    <div className="title">
                                        <span>{item.dateEntre}</span>
                                        <h3><u>{item.name}</u> <br/><span>{item.entreprise}</span></h3>
                                        <span>{item.dateSorti}</span>
                                    </div>

                                    <table className="table-cv">
                                        <tbody>
                                            <tr>
                                                <td>{item.tache}</td>
                                                <td>{item.tache2}</td>
                                                <td>{item.tache3}</td>
                                                <td>{item.tache4}</td>
                                                <td>{item.tache5}</td>
                                                <td>{item.tache6}</td>
                                                <td>{item.tache7}</td>
                                                <td>{item.tache8}</td>
                                                <td>{item.tache9}</td>
                                                <td>{item.tache10}</td>
                                                <td>{item.tache11}</td>
                                                <td>{item.tache12}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            )
                        })
                }
            </div>
        );
    }
}

export default CvParcour;